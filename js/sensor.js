// Дані з Triki: розбір пакетів, перерахунок в осі дошки, орієнтація, калібрування.
import { S, log, bus } from './util.js';
import { V, buildMount, mahony } from './math.js';
import { t } from './i18n.js';

export const SAT = 32766;   // значення, з якого сенсор «упирається в стелю»

export const st = {
  source: null,             // 'ble' | 'demo' | null
  bias: [0, 0, 0],          // дрейф гіроскопа (сирі одиниці, осі Triki)
  buf: [], n: 0, arrivals: [], fs: 25,
  q: [1, 0, 0, 0],          // орієнтація дошки
  lastLandN: -1,
  calib: null, calibInfo: null, autoMount: null,
  pktSizes: {}, unknown: 0,
  rec: null,                // запис сирих даних
  tap: null,                // обробник кожного виміру для гри
  collect: null,            // збір для майстра положення
  connectedAt: 0,
  airSince: null,           // з якого моменту дошка у вільному падінні
};

export const mount = () => S.mount || st.autoMount;
export function toBoard(v) {
  const M = mount();
  return M ? [V.dot(M[0], v), V.dot(M[1], v), V.dot(M[2], v)] : v;
}
export const hz = () => st.arrivals.length / 2;

export function resetLive() {
  Object.assign(st, { buf: [], n: 0, arrivals: [], fs: 25, fixedFs: null, q: [1, 0, 0, 0], lastLandN: -1, pktSizes: {},
                      lastImpact: -1e9, lastSpinT: -1e9, lowRun: 0, lastTakeoff: -1e9, lastT: null, shifted: 0,
                      unknown: 0, connectedAt: performance.now(), airSince: null });
}

// Пакет Triki: 22 00 + гіроскоп xyz + акселерометр xyz (int16, little-endian).
export function splitFrames(bytes, dv) {
  const n = bytes.length, out = [];
  if (n < 14 || bytes[0] !== 0x22 || bytes[1] !== 0x00) return out;
  const rd = off => { const r = []; for (let k = 0; k < 6; k++) r.push(dv.getInt16(off + 2 * k, true)); return r; };
  let all14 = n % 14 === 0;
  for (let i = 0; all14 && i < n; i += 14) if (bytes[i] !== 0x22 || bytes[i + 1] !== 0x00) all14 = false;
  if (all14) { for (let off = 0; off < n; off += 14) out.push(rd(off + 2)); return out; }
  if ((n - 2) % 12 === 0 && n > 14) {
    let clean = true;
    for (let k = 1; k < (n - 2) / 12; k++) if (bytes[2 + 12 * k] === 0x22 && bytes[3 + 12 * k] === 0x00) clean = false;
    if (clean) { for (let k = 0; k < (n - 2) / 12; k++) out.push(rd(2 + 12 * k)); return out; }
  }
  out.push(rd(2));
  return out;
}

export function onNotify(e) {
  const dv = e.target.value, now = performance.now();
  const bytes = new Uint8Array(dv.buffer, dv.byteOffset, dv.byteLength);
  if (!st.pktSizes[bytes.length]) log(t('log.packet', { n: bytes.length }));
  st.pktSizes[bytes.length] = (st.pktSizes[bytes.length] || 0) + 1;
  const frames = splitFrames(bytes, dv);
  if (!frames.length) { st.unknown++; return; }
  for (const f of frames) ingest([f[3], f[4], f[5], f[0], f[1], f[2]], now, false);   // → acc, gyro
}

// Іноді Bluetooth приносить «зсунутий» пакет: ті самі шість чисел, але по колу на кілька місць
// (гравітація опиняється серед гіроскопа, а «прискорення» майже нуль). Такий вимір виглядає як мить
// невагомості з різким обертанням — тобто як фальшивий поп. Відкидаємо його.
export function isShifted(raw) {
  const g1 = S.accScale, a = Math.hypot(raw[0], raw[1], raw[2]);
  if (a > 0.5 * g1) return false;
  for (let k = 1; k < 6; k++) {
    const r = [0, 1, 2, 3, 4, 5].map(i => raw[(i + k) % 6]);
    const a2 = Math.hypot(r[0], r[1], r[2]), w2 = Math.hypot(r[3] - st.bias[0], r[4] - st.bias[1], r[5] - st.bias[2]) / S.gyroScale;
    if (a2 > 0.8 * g1 && a2 < 1.25 * g1 && w2 < 120) return true;
  }
  return false;
}

