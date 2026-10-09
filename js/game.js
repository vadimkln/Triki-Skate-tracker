// Гра з Triki в руці, як фінгерборд. Triki тут — контролер: трюк розпізнається за жестом.
//   Вирівнювання: тримаєш рівно ~1 с — запам'ятовуємо, де «верх» (u0).
//   Поп: Triki швидко нахиляється > 25° від рівного — кінець, що піднявся, вважаємо носом.
//   Політ: рахуємо оберти навколо довгої осі (фліп), вертикалі (розворот) і поперечної (impossible).
//   Приземлення: знову рівно й майже нерухомо. Догори дном і нерухомо — падіння. Понад 3 с — не зараховано.
import { S, saveSettings, bus } from './util.js';
import { V, mahony } from './math.js';
import { st } from './sensor.js';
import { classify } from './tricks.js';

const RAD = Math.PI / 180;
const POP_DEG = 25, FLAT_DEG = 12, LAND_DEG = 22, STILL_DPS = 70, LAND_HOLD = 0.18, BAIL_HOLD = 0.45;
const MAX_AIR = 3.0, POP_WINDOW = 0.5, POP_RATE = 100, LEVEL_SEC = 0.8, LEVEL_DPS = 35;

// Канонічні оберти трюків (фліп, розворот, impossible) — для анімації дошки й демо
export const CANON = {
  'Ollie': [0, 0, 0], 'Kickflip': [360, 0, 0], 'Heelflip': [-360, 0, 0],
  'BS pop shuvit': [0, 180, 0], 'FS pop shuvit': [0, -180, 0], 'BS 360 shuvit': [0, 360, 0], 'FS 360 shuvit': [0, -360, 0],
  'Varial kickflip': [360, 180, 0], 'Hardflip': [360, -180, 0], 'Inward heelflip': [-360, 180, 0], 'Varial heelflip': [-360, -180, 0],
  '360 flip': [360, 360, 0], 'FS 360 kickflip': [360, -360, 0], 'BS 360 heelflip': [-360, 360, 0], 'Laser flip': [-360, -360, 0],
  'Double kickflip': [720, 0, 0], 'Double heelflip': [-720, 0, 0], 'Triple kickflip': [1080, 0, 0], 'Triple heelflip': [-1080, 0, 0],
  'Impossible': [0, 0, 360],
};
export const POINTS = {
  'Ollie': 100, 'Kickflip': 300, 'Heelflip': 300, 'BS pop shuvit': 200, 'FS pop shuvit': 200,
  'BS 360 shuvit': 400, 'FS 360 shuvit': 400, 'Varial kickflip': 500, 'Varial heelflip': 500,
  'Hardflip': 550, 'Inward heelflip': 550, '360 flip': 800, 'FS 360 kickflip': 800, 'BS 360 heelflip': 800,
  'Laser flip': 900, 'Double kickflip': 600, 'Double heelflip': 600, 'Triple kickflip': 900, 'Triple heelflip': 900,
  'Impossible': 700, 'Other': 50,
};
// Трюки для S.K.A.T.E.: що далі в грі, то складніші
const SKATE_POOLS = [
  ['Ollie', 'Kickflip', 'Heelflip', 'BS pop shuvit', 'FS pop shuvit'],
  ['Varial kickflip', 'Varial heelflip', 'Hardflip', 'Inward heelflip', 'BS 360 shuvit', 'FS 360 shuvit'],
  ['360 flip', 'Laser flip', 'Impossible', 'Double kickflip'],
];
export const SKATE = 'SKATE';

export const g = {
  on: false, phase: 'off',      // off | level | ready | air | cool | over
  q: null, up: [0, 0, 1], u0: null, tilt: 0, spin: 0, e1: null, e2: null,
  hist: [], lastFlat: 0, popPeak: 0, levelBuf: [], stillFor: 0, coolFor: 0,
  air: null, msg: null,
  play: newPlay(),
};

function newPlay() {
  return {
    mode: (S.gameMode === 'skate' ? 'skate' : 'free'), score: 0, attempts: 0, landed: 0,
    streak: 0, comboNames: [], lastLand: 0, bestCombo: 0, list: [],
    target: null, letters: 0, hits: 0, over: false,
  };
}

const emit = () => bus.emit('game');
const angle = (a, b) => Math.acos(Math.max(-1, Math.min(1, V.dot(V.norm(a), V.norm(b))))) / RAD;
// світовий «верх» у координатах Triki для орієнтації q (Triki → світ)
const upOf = ([w, x, y, z]) => [2 * (x * z - w * y), 2 * (w * x + y * z), w * w - x * x - y * y + z * z];
function qFromUp(a) {
  const n = V.norm(a), d = n[2];
  if (d < -0.9999) return [0, 1, 0, 0];
  const c = V.cross(n, [0, 0, 1]), q = [1 + d, c[0], c[1], c[2]], l = Math.hypot(...q);
  return q.map(v => v / l);
}

