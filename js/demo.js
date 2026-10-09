// Демо без Triki: чисті, однакові щоразу дані без випадкового шуму.
//  • трекер — дошка робить різні трюки по черзі;
//  • гра — «рука» тримає Triki й робить жести-трюки (поп, фліп, розворот).
// Дані трекера вже в осях дошки: x — ніс, y — ліво, z — вгору; додатний фліп — kickflip, додатний розворот — BS.
import { bus, log } from './util.js';
import { V, mahony } from './math.js';
import { st, ingest, resetLive, startCalib } from './sensor.js';
import { setDemoSession } from './session.js';
import { g as game, CANON } from './game.js';
import { t } from './i18n.js';

export const DEMO = [
  { name: 'Ollie', roll: 0, yaw: 0, air: .42 },
  { name: 'Kickflip', roll: 360, yaw: 0, air: .46 },
  { name: 'Heelflip', roll: -360, yaw: 0, air: .45 },
  { name: 'BS pop shuvit', roll: 0, yaw: 180, air: .40 },
  { name: 'FS pop shuvit', roll: 0, yaw: -180, air: .41 },
  { name: 'Varial kickflip', roll: 360, yaw: 180, air: .48 },
  { name: 'Hardflip', roll: 360, yaw: -180, air: .48 },
  { name: 'Kickflip', roll: 360, yaw: 0, air: .44, fail: true },     // невдала спроба: дошка падає грипом донизу
  { name: 'Inward heelflip', roll: -360, yaw: 180, air: .47 },
  { name: 'Varial heelflip', roll: -360, yaw: -180, air: .47 },
  { name: 'BS 360 shuvit', roll: 0, yaw: 360, air: .50 },
  { name: '360 flip', roll: 360, yaw: 360, air: .52 },
  { name: 'Laser flip', roll: -360, yaw: -360, air: .53 },
];
const HZ = 25, PERIOD = 3.5, START = 3;
let timer = null, kind = null;

// плавний «горбик» кутової швидкості, площа під яким дорівнює tot градусів
const bump = (s, t0, d, tot) => (s >= t0 && s <= t0 + d) ? tot * Math.PI / (2 * d) * Math.sin(Math.PI * (s - t0) / d) : 0;
// той самий поворот, накопичений до моменту s (0…tot)
const turned = (s, t0, d, tot) => (s <= t0 ? 0 : s >= t0 + d ? tot : tot * (1 - Math.cos(Math.PI * (s - t0) / d)) / 2);
const spike = (x, w, A) => A * Math.exp(-0.5 * (x / w) * (x / w));
const toRaw = (a, g) => [...a.map(v => v * 2048), ...g.map(v => v * 16.4)].map(v => Math.round(v));
const clamp16 = r => r.map(v => Math.max(-32768, Math.min(32767, v)));

// Сигнал дошки для одного трюку; s — секунди від попу
function trickSignal(tr, s) {
  const T = tr.air, u = s - T;
  let a = [0, 0, 1];
  const g = [0, 0, 0];
  if (s > 0.015 && u < -0.005) a = [0, 0, 0];                       // у повітрі — невагомість
  a[2] += spike(s, .015, 4.2) + spike(u, .015, 4.8);                 // удар хвостом (поп) і приземлення
  g[1] += bump(s, -.02, .12, -32) + bump(s, .12, .16, 32);           // ніс угору на попі, потім вирівнюється
  if (tr.roll) g[0] += bump(s, .06, .7 * T, tr.roll);
  if (tr.yaw) g[2] += bump(s, .07, .7 * T, tr.yaw);
  if (tr.pitch) g[1] += bump(s, .06, .7 * T, tr.pitch);
  if (tr.fail) {
    // після приземлення дошку перекидає грипом донизу, а за секунду райдер ставить її назад
    g[0] += bump(u, .22, .2, 180) + bump(u, 1.6, .4, 180);
    const phi = (turned(u, .22, .2, 180) + turned(u, 1.6, .4, 180)) * Math.PI / 180;
    if (u > .22 && u < 2.0) a = [0, Math.sin(phi), Math.cos(phi)];
  }
  return { a, g };
}

export function sample(time) {
  if (time < START) return clamp16(toRaw([0, 0, 1], [0, 0, 0]));
  const k = Math.floor((time - START) / PERIOD), tp = START + k * PERIOD + 0.8;
  const { a, g } = trickSignal(DEMO[k % DEMO.length], time - tp);
  return clamp16(toRaw(a, g));
}

