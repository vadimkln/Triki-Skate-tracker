// Пошук трюків у потоці: поп → політ → приземлення, підрахунок обертів, назва, чи вдалося приземлитись.
import { S, bus } from './util.js';
import { V, integrateQ } from './math.js';
import { st, SAT, toBoard } from './sensor.js';

const IMPACT_G = 2.0, MIN_AIR = 0.15, MAX_AIR = 1.2, FREEFALL_G = 0.6, MIN_ROT = 150, LANDED_MAX_DPS = 300;

export const TRICK_NAMES = ['Ollie', 'Kickflip', 'Heelflip', 'BS pop shuvit', 'FS pop shuvit', 'BS 360 shuvit',
  'FS 360 shuvit', 'Varial kickflip', 'Varial heelflip', 'Hardflip', 'Inward heelflip', '360 flip', 'Laser flip',
  'Double kickflip', 'Double heelflip', 'Impossible', 'Інше'];

// Ділянки, де гіроскоп упирався в межу, домальовуємо параболою по сусідніх точках
function repairRuns(col) {
  const out = col.slice(), n = col.length;
  for (let i = 0; i < n;) {
    if (Math.abs(col[i]) < SAT) { i++; continue; }
    const s = i; while (i < n && Math.abs(col[i]) >= SAT) i++;
    const e = i - 1, pts = [];
    for (let k = s - 3; k < s; k++) if (k >= 0 && Math.abs(col[k]) < SAT) pts.push(k);
    for (let k = e + 1; k <= e + 3; k++) if (k < n && Math.abs(col[k]) < SAT) pts.push(k);
    if (pts.length < 3) continue;
    let S0 = 0, S1 = 0, S2 = 0, S3 = 0, S4 = 0, T0 = 0, T1 = 0, T2 = 0;
    for (const k of pts) { const y = col[k]; S0++; S1 += k; S2 += k * k; S3 += k ** 3; S4 += k ** 4; T0 += y; T1 += k * y; T2 += k * k * y; }
    const M = [[S4, S3, S2, T2], [S3, S2, S1, T1], [S2, S1, S0, T0]];
    for (let c = 0; c < 3; c++) {
      let p = c; for (let r = c + 1; r < 3; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
      [M[c], M[p]] = [M[p], M[c]];
      for (let r = 0; r < 3; r++) if (r !== c) { const f = M[r][c] / M[c][c]; for (let k = c; k < 4; k++) M[r][k] -= f * M[c][k]; }
    }
    const A = M[0][3] / M[0][0], B = M[1][3] / M[1][1], C = M[2][3] / M[2][2], sg = Math.sign(col[s]);
    for (let k = s; k <= e; k++) out[k] = sg * Math.min(Math.max(Math.abs(A * k * k + B * k + C), SAT), 2.5 * SAT);
  }
  return out;
}

export function classify(roll, yaw, pitch) {
  if (S.stance === 'goofy') { roll = -roll; yaw = -yaw; }
  const nf = Math.round(roll / 360), ns = Math.round(yaw / 180), rf = roll - nf * 360, rs = yaw - ns * 180, flags = [];
  if (Math.abs(rf) > 50) flags.push(nf === 0 ? `частковий оберт ${Math.abs(roll).toFixed(0)}°`
    : Math.abs(roll) < Math.abs(nf * 360) ? `недокручено на ${Math.abs(rf).toFixed(0)}°` : `перекручено на ${Math.abs(rf).toFixed(0)}°`);
  if (Math.abs(rs) > 40) flags.push('неточний розворот');
  if (Math.abs(pitch) > 270) return { name: 'Impossible', flags, conf: 0.6 };
  const af = Math.abs(nf), as = Math.abs(ns), kick = nf > 0, bs = ns > 0;
  let name;
  if (!af && !as) name = 'Ollie';
  else if (!as && af <= 3) name = ['', '', 'Double ', 'Triple '][af] + (kick ? 'kickflip' : 'heelflip');
  else if (!af && as === 1) name = (bs ? 'BS' : 'FS') + ' pop shuvit';
  else if (!af && as === 2) name = (bs ? 'BS' : 'FS') + ' 360 shuvit';
  else if (af === 1 && as === 1) name = kick ? (bs ? 'Varial kickflip' : 'Hardflip') : (bs ? 'Inward heelflip' : 'Varial heelflip');
  else if (af === 1 && as === 2) name = kick ? (bs ? '360 flip' : 'FS 360 kickflip') : (bs ? 'BS 360 heelflip' : 'Laser flip');
  else name = 'Інше';
  return { name: name[0].toUpperCase() + name.slice(1), flags, conf: 1 - Math.min(1, (Math.abs(rf) / 180 + Math.abs(rs) / 90) / 2) };
}

// Запускається кожні 150 мс. Знайдений трюк — подія 'trick' (дані, кадри повтору, частота).
export function detect() {
  const B = st.buf;
  if (B.length < 20) return;
  const fs = st.fs, N = B.length, amag = B.map(s => s.amag), demo = st.source === 'demo';
  const cols = [0, 1, 2].map(i => repairRuns(B.map(s => s.raw[3 + i])));
  const gyro = B.map((_, j) => {
    const g = [0, 1, 2].map(i => (cols[i][j] - st.bias[i]) / S.gyroScale);
    return demo ? g : toBoard(g);
  });

  const dist = Math.max(1, Math.round(0.12 * fs)), peaks = [];
  for (let i = 1; i < N - 1; i++) {
    if (amag[i] >= IMPACT_G && amag[i] >= amag[i - 1] && amag[i] > amag[i + 1]) {
      if (peaks.length && i - peaks[peaks.length - 1] < dist) { if (amag[i] > amag[peaks[peaks.length - 1]]) peaks[peaks.length - 1] = i; }
      else peaks.push(i);
    }
  }
  const r = x => Math.max(1, Math.round(x * fs));
  for (let pi = 0; pi < peaks.length; pi++) {
    const p = peaks[pi];
    if (B[p].n <= st.lastLandN) continue;
    for (let qi = pi + 1; qi < peaks.length; qi++) {
      const q = peaks[qi], air = (q - p) / fs;
      if (air < MIN_AIR) continue;
      if (air > MAX_AIR) break;
      if (q + r(0.9) >= N) return;                       // чекаємо, чим закінчиться приземлення
      const a0 = p + r(0.04), b0 = q - r(0.04);
      if (b0 <= a0) continue;
      let ff = 0; for (let k = a0; k < b0; k++) if (amag[k] < FREEFALL_G) ff++;
      ff /= (b0 - a0);
      const ang = [0, 0, 0]; let peakSpin = 0;
      for (let k = p; k < q; k++) { for (let i = 0; i < 3; i++) ang[i] += gyro[k][i] / fs; peakSpin = Math.max(peakSpin, V.len(gyro[k])); }
      const after = amag.slice(q + r(0.03), q + r(0.15)).sort((x, y) => x - y), med = after.length ? after[after.length >> 1] : 0;
      let spin = 0; for (let k = q + r(0.04); k < Math.min(N, q + r(0.2)); k++) spin = Math.max(spin, V.len(gyro[k]));
      if (!((ff > 0.35 || Math.max(...ang.map(Math.abs)) > MIN_ROT) && med > 0.6 && med < 1.6 && spin < LANDED_MAX_DPS)) continue;

      // вдалося? — після приземлення дошка колесами вниз і спокійна
      let az = 0, cnt = 0, wob = 0;
      for (let k = q + r(0.15); k < Math.min(N, q + r(0.9)); k++) { az += B[k].a[2]; cnt++; wob = Math.max(wob, V.len(gyro[k])); }
      az /= Math.max(1, cnt);
      const landed = az > 0.6 && wob < 400;
      const reason = landed ? '' : az < -0.5 ? 'дошка перевернулась' : az < 0.6 ? 'дошка впала на бік' : 'нестабільне приземлення';
      let clipped = 0; for (let k = p; k <= q; k++) if (B[k].raw.slice(3).some(v => Math.abs(v) >= SAT)) clipped++;

      const c = classify(ang[0], ang[2], ang[1]);
      if (clipped) c.flags.push('частину обертання домальовано: сенсор упирався в межу');
      const s0 = Math.max(0, p - r(1.0)), s1 = Math.min(N, q + r(0.9));
      const trick = {
        ...c, air, height: 9.81 * air * air / 8 * 100, roll: ang[0], pitch: ang[1], yaw: ang[2],
        landG: amag[q], peakSpin, landed, reason,
        snip: { fs: +fs.toFixed(1), pop: p - s0, land: q - s0, rows: B.slice(s0, s1).map(s => s.raw) },
      };
      st.lastLandN = B[q].n;
      bus.emit('trick', trick, integrateQ(gyro.slice(p, q), fs), fs);
      break;
    }
  }
}