export function startGame() {
  g.on = true;
  st.tap = onSample;
  restart();
  level();
}
export function stopGame() {
  g.on = false; g.phase = 'off'; g.air = null;
  if (st.tap === onSample) st.tap = null;
  emit();
}
export function level() {
  if (!g.on) return;
  g.phase = 'level'; g.levelBuf = []; g.air = null; g.msg = null;
  emit();
}
export function restart() {
  g.play = newPlay();
  if (g.play.mode === 'skate') nextTarget();
  if (g.phase === 'over') g.phase = g.u0 ? 'ready' : 'level';
  g.msg = null;
  emit();
}
export function setGameMode(m) {
  S.gameMode = m; saveSettings();
  restart();
}

function setNeutral(u) {
  g.u0 = V.norm(u);
  // осі бульбашки: після першого попу «праворуч» — це ніс, «вгору» — дальній край
  let ref = g.noseRef && Math.abs(V.dot(g.noseRef, g.u0)) < 0.9 ? g.noseRef : null;
  if (!ref) ref = Math.abs(g.u0[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  g.e1 = V.norm(V.sub(ref, V.mul(g.u0, V.dot(ref, g.u0))));
  g.e2 = V.cross(g.u0, g.e1);
}

// Положення «бульбашки» рівня: проєкція нахилу на площину, перпендикулярну до u0 (−1…1 ≈ ±45°)
export function bubble() {
  if (!g.u0) return null;
  const k = 1 / Math.sin(45 * RAD);
  return [V.dot(g.up, g.e1) * k, V.dot(g.up, g.e2) * k];
}
export const popRing = () => Math.sin(POP_DEG * RAD) / Math.sin(45 * RAD);

// Поточні оберти в польоті (для підказки на екрані)
export function liveAir() {
  if (!g.air) return null;
  return projected(g.air);
}
function projected(air) {
  let roll = V.dot(air.ang, air.x), yaw = V.dot(air.ang, air.z);
  const pitch = V.dot(air.ang, air.y);
  if (S.stance === 'goofy') { roll = -roll; yaw = -yaw; }
  return { roll, yaw, pitch };
}

// a — прискорення (g), w — кутова швидкість (°/с), обидва в осях Triki
export function onSample(a, w) {
  if (!g.on) return;
  const dt = 1 / Math.max(5, st.fs);
  // власний годинник за кількістю вимірів: Bluetooth приносить їх пачками, і настінний час тут бреше
  g.clock = (g.clock || 0) + dt;
  const now = g.clock * 1000;
  // гіроскоп упирається в ±2000 °/с — у такі моменти обертання насправді швидше
  w = w.map(v => (Math.abs(v) > 1990 ? v * 1.25 : v));
  g.spin = V.len(w);
  if (!g.q) g.q = qFromUp(V.len(a) > 0.3 ? a : [0, 0, 1]);
  // під час швидкого обертання акселерометр запізнюється — тоді вірим лише гіроскопу
  g.q = mahony(g.q, w.map(v => v * RAD), g.spin > 150 ? [0, 0, 0] : a, dt, 1.0);
  g.up = upOf(g.q);
  // коли Triki майже нерухомий, нахил точніше видно прямо з акселерометра
  const an = V.len(a), accOk = g.spin < STILL_DPS && an > 0.8 && an < 1.2;
  if (accOk && g.spin < 40) g.q = mahony(g.q, [0, 0, 0], a, dt, 6.0);
  g.hist.push({ t: now, w, dt });
  while (g.hist.length && g.hist[0].t < now - 1200) g.hist.shift();

  if (g.phase === 'level') {
    if (g.spin < LEVEL_DPS) g.levelBuf.push(g.up.slice()); else g.levelBuf = [];
    if (g.levelBuf.length >= Math.round(LEVEL_SEC * st.fs)) {
      const m = [0, 0, 0];
      for (const u of g.levelBuf) for (let i = 0; i < 3; i++) m[i] += u[i];
      setNeutral(m);
      g.phase = g.play.over ? 'over' : 'ready'; g.lastFlat = now; g.popPeak = 0;
      emit();
    }
    return;
  }
  if (!g.u0) return;
  g.tilt = angle(accOk ? a : g.up, g.u0);

  if (g.phase === 'cool') {
    // після трюку чекаємо, поки Triki знову рівно й спокійно
    if (g.tilt < FLAT_DEG + 6 && g.spin < STILL_DPS) g.coolFor += dt; else g.coolFor = 0;
    if (g.coolFor > 0.2) { g.phase = g.play.over ? 'over' : 'ready'; g.lastFlat = now; g.popPeak = 0; emit(); }
    return;
  }
  if (g.phase === 'ready' || g.phase === 'over') {
    if (g.tilt < FLAT_DEG) { g.lastFlat = now; g.popPeak = 0; }
    g.popPeak = Math.max(g.popPeak, g.spin);
    // повільно підлаштовуємо «рівно», якщо хват трохи змінився
    if (g.spin < 25 && g.tilt < 30) {
      g.stillFor += dt;
      if (g.stillFor > 1.5) setNeutral(V.sub(V.mul(g.u0, 0.97), V.mul(V.norm(g.up), -0.03)));
    } else g.stillFor = 0;
    if (g.phase === 'ready' && g.tilt > POP_DEG && (now - g.lastFlat) / 1000 < POP_WINDOW && g.popPeak > POP_RATE) startAir(now);
    return;
  }
  if (g.phase === 'air') {
    const air = g.air;
    for (let i = 0; i < 3; i++) air.ang[i] += w[i] * dt;
    air.dur += dt;
    if (g.tilt < LAND_DEG && g.spin < STILL_DPS) air.still += dt; else air.still = 0;
    if (g.tilt > 140 && g.spin < STILL_DPS) air.upside += dt; else air.upside = 0;
    if (air.still >= LAND_HOLD && air.dur > 0.25) finish(true, '');
    else if (air.upside >= BAIL_HOLD) finish(false, 'flipped');
    else if (air.dur > MAX_AIR) finish(false, 'timeout');
  }
}

function startAir(now) {
  const u0 = g.u0, up = g.up;
  // ніс — кінець, що піднявся: коли ніс іде вгору, світовий «верх» у координатах Triki хилиться до носа
  const nose = V.norm(V.sub(up, V.mul(u0, V.dot(up, u0))));
  const x = nose, z = u0, y = V.cross(z, x);
  const ang = [0, 0, 0];
  let dur = 0;
  for (const h of g.hist) if (h.t >= g.lastFlat) { for (let i = 0; i < 3; i++) ang[i] += h.w[i] * h.dt; dur += h.dt; }
  g.air = { x, y, z, ang, dur, still: 0, upside: 0, t0: g.lastFlat };
  g.noseRef = x; g.e1 = x; g.e2 = y;
  g.phase = 'air'; g.msg = null;
  emit();
}

function finish(ok, reason) {
  const air = g.air, p = g.play;
  g.air = null; g.phase = 'cool'; g.coolFor = 0;
  if (p.over) { emit(); return; }
  const ax = projected(air);
  // при падінні показуємо, що людина пробувала: неповний фліп чи розворот округлюємо вгору
  const up = (v, step, min) => (!ok && Math.abs(v) > min && Math.abs(v) < step ? Math.sign(v) * step : v);
  const c = classify(up(ax.roll, 360, 120), up(ax.yaw, 180, 90), up(ax.pitch, 360, 150));
  const name = c.name;
  const sloppy = c.flags.some(f => f.k === 'under' || f.k === 'over' || f.k === 'yaw');
  const rec = { id: Date.now() + '-' + Math.round(Math.random() * 1e4), time: Date.now(), name, ok, reason, sloppy,
                roll: Math.round(ax.roll), yaw: Math.round(ax.yaw), pitch: Math.round(ax.pitch), dur: +air.dur.toFixed(2), points: 0, mult: 1 };
  p.attempts++;
  if (ok) {
    p.landed++;
    const now = Date.now();
    if (now - p.lastLand < 6000 && p.streak > 0) p.streak++; else { p.streak = 1; p.comboNames = []; }
    p.lastLand = now;
    const repeat = p.comboNames.includes(name);
    p.comboNames.push(name);
    rec.mult = Math.min(4, 1 + 0.5 * (p.streak - 1));
    rec.repeat = repeat;
    rec.points = Math.round((POINTS[name] || 50) * rec.mult * (sloppy ? 0.7 : 1) * (repeat ? 0.5 : 1));
    p.bestCombo = Math.max(p.bestCombo, p.streak);
  } else {
    p.streak = 0; p.comboNames = [];
  }
  if (p.mode === 'skate') {
    rec.target = p.target;
    rec.hit = ok && name === p.target;
    if (rec.hit) { p.hits++; p.score += rec.points; nextTarget(); }
    else { rec.points = 0; p.letters++; rec.letter = SKATE[p.letters - 1]; if (p.letters >= 5) { p.over = true; } }
  } else {
    p.score += rec.points;
  }
  p.list.unshift(rec);
  p.list.length = Math.min(p.list.length, 60);
  if (p.score > (S.gameBest || 0)) { S.gameBest = p.score; saveSettings(); }
  if (p.bestCombo > (S.gameBestCombo || 0)) { S.gameBestCombo = p.bestCombo; saveSettings(); }
  g.msg = ok ? null : reason;
  if (p.over) g.phase = 'cool';
  bus.emit('game-trick', rec);
  emit();
}

function nextTarget() {
  const p = g.play, stage = p.hits < 3 ? 1 : p.hits < 8 ? 2 : 3;
  const pool = SKATE_POOLS.slice(0, stage).flat().filter(n => n !== p.target);
  p.target = pool[Math.floor(Math.random() * pool.length)];
}
