// Фейкові дані дошки, щоб перевірити застосунок без Triki. Один трюк із восьми — невдалий.
import { bus, log } from './util.js';
import { st, ingest, resetLive, startCalib } from './sensor.js';

const DEMO = [
  { roll: 0, yaw: 0, air: .42 }, { roll: 360, yaw: 0, air: .46 }, { roll: 0, yaw: 180, air: .40 },
  { roll: 360, yaw: 0, air: .44, fail: true }, { roll: -360, yaw: 0, air: .45 }, { roll: 360, yaw: 180, air: .48 },
  { roll: 360, yaw: 360, air: .52 }, { roll: 0, yaw: -180, air: .38 },
];
const HZ = 25, PERIOD = 3.5;
let timer = null;

function gauss() { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
const bump = (s, t0, d, tot) => (s >= t0 && s <= t0 + d) ? tot * Math.PI / (2 * d) * Math.sin(Math.PI * (s - t0) / d) : 0;
const spike = (x, w, A) => A * Math.exp(-0.5 * (x / w) * (x / w));

function sample(t) {
  let a = [0, 0, 1], g = [0, 0, 0], air = false;
  if (t >= 3) {
    const k = Math.floor((t - 3) / PERIOD), tp = 3 + k * PERIOD + 0.8, tr = DEMO[k % DEMO.length];
    const T = tr.air, L = tp + T, s = t - tp;
    air = s > 0.015 && t < L - 0.005;
    if (air) a = [0, 0, 0];
    if (tr.fail && t > L + 0.05 && s < 2.2) a = [0, 0, -1];      // дошка лягла гриптейпом донизу
    a[2] += spike(s, .015, 4 + (k % 3) * 0.6) + spike(t - L, .015, 4.5 + (k % 2));
    g[1] += bump(s, -.02, .12, -28) + bump(s, .12, .15, 28);
    if (tr.roll) g[0] += bump(s, .06, .62 * T, tr.roll);
    if (tr.yaw) g[2] += bump(s, .07, .62 * T, tr.yaw);
  }
  const rolling = t > 2.5 && !air;
  for (let i = 0; i < 3; i++) { a[i] += gauss() * 0.01 + (rolling ? gauss() * 0.05 : 0); g[i] += gauss() * 0.6 + (rolling ? gauss() * 2 : 0); }
  g[0] += 3; g[1] -= 2; g[2] += 1.5;
  const c = v => Math.max(-32768, Math.min(32767, Math.round(v)));
  return [...a.map(v => c(v * 2048)), ...g.map(v => c(v * 16.4))];
}

export function startDemo() {
  bus.emit('stop-sources');
  st.source = 'demo';
  resetLive();
  const t0 = performance.now(); let k = 0;
  timer = setInterval(() => {
    const now = performance.now(), target = (now - t0) / 1000 * HZ;
    while (k < target) { ingest(sample(k / HZ), now, true); k++; }
  }, 20);
  bus.emit('conn', 'on', 'Демо');
  log('Демо: трюк кожні 3.5 с, один із восьми — невдалий');
  startCalib(true);
  bus.emit('source-started');
}

export function stopDemo() {
  if (!timer) return;
  clearInterval(timer); timer = null;
  if (st.source === 'demo') { st.source = null; bus.emit('conn', 'off', 'Не підключено'); }
}