// raw: [ax, ay, az, gx, gy, gz] у сирих одиницях. boardFrame=true — дані вже в осях дошки (демо).
export function ingest(raw, now, boardFrame) {
  if (st.rec) st.rec.rows.push([((now - st.rec.t0) / 1000).toFixed(4), ...raw]);
  if (!boardFrame && isShifted(raw)) { st.shifted = (st.shifted || 0) + 1; return; }
  st.n++;
  if (st.calib) st.calib.push(raw.slice());
  if (st.collect) st.collect.push(raw.slice());
  st.arrivals.push(now);
  while (st.arrivals.length && st.arrivals[0] < now - 2000) st.arrivals.shift();
  if (st.fixedFs) st.fs = st.fixedFs;              // демо: частота відома точно
  else if (now - st.connectedAt > 1500 && st.arrivals.length > 5) st.fs = 0.7 * st.fs + 0.3 * hz();
  // крок часу: телефон приносить виміри нерівно (пачками по два за мілісекунду, потім пауза),
  // тож беремо справжній час між ними, а не середню частоту
  const prevT = st.lastT; st.lastT = now;
  const dt = st.fixedFs || prevT == null ? 1 / Math.max(1, st.fs) : Math.min(Math.max((now - prevT) / 1000, 0), 0.12);

  let a = raw.slice(0, 3).map(v => v / S.accScale);
  let g = raw.slice(3, 6).map((v, i) => (v - st.bias[i]) / S.gyroScale);
  if (st.tap) st.tap(a, g, now, dt);                 // режим гри: сирі осі Triki
  if (!boardFrame) { a = toBoard(a); g = toBoard(g); }
  const amag = V.len(a);
  st.buf.push({ n: st.n, raw, a, g, amag, t: now });
  const maxLen = Math.min(4000, Math.ceil(st.fs * 7) + 60);
  if (st.buf.length > maxLen) st.buf.splice(0, st.buf.length - maxLen);

  // Відрив від землі: лише одразу після удару хвостом (поп), коли дошка вже крутиться і колеса
  // не тримаються за землю (сила вздовж «верху» дошки майже нуль або ноги тиснуть зверху).
  // Вібрації від асфальту й бордюри дають удари, але без такого обертання.
  const gmag = V.len(g);
  if (amag >= 2.6) st.lastImpact = now;
  if (gmag > 200 && amag < 3.5) st.lastSpinT = now;
  st.lowRun = a[2] < 0.35 || amag < 0.5 ? (st.lowRun || 0) + 1 : 0;
  if (!st.airSince && now - (st.lastTakeoff || -1e9) > 800 && now - (st.lastImpact || -1e9) < 350 && now - (st.lastSpinT || -1e9) < 250 && st.lowRun >= 2) {
    st.airSince = now; st.lastTakeoff = now; bus.emit('takeoff');
  } else if (st.airSince && ((amag >= 2 && a[2] > 0.5) || now - st.airSince > 1200)) st.airSince = null;

  // коли дошка спокійно стоїть чи котиться, швидко «довіряємо» гравітації — інакше після трюку
  // 3D-дошка ще секунду повільно вирівнюється, хоча насправді вже стоїть на чотирьох колесах
  const kp = gmag < 60 && Math.abs(amag - 1) < 0.12 ? 8 : 2;
  st.q = mahony(st.q, g.map(v => v * Math.PI / 180), amag < 3.5 ? a : [0, 0, 0], dt, kp);
}

// ---------- калібрування ----------
export function stillStats(c) {
  const m = i => c.reduce((s, r) => s + r[i], 0) / c.length;
  const sd = i => { const mm = m(i); return Math.sqrt(c.reduce((s, r) => s + (r[i] - mm) ** 2, 0) / c.length); };
  const mags = c.map(r => Math.hypot(r[0], r[1], r[2])), mm = mags.reduce((s, v) => s + v, 0) / mags.length;
  return {
    gyroSd: Math.max(sd(3), sd(4), sd(5)) / S.gyroScale,
    magMean: mm,
    magSd: Math.sqrt(mags.reduce((s, v) => s + (v - mm) ** 2, 0) / mags.length),
    acc: [m(0), m(1), m(2)].map(v => v / S.accScale),
    bias: [m(3), m(4), m(5)],
  };
}

export function startCalib(auto) {
  st.calib = [];
  if (!auto) log(t('log.calibStart'));
  setTimeout(() => finishCalib(auto), 2000);
}
function finishCalib(auto) {
  const c = st.calib; st.calib = null;
  if (!c || c.length < 5) { if (!auto) log(t('log.calibFew')); return; }
  const s = stillStats(c);
  if (s.gyroSd > 3 || s.magSd > 0.05 * s.magMean) { if (!auto) log(t('log.calibMoved')); return; }
  st.bias = s.bias;
  if (st.source === 'demo') return;
  st.calibInfo = { lsb: Math.round(s.magMean) };
  if (!S.mount) st.autoMount = buildMount(s.acc, null);    // хоча б «де верх», доки немає налаштування
  st.q = [1, 0, 0, 0];
  log(t('log.calibDone', { lsb: Math.round(s.magMean), drift: s.bias.map(v => (v / S.gyroScale).toFixed(1)).join(' / ') }));
  bus.emit('calib');
}

// Зібрати ms мілісекунд нерухомих даних (для майстра положення)
export function collectStill(ms) {
  return new Promise(resolve => {
    st.collect = [];
    setTimeout(() => { const c = st.collect; st.collect = null; resolve(c && c.length >= 5 ? stillStats(c) : null); }, ms);
  });
}
