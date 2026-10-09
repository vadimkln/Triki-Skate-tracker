// Повтор трюку: із сирого фрагмента сенсора будуємо доріжку кадрів — орієнтація, висота, накопичені оберти.
import { S } from './util.js';
import { V, mahony } from './math.js';
import { st, mount } from './sensor.js';
import { repairRuns, axesOf } from './tricks.js';

const G = 9.81;

function qMul(a, b) {
  const [aw, ax, ay, az] = a, [bw, bx, by, bz] = b;
  return [aw * bw - ax * bx - ay * by - az * bz, aw * bx + ax * bw + ay * bz - az * by,
          aw * by - ax * bz + ay * bw + az * bx, aw * bz + ax * by - ay * bx + az * bw];
}
// Найкоротший поворот, що ставить «верх» дошки (вектор a в осях дошки) вертикально
function qFromUp(a) {
  const n = V.norm(a), d = n[2];
  if (d < -0.9999) return [0, 1, 0, 0];
  const c = V.cross(n, [0, 0, 1]), q = [1 + d, c[0], c[1], c[2]], l = Math.hypot(...q);
  return q.map(v => v / l);
}
export function slerp(a, b, t) {
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  if (d < 0) { b = b.map(v => -v); d = -d; }
  if (d > 0.9995) { const r = a.map((v, i) => v + (b[i] - v) * t), l = Math.hypot(...r); return r.map(v => v / l); }
  const th = Math.acos(d), s = Math.sin(th), wa = Math.sin((1 - t) * th) / s, wb = Math.sin(t * th) / s;
  return a.map((v, i) => v * wa + b[i] * wb);
}

export const hasReplay = tr => !!(tr && tr.snip && tr.snip.rows && tr.snip.rows.length > 4);

export function buildTrack(snip) {
  const fs = snip.fs || 25, rows = snip.rows, n = rows.length, pop = snip.pop, land = snip.land;
  const bf = !!snip.bf, M = bf ? null : (snip.M !== undefined ? snip.M : mount());
  const bias = snip.bias || st.bias;
  const toB = v => (M ? [V.dot(M[0], v), V.dot(M[1], v), V.dot(M[2], v)] : v);
  // синтетичні фрагменти (анімація гри) не обрізані сенсором, їх не «лагодимо»
  const cols = [0, 1, 2].map(i => (snip.synth ? rows.map(r => r[3 + i]) : repairRuns(rows.map(r => r[3 + i]))));
  const gS = rows.map((_, k) => [0, 1, 2].map(i => (cols[i][k] - bias[i]) / S.gyroScale));
  const aB = rows.map(r => toB([r[0] / S.accScale, r[1] / S.accScale, r[2] / S.accScale]));
  const gB = gS.map(toB);

  // початкове положення — за гравітацією перших ~0,15 с
  const m0 = Math.max(1, Math.min(n, Math.round(0.15 * fs)));
  let a0 = [0, 0, 0];
  for (let k = 0; k < m0; k++) a0 = [a0[0] + aB[k][0], a0[1] + aB[k][1], a0[2] + aB[k][2]];
  let q = V.len(a0) / m0 > 0.5 ? qFromUp(a0) : [1, 0, 0, 0];
  const qs = [], rad = Math.PI / 180, dt = 1 / fs;
  for (let k = 0; k < n; k++) { qs.push(q); q = mahony(q, gB[k].map(v => v * rad), aB[k], dt, 2); }

  // у момент попу ніс дивиться в той самий бік, що й на живій сцені
  const [w, x, y, z] = qs[Math.min(pop, n - 1)];
  const psi = Math.atan2(2 * (x * y + w * z), 1 - 2 * (y * y + z * z));
  const qz = [Math.cos(-psi / 2), 0, 0, Math.sin(-psi / 2)];
  for (let k = 0; k < n; k++) qs[k] = qMul(qz, qs[k]);

  // висота: парабола польоту між попом і приземленням
  const T = (land - pop) / fs, h = [], roll = [], yaw = [];
  let c = [0, 0, 0];
  for (let k = 0; k < n; k++) {
    const tau = (k - pop) / fs;
    h.push(k > pop && k < land ? 0.5 * G * tau * (T - tau) : 0);
    if (k > pop && k <= land) c = [c[0] + gS[k - 1][0] / fs, c[1] + gS[k - 1][1] / fs, c[2] + gS[k - 1][2] / fs];
    const ax = axesOf(c, M, bf);
    roll.push(ax.roll); yaw.push(ax.yaw);
  }
  return { fs, n, pop, land, q: qs, h, roll, yaw, dur: (n - 1) / fs };
}

// Положення в момент time (секунди від початку фрагмента), з плавним переходом між кадрами
export function sampleTrack(tr, time) {
  const x = Math.max(0, Math.min(tr.n - 1, time * tr.fs)), i = Math.floor(x), f = x - i, j = Math.min(tr.n - 1, i + 1);
  return { q: slerp(tr.q[i], tr.q[j], f), h: tr.h[i] + (tr.h[j] - tr.h[i]) * f, frame: Math.round(x) };
}
