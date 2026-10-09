// Дані з Triki: розбір пакетів, перерахунок в осі дошки, орієнтація, калібрування.
import { S, log, bus } from './util.js';
import { V, buildMount, mahony } from './math.js';

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
  Object.assign(st, { buf: [], n: 0, arrivals: [], fs: 25, q: [1, 0, 0, 0], lastLandN: -1, pktSizes: {},
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
  if (!st.pktSizes[bytes.length]) log(`Розмір пакета ${bytes.length} Б`);
  st.pktSizes[bytes.length] = (st.pktSizes[bytes.length] || 0) + 1;
  const frames = splitFrames(bytes, dv);
  if (!frames.length) { st.unknown++; return; }
  for (const f of frames) ingest([f[3], f[4], f[5], f[0], f[1], f[2]], now, false);   // → acc, gyro
}

// raw: [ax, ay, az, gx, gy, gz] у сирих одиницях. boardFrame=true — дані вже в осях дошки (демо).
export function ingest(raw, now, boardFrame) {
  st.n++;
  if (st.rec) st.rec.rows.push([((now - st.rec.t0) / 1000).toFixed(4), ...raw]);
  if (st.calib) st.calib.push(raw.slice());
  if (st.collect) st.collect.push(raw.slice());
  st.arrivals.push(now);
  while (st.arrivals.length && st.arrivals[0] < now - 2000) st.arrivals.shift();
  if (now - st.connectedAt > 1500 && st.arrivals.length > 5) st.fs = 0.7 * st.fs + 0.3 * hz();

  let a = raw.slice(0, 3).map(v => v / S.accScale);
  let g = raw.slice(3, 6).map((v, i) => (v - st.bias[i]) / S.gyroScale);
  if (!boardFrame) { a = toBoard(a); g = toBoard(g); }
  const amag = V.len(a);
  st.buf.push({ n: st.n, raw, a, g, amag });
  const maxLen = Math.min(4000, Math.ceil(st.fs * 7) + 60);
  if (st.buf.length > maxLen) st.buf.splice(0, st.buf.length - maxLen);

  if (amag < 0.45) { if (!st.airSince) { st.airSince = now; bus.emit('takeoff'); } }
  else st.airSince = null;

  st.q = mahony(st.q, g.map(v => v * Math.PI / 180), a, 1 / Math.max(1, st.fs));
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
  if (!auto) log('Калібрування: не рухай Triki 2 с…');
  setTimeout(() => finishCalib(auto), 2000);
}
function finishCalib(auto) {
  const c = st.calib; st.calib = null;
  if (!c || c.length < 5) { if (!auto) log('Калібрування: замало даних'); return; }
  const s = stillStats(c);
  if (s.gyroSd > 3 || s.magSd > 0.05 * s.magMean) { if (!auto) log('Калібрування: Triki рухався. Поклади його нерухомо.'); return; }
  st.bias = s.bias;
  if (st.source === 'demo') return;
  st.calibInfo = { lsb: Math.round(s.magMean) };
  if (!S.mount) st.autoMount = buildMount(s.acc, null);    // хоча б «де верх», доки немає налаштування
  st.q = [1, 0, 0, 0];
  log(`Калібрування: 1 g = ${Math.round(s.magMean)}, дрейф ${s.bias.map(v => (v / S.gyroScale).toFixed(1)).join(' / ')} °/с`);
  bus.emit('calib');
}

// Зібрати ms мілісекунд нерухомих даних (для майстра положення)
export function collectStill(ms) {
  return new Promise(resolve => {
    st.collect = [];
    setTimeout(() => { const c = st.collect; st.collect = null; resolve(c && c.length >= 5 ? stillStats(c) : null); }, ms);
  });
}