// Готовий фрагмент для анімації трюку на дошці (гра): 50 Гц, без обрізання сенсором
export function synthSnip(name, fail) {
  const c = CANON[name] || [0, 0, 0], fs = 50;
  const air = Math.min(0.62, 0.42 + 0.03 * (Math.abs(c[0]) / 360 + Math.abs(c[1]) / 180 + Math.abs(c[2]) / 360));
  const tr = { roll: c[0], yaw: c[1], pitch: c[2], air, fail };
  const s0 = -0.35, s1 = air + (fail ? 2.15 : 0.6), rows = [];
  for (let k = 0; s0 + k / fs <= s1; k++) { const { a, g } = trickSignal(tr, s0 + k / fs); rows.push(toRaw(a, g)); }
  return { fs, pop: Math.round(-s0 * fs), land: Math.round((air - s0) * fs), rows, bias: [0, 0, 0], M: null, bf: true, synth: true };
}

// ---------- демо гри: жести рукою ----------
const FREE_SEQ = ['Ollie', 'Kickflip', 'Heelflip', 'BS pop shuvit', 'FS pop shuvit', 'Varial kickflip', 'BAIL',
  'Hardflip', '360 flip', 'Inward heelflip', 'BS 360 shuvit', 'Laser flip', 'Impossible'];
const G_PERIOD = 3.4, G_START = 2.2;
let hand = null;

function pickGesture(i) {
  const p = game.play;
  if (p.mode === 'skate' && p.target && !p.over) {
    if (i % 4 === 3) return { name: p.target === 'Kickflip' ? 'Heelflip' : 'Kickflip' };   // іноді промах
    return { name: p.target };
  }
  const n = FREE_SEQ[i % FREE_SEQ.length];
  return n === 'BAIL' ? { name: 'Kickflip', bail: true } : { name: n };
}

export function initHand() { hand = { q: [1, 0, 0, 0], i: -1, ges: null }; }

export function handSample(time) {
  const dt = 1 / HZ, w = [0, 0, 0];
  if (time >= G_START) {
    const i = Math.floor((time - G_START) / G_PERIOD), s = time - G_START - i * G_PERIOD;
    if (hand.i !== i) { hand.i = i; hand.ges = pickGesture(i); }
    const ges = hand.ges, c = CANON[ges.name] || [0, 0, 0];
    w[1] += bump(s, .5, .14, -32) + bump(s, .66, .16, 32);           // поп: великий палець тисне на хвіст, ніс угору, і назад
    if (ges.bail) {
      w[0] += bump(s, .86, .3, 180);                                   // недокрутив і зупинився догори дном
      w[0] += bump(s, 2.3, .5, 180);                                   // перевертає назад
    } else {
      // спершу фліп, потім розворот (так рука робить varial і 360 flip); подвійні фліпи — довше
      const fd = Math.abs(c[0]) > 400 ? .62 : .34, yd = Math.abs(c[1]) > 200 ? .42 : .32;
      const y0 = c[0] ? .86 + fd - .04 : .86;
      w[0] += bump(s, .86, fd, c[0]); w[2] += bump(s, y0, yd, c[1]); w[1] += bump(s, .86, .4, c[2]);
    }
    if (s < dt) hand.q = [1, 0, 0, 0];                                 // кожен жест починається рівно
  }
  hand.q = mahony(hand.q, w.map(v => v * Math.PI / 180), [0, 0, 0], dt);
  const [qw, qx, qy, qz] = hand.q;
  const up = [2 * (qx * qz - qw * qy), 2 * (qw * qx + qy * qz), qw * qw - qx * qx - qy * qy + qz * qz];
  return clamp16(toRaw(V.norm(up), w));
}

export function startDemo(which = 'tracker') {
  bus.emit('stop-sources');
  kind = which;
  st.source = 'demo';
  resetLive();
  st.fixedFs = HZ;
  if (kind === 'tracker') setDemoSession(true);
  initHand();
  const gen = kind === 'game' ? handSample : sample;
  const t0 = performance.now(); let k = 0;
  timer = setInterval(() => {
    const now = performance.now(), target = (now - t0) / 1000 * HZ;
    while (k < target) { ingest(gen(k / HZ), now, true); k++; }
  }, 20);
  bus.emit('conn', 'on', 'demo');
  log(t(kind === 'game' ? 'log.gameDemo' : 'log.demo'));
  if (kind === 'tracker') startCalib(true);
  bus.emit('source-started');
}

export function stopDemo() {
  if (!timer) return;
  clearInterval(timer); timer = null;
  setDemoSession(false);
  kind = null;
  if (st.source === 'demo') { st.source = null; resetLive(); bus.emit('conn', 'off', 'idle'); }
  bus.emit('demo-stopped');
}

export const demoRunning = () => !!timer;
export const demoKind = () => kind;
