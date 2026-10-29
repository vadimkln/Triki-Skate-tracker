// Повтор трюку: із сирого фрагмента сенсора будуємо доріжку кадрів — орієнтація, висота, накопичені оберти.
// Положення в польоті рахуємо гіроскопом, а в момент, коли дошка після приземлення вже стоїть,
// звіряємо з гравітацією і розподіляємо похибку на весь політ — тоді дошка приземляється
// рівно на чотири колеса, а не «на два з повільним вирівнюванням».
import { S } from './util.js';
import { V, mahony, upOf, qFromUp, qFromTo, qMul, slerp, decompose } from './math.js';
import { st, mount } from './sensor.js';
import { repairRuns, riderAxes } from './tricks.js';

export { slerp };
const G = 9.81, RAD = Math.PI / 180, IDQ = [1, 0, 0, 0];

export const hasReplay = tr => !!(tr && tr.snip && tr.snip.rows && tr.snip.rows.length > 4);

export function buildTrack(snip, landed = true) {
  const fs = snip.fs || 25, rows = snip.rows, n = rows.length;
  const pop = Math.min(snip.pop, n - 1), land = Math.min(Math.max(snip.land, pop + 1), n - 1);
  const bf = !!snip.bf, M = bf ? null : (snip.M !== undefined ? snip.M : mount());
  const bias = snip.bias || st.bias;
  const toB = v => (M ? [V.dot(M[0], v), V.dot(M[1], v), V.dot(M[2], v)] : v);
  // час кожного виміру: у справжніх записах — коли він прийшов (телефон приносить їх нерівно), у демо — рівно
  const T = snip.t && snip.t.length === n ? snip.t.map(v => v / 1000) : rows.map((_, k) => k / fs);
  const dtk = k => Math.min(Math.max(k + 1 < n ? T[k + 1] - T[k] : 1 / fs, 0), 0.25);
  // синтетичні фрагменти (анімація гри) не обрізані сенсором, їх не «лагодимо»
  const cols = [0, 1, 2].map(i => (snip.synth ? rows.map(r => r[3 + i]) : repairRuns(rows.map(r => r[3 + i]))));
  const gS = rows.map((_, k) => [0, 1, 2].map(i => (cols[i][k] - bias[i]) / S.gyroScale));
  const aB = rows.map(r => toB([r[0] / S.accScale, r[1] / S.accScale, r[2] / S.accScale]));
  const amag = aB.map(V.len);
  // у мить удару гіроскоп «дзвенить» — такі виміри замінюємо сусідніми
  const gB = gS.map(toB).map((v, k, all) => {
    if (snip.synth || amag[k] < 3.5) return v;
    let a = k - 1, b = k + 1; while (a > 0 && amag[a] >= 3.5) a--; while (b < n - 1 && amag[b] >= 3.5) b++;
    return a >= 0 && b < n ? V.mul(V.add(all[a], all[b]), 0.5) : v;
  });
  const spin = gB.map(V.len);
  const calm = k => spin[k] < 120 && amag[k] > 0.8 && amag[k] < 1.25;
  const step = (q, k, kp) => mahony(q, gB[k].map(v => v * RAD), kp ? aB[k] : [0, 0, 0], dtk(k), kp || 2);

  // 1) до попу дошка котиться по землі — лежить рівно на колесах (як і на живій сцені); від гіроскопа
  //    беремо лише курс. Останні 0,15 с перед ударом хвостом — уже вільно: на швидких вимірах тут видно,
  //    як задня нога тисне хвіст і ніс іде вгору.
  const real = !snip.synth;
  const flat = q => qMul(q, qFromTo([0, 0, 1], upOf(q)));
  let q = IDQ;
  const qs = new Array(n);
  for (let k = 0; k < pop; k++) {
    qs[k] = q;
    q = step(q, k, 0);
    if (real && T[pop] - T[k + 1] > 0.15) q = flat(q);
  }

  // 2) політ: лише гіроскоп (акселерометр тут показує удари й сили від ніг). Між двома вимірами
  //    кутова швидкість змінюється плавно, тож беремо середню (трапеція) — при 10–25 вимірах на секунду
  //    це помітно точніше
  const rot = [0];
  for (let k = pop; k < land; k++) {
    qs[k] = q;
    const w = real ? V.mul(V.add(gB[k], gB[k + 1]), 0.5) : gB[k];
    q = mahony(q, w.map(v => v * RAD), [0, 0, 0], dtk(k), 0);
    rot.push(rot[rot.length - 1] + V.len(w) * dtk(k));
  }

  // 3) поправка. При 10–25 вимірах на секунду й обертанні 1000+ °/с гіроскоп за політ помиляється на десятки градусів.
  //    Вдале приземлення — дошка колесами вниз; невдале — нахил беремо з середньої гравітації після удару.
  //    Похибка гіроскопа набігає там, де дошка швидко крутиться, тож і поправку розподіляємо за накопиченим
  //    обертанням, а не рівно в часі: спокійні ділянки польоту (наприклад, коли ніс опущено й дошка так летить)
  //    лишаються такими, як їх виміряв сенсор.
  let target = null;
  if (landed) target = [0, 0, 1];
  else {
    let m = [0, 0, 0], c = 0;
    for (let k = land; k < n; k++) { const d = T[k] - T[land]; if (d >= 0.15 && d <= 0.8) { m = V.add(m, aB[k]); c++; } }
    if (c && V.len(m) / c > 0.6) target = V.norm(m);
  }
  if (target) {
    const corr = qFromTo(target, upOf(q)), total = rot[rot.length - 1], span = Math.max(1e-3, T[land] - T[pop]);
    for (let k = pop; k < land; k++) {
      const u = total > 20 ? rot[k - pop] / total : (T[k] - T[pop]) / span;
      qs[k] = qMul(qs[k], slerp(IDQ, corr, u));
    }
    q = qMul(q, corr);
  }

  // 4) після приземлення: мить дошка стоїть, далі знову гіроскоп + гравітація (удари на колесах не крутять її)
  for (let k = land; k < n; k++) { qs[k] = q; if (!landed || T[k] - T[land] >= 0.2) q = step(q, k, calm(k) ? 8 : 2); }

  // у момент попу ніс дивиться в той самий бік, що й на живій сцені
  const [w, x, y, z] = qs[pop];
  const psi = Math.atan2(2 * (x * y + w * z), 1 - 2 * (y * y + z * z));
  const qz = [Math.cos(-psi / 2), 0, 0, Math.sin(-psi / 2)];
  for (let k = 0; k < n; k++) qs[k] = qMul(qz, qs[k]);

  // накопичені оберти від попу
  const roll = [], yaw = [], acc = { roll: 0, yaw: 0, pitch: 0 };
  for (let k = 0; k < n; k++) {
    if (k > pop && k <= land) decompose(upOf(qs[k - 1]), gB[k - 1], T[k] - T[k - 1], acc);
    const ax = riderAxes(acc, bf);
    roll.push(ax.roll); yaw.push(ax.yaw);
  }

  // рівна сітка кадрів (переглядач і сцена рахують у кадрах): справжні виміри розкладаємо по часу
  const F = snip.t ? 30 : fs, t0 = T[0], dur = T[n - 1] - t0;
  const nf = snip.t ? Math.max(2, Math.round(dur * F) + 1) : n;
  const fPop = snip.t ? Math.round((T[pop] - t0) * F) : pop, fLand = snip.t ? Math.max(fPop + 1, Math.round((T[land] - t0) * F)) : land;
  const Tair = (fLand - fPop) / F;
  const out = { fs: F, n: nf, pop: fPop, land: fLand, q: [], h: [], roll: [], yaw: [], dur: (nf - 1) / F };
  let j = 0;
  for (let f = 0; f < nf; f++) {
    const tt = t0 + f / F;
    if (snip.t) { while (j < n - 2 && T[j + 1] <= tt) j++; }
    else j = Math.min(f, n - 1);
    const span = snip.t ? T[j + 1] - T[j] : 0, u = span > 0 ? Math.min(1, Math.max(0, (tt - T[j]) / span)) : 0;
    const j2 = Math.min(n - 1, j + 1);
    out.q.push(u ? slerp(qs[j], qs[j2], u) : qs[j]);
    out.roll.push(roll[j] + (roll[j2] - roll[j]) * u);
    out.yaw.push(yaw[j] + (yaw[j2] - yaw[j]) * u);
    // висота: парабола польоту між попом і приземленням
    const tau = (f - fPop) / F;
    out.h.push(f > fPop && f < fLand ? 0.5 * G * tau * (Tair - tau) : 0);
  }
  return out;
}

// Положення в момент time (секунди від початку фрагмента), з плавним переходом між кадрами
export function sampleTrack(tr, time) {
  const x = Math.max(0, Math.min(tr.n - 1, time * tr.fs)), i = Math.floor(x), f = x - i, j = Math.min(tr.n - 1, i + 1);
  return { q: slerp(tr.q[i], tr.q[j], f), h: tr.h[i] + (tr.h[j] - tr.h[i]) * f, frame: Math.round(x) };
}
