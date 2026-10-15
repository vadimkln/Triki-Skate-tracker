// Пошук трюків у потоці: поп → політ → приземлення, підрахунок обертів, назва, чи вдалося приземлитись.
import { S, bus, saveSettings } from './util.js';
import { V, qFromUp, mahony, decomposeStep } from './math.js';
import { st, SAT, mount } from './sensor.js';

// Пороги підібрано на справжніх записах (див. detect)
const IMPACT_G = 2.0, POP_G = 2.6, SHOCK_G = 3.5, MIN_AIR = 0.2, MAX_AIR = 0.85,
      AIR_DPS = 200, SETTLE_DPS = 150, UNSUP_AZ = 0.35;

export const TRICK_NAMES = ['Ollie', 'Kickflip', 'Heelflip', 'BS pop shuvit', 'FS pop shuvit', 'BS 360 shuvit',
  'FS 360 shuvit', 'Varial kickflip', 'Varial heelflip', 'Hardflip', 'Inward heelflip', '360 flip', 'Laser flip',
  'Double kickflip', 'Double heelflip', 'Impossible', 'Other'];

// Ділянки, де гіроскоп упирався в межу, домальовуємо параболою по сусідніх точках
export function repairRuns(col) {
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

// Оберти з погляду райдера: додатний roll — у бік kickflip, додатний yaw — у бік BS shuvit.
// Вхід — оберти в осях дошки; для goofy напрямки дзеркальні. Демо записане як regular.
export function riderAxes(rot, bf) {
  let { roll, yaw, pitch } = rot;
  if (S.stance === 'goofy' && !bf) { roll = -roll; yaw = -yaw; }
  return { roll, pitch, yaw };
}

export function classify(roll, yaw, pitch) {
  const nf = Math.round(roll / 360), ns = Math.round(yaw / 180), rf = roll - nf * 360, rs = yaw - ns * 180, flags = [];
  if (Math.abs(rf) > 50) flags.push(nf === 0 ? { k: 'partial', d: Math.round(Math.abs(roll)) }
    : Math.abs(roll) < Math.abs(nf * 360) ? { k: 'under', d: Math.round(Math.abs(rf)) } : { k: 'over', d: Math.round(Math.abs(rf)) });
  if (Math.abs(rs) > 40) flags.push({ k: 'yaw' });
  if (Math.abs(pitch) > 270) return { name: 'Impossible', flags, conf: 0.6 };
  const af = Math.abs(nf), as = Math.abs(ns), kick = nf > 0, bs = ns > 0;
  let name;
  if (!af && !as) name = 'Ollie';
  else if (!as && af <= 3) name = ['', '', 'Double ', 'Triple '][af] + (kick ? 'kickflip' : 'heelflip');
  else if (!af && as === 1) name = (bs ? 'BS' : 'FS') + ' pop shuvit';
  else if (!af && as === 2) name = (bs ? 'BS' : 'FS') + ' 360 shuvit';
  else if (af === 1 && as === 1) name = kick ? (bs ? 'Varial kickflip' : 'Hardflip') : (bs ? 'Inward heelflip' : 'Varial heelflip');
  else if (af === 1 && as === 2) name = kick ? (bs ? '360 flip' : 'FS 360 kickflip') : (bs ? 'BS 360 heelflip' : 'Laser flip');
  else name = 'Other';
  return { name: name[0].toUpperCase() + name.slice(1), flags, conf: 1 - Math.min(1, (Math.abs(rf) / 180 + Math.abs(rs) / 90) / 2) };
}

// Оберти в польоті (осі дошки). T — час кожного виміру в секундах: Bluetooth на телефоні приносить
// 10–25 вимірів на секунду нерівно, пачками й з дірками, тож крок інтегрування беремо з часу, а не з частоти.
export function airRotation(gB, aB, T, p, q) {
  const n = gB.length;
  let i0 = p, i1 = p;
  while (i0 > 0 && T[p] - T[i0 - 1] <= 0.4) i0--;
  while (i1 > i0 && T[p] - T[i1 - 1] < 0.12) i1--;
  let up = [0, 0, 0];
  for (let k = i0; k < i1; k++) up = V.add(up, aB[k]);
  let qq = qFromUp(i1 > i0 && V.len(up) > 0.3 * (i1 - i0) ? up : [0, 0, 1]);
  for (let k = i1; k < p; k++) qq = mahony(qq, gB[k].map(v => v * Math.PI / 180), aB[k], T[k + 1] - T[k], 2);
  const acc = { roll: 0, yaw: 0, pitch: 0 };
  // трапеція: між двома вимірами кутова швидкість змінюється плавно (і через дірку в даних теж)
  for (let k = p; k < q && k + 1 < n; k++) {
    const w = V.mul(V.add(gB[k], gB[k + 1]), 0.5);
    qq = decomposeStep(qq, w, T[k + 1] - T[k], acc);
  }
  return acc;
}

// Положення Triki на дошці по горизонталі уточнюємо самими трюками. Одразу після удару хвостом дошка
// задирає ніс, тобто крутиться навколо поперечної осі — звідси видно, де ніс. А у фліпі дошка
// крутиться навколо довгої осі — це ще точніше показує її напрямок (але без «де ніс, де хвіст»).
// Якщо Triki переставили, а майстер положення не пройшли (або пройшли криво), кілька трюків це виправлять.
const learn = {};
export function resetYawLearn() { Object.assign(learn, { sx: 0, sy: 0, w: 0, n: 0, c2: 0, s2: 0, wf: 0 }); }
resetYawLearn();
function yawEvidence(gB, T, amag, p, qs) {
  // перші ~50 мс після попу (якщо Bluetooth їх загубив — перший вимір до 100 мс)
  let w = [0, 0, 0], k = p + 1;
  for (; k < qs && T[k] - T[p] <= 0.05; k++) if (amag[k] < SHOCK_G) w = V.add(w, gB[k]);
  if (!V.len(w)) for (; k < qs && T[k] - T[p] <= 0.1; k++) if (amag[k] < SHOCK_G) { w = gB[k]; break; }
  const h = Math.hypot(w[0], w[1]);
  const pop = h >= 150 && Math.abs(w[2]) < h ? { x: -w[1] / h, y: w[0] / h, w: Math.min(h, 1000) } : null;   // ніс = верх × вісь
  let c2 = 0, s2 = 0, wf = 0;
  for (let j = p + 1; j < qs; j++) {
    const g = gB[j], m = Math.hypot(g[0], g[1]);
    if (amag[j] >= SHOCK_G || m < 600 || Math.abs(g[2]) > 0.5 * m) continue;
    const th = 2 * Math.atan2(g[1], g[0]);
    c2 += m * Math.cos(th); s2 += m * Math.sin(th); wf += m;
  }
  return { pop, flip: wf ? { c2, s2, w: wf } : null };
}
function learnYaw(ev) {
  if (st.source !== 'ble') return false;
  if (ev.pop) { learn.sx += ev.pop.x * ev.pop.w; learn.sy += ev.pop.y * ev.pop.w; learn.w += ev.pop.w; learn.n++; }
  if (ev.flip) { learn.c2 += ev.flip.c2; learn.s2 += ev.flip.s2; learn.wf += ev.flip.w; }
  const R = Math.hypot(learn.sx, learn.sy), Rf = Math.hypot(learn.c2, learn.s2);
  if (!learn.n || R < 0.75 * learn.w) return false;
  let phi = Math.atan2(learn.sy, learn.sx), lim = 30;
  if (learn.wf >= 3000 && Rf >= 0.85 * learn.wf) {
    // напрямок — з фліпів, а котрий із двох кінців ніс — з попів
    let f = Math.atan2(learn.s2, learn.c2) / 2;
    if (Math.cos(f - phi) < 0) f += Math.PI;
    // одного трюку досить, якщо поп і фліп кажуть те саме
    if (learn.n < 2 && Math.cos(f - phi) < Math.cos(35 * Math.PI / 180)) return false;
    phi = Math.atan2(Math.sin(f), Math.cos(f)); lim = 12;
  } else if (learn.n < 2) return false;
  const deg = phi * 180 / Math.PI;
  if (Math.abs(deg) < lim) return false;
  const M = mount(); if (!M) return false;
  const c = Math.cos(phi), s = Math.sin(phi);
  const x = V.norm(V.add(V.mul(M[0], c), V.mul(M[1], s))), z = M[2], y = V.cross(z, x);
  if (S.mount) { S.mount = [x, y, z]; saveSettings(); } else st.autoMount = [x, y, z];
  resetYawLearn();
  bus.emit('mount-yaw', Math.round(deg));
  return true;
}

// Запускається кожні 150 мс. Знайдений трюк — подія 'trick'.
// Перевірено на записах реальних трюків (жовтень 2026: на місці, на ходу, фліпи; їзда по рівному й по нерівному):
//  • поп — удар хвостом ≥ 2,6 g, за ним дошка одразу крутиться (задирає ніс). Асфальт, бордюри й ями
//    дають удари до 4 g, але без такого обертання;
//  • політ — колеса не тримаються за землю: вздовж осі «верх» дошки майже немає сили, а часто вона
//    навіть від'ємна (ноги притискають дошку зверху). Тому «невагомості» в польоті може й не бути;
//  • приземлення — удар, після якого дошка за пів секунди перестає крутитись. Удари ногами по дошці
//    в повітрі (до −8 g) — ще не приземлення: дошка після них крутиться далі;
//  • в момент удару гіроскоп і акселерометр «дзвенять» (до 2000 °/с за один вимір) — такі виміри не рахуємо.
export function detect() {
  const B = st.buf, N = B.length;
  if (N < 20) return;
  const fs = st.fs, demo = st.source === 'demo';
  const T = demo ? B.map(s => (s.n - B[0].n) / fs) : B.map(s => (s.t - B[0].t) / 1000);
  const amag = B.map(s => s.amag), az = B.map(s => s.a[2]);
  const cols = [0, 1, 2].map(i => repairRuns(B.map(s => s.raw[3 + i])));
  // гіроскоп в осях Triki (°/с) і в осях дошки
  const gyro = B.map((_, j) => [0, 1, 2].map(i => (cols[i][j] - st.bias[i]) / S.gyroScale));
  let M = demo ? null : mount();
  const toB = M => (M ? gyro.map(v => [V.dot(M[0], v), V.dot(M[1], v), V.dot(M[2], v)]) : gyro);
  let gB = toB(M);
  const spin = gyro.map(V.len);
  const at = x => { let lo = 0, hi = N; while (lo < hi) { const m = (lo + hi) >> 1; if (T[m] < x) lo = m + 1; else hi = m; } return lo; };
  // обертання без «дзвону» ударів
  const spins = (a, b) => { const v = []; for (let k = Math.max(0, a); k < Math.min(N, b); k++) if (amag[k] < SHOCK_G) v.push(spin[k]); return v; };
  const med = v => (v.length ? v.slice().sort((x, y) => x - y)[v.length >> 1] : NaN);

  const peaks = [];
  for (let i = 1; i < N - 1; i++) {
    if (amag[i] >= IMPACT_G && amag[i] >= amag[i - 1] && amag[i] > amag[i + 1]) {
      const l = peaks[peaks.length - 1];
      if (peaks.length && T[i] - T[l] < 0.06) { if (amag[i] > amag[l]) peaks[peaks.length - 1] = i; }
      else peaks.push(i);
    }
  }
  for (let pi = 0; pi < peaks.length; pi++) {
    const p = peaks[pi];
    if (B[p].n <= st.lastLandN || amag[p] < POP_G) continue;
    // поп: дошка одразу починає крутитись
    if (!(Math.max(0, ...spins(p + 1, at(T[p] + 0.2))) >= AIR_DPS)) continue;
    for (let qi = pi + 1; qi < peaks.length; qi++) {
      let q = peaks[qi];
      if (T[q] - T[p] < MIN_AIR) continue;
      if (T[q] - T[p] > MAX_AIR + 0.12) break;
      // Удари йдуть пачкою: ноги б'ють по дошці зверху (сила вниз), передні колеса торкаються першими.
      // Приземлення — той удар із пачки, де земля найсильніше штовхає дошку знизу.
      for (let j = qi + 1; j < peaks.length && T[peaks[j]] - T[peaks[qi]] <= 0.2; j++) if (az[peaks[j]] > az[q]) q = peaks[j];
      // момент приземлення — початок удару, а не його пік (Bluetooth іноді розтягує удар на кілька вимірів)
      let qs = q; while (qs > p + 1 && T[q] - T[qs - 1] < 0.12 && amag[qs - 1] >= 1.5) qs--;
      const air = T[qs] - T[p];
      if (air < MIN_AIR) continue;
      if (air > MAX_AIR) break;
      if (T[N - 1] < T[q] + 0.8) return;                    // чекаємо, чим закінчиться приземлення
      // після приземлення дошка вже не крутиться (удар ногами в повітрі — крутиться далі) і стоїть на колесах
      let a1 = at(T[q] + 0.35);
      if (spins(q + 1, a1).length < 3) { a1 = q + 1; for (let c = 0; a1 < N && c < 4; a1++) if (amag[a1] < SHOCK_G) c++; }   // Bluetooth загубив виміри одразу після удару
      const sp = spins(q + 1, a1);
      let sup = 0; for (let k = q + 1; k < a1; k++) if (az[k] >= UNSUP_AZ) sup++;
      const spMed = med(sp), calm = spMed < SETTLE_DPS || (spMed < 300 && sup >= 0.6 * (a1 - q - 1));
      if (sp.length < 2 || !calm) continue;
      const mA = med(amag.slice(at(T[q] + 0.1), Math.max(at(T[q] + 0.6), a1)));
      if (!(mA > 0.7 && mA < 1.9)) continue;
      // у повітрі колеса не тримаються за землю, і дошка крутиться
      let nAir = 0, nFree = 0;
      for (let k = p + 1; k < qs; k++) { nAir++; if (az[k] < UNSUP_AZ || amag[k] < 0.5) nFree++; }
      if (nAir < 2 || nFree < 0.6 * nAir) continue;
      if (!(Math.max(0, ...spins(p + 1, qs)) >= AIR_DPS)) continue;

      // для інтегрування виміри з «дзвоном» удару замінюємо сусідніми
      const fill = gB => gB.map((v, k) => {
        if (amag[k] < SHOCK_G || k <= p) return v;
        let a = k - 1, b = k + 1; while (a > p && amag[a] >= SHOCK_G) a--; while (b < N - 1 && amag[b] >= SHOCK_G) b++;
        return V.mul(V.add(gB[a], gB[b]), 0.5);
      });
      const aB = B.map(s => s.a);
      let rot = airRotation(fill(gB), aB, T, p, qs);
      // уточнюємо, куди дивиться ніс (див. learnYaw). Розворот навколо вертикалі від цього не залежить,
      // а в шув-іті нога «загрібає» дошку вбік — тож вчимося лише на оллі й фліпах.
      // Якщо Triki переставлено — перераховуємо трюк уже з новим положенням.
      if (!demo && Math.abs(rot.yaw) < 60 && learnYaw(yawEvidence(gB, T, amag, p, qs))) { M = mount(); gB = toB(M); rot = airRotation(fill(gB), aB, T, p, qs); }
      let gap = 0; for (let k = p + 1; k <= qs; k++) gap = Math.max(gap, T[k] - T[k - 1]);
      const ang = [0, 0, 0];
      for (let k = p; k < qs; k++) for (let i = 0; i < 3; i++) ang[i] += gyro[k][i] * (T[k + 1] - T[k]);

      // вдалося? — після приземлення дошка колесами вниз і спокійна
      const [l0, l1] = [at(T[q] + 0.1), Math.max(at(T[q] + 0.7), a1)];
      let zs = 0; for (let k = l0; k < l1; k++) zs += az[k];
      const azm = l1 > l0 ? zs / (l1 - l0) : 1, wob = Math.max(0, ...spins(at(T[q] + 0.3), at(T[q] + 0.9)));
      const landed = azm > 0.6 && wob < 400;
      const reason = landed ? '' : azm < -0.5 ? 'flipped' : azm < 0.6 ? 'side' : 'unstable';
      let clipped = 0; for (let k = p; k <= q; k++) if (B[k].raw.slice(3).some(v => Math.abs(v) >= SAT)) clipped++;

      const ax = riderAxes(rot, demo);
      const c = classify(ax.roll, ax.yaw, ax.pitch);
      if (clipped) c.flags.push({ k: 'clipped' });
      if (gap > 0.2) { c.flags.push({ k: 'gap' }); c.conf *= 0.7; }
      const s0 = at(T[p] - 1.0), s1 = Math.min(N, at(T[q] + 0.9) + 1);
      const trick = {
        ...c, air, height: 9.81 * air * air / 8 * 100, roll: ax.roll, pitch: ax.pitch, yaw: ax.yaw,
        angS: ang.map(v => +v.toFixed(1)), landG: amag[q], peakSpin: Math.max(...spins(p + 1, qs)), landed, reason,
        snip: { fs: +fs.toFixed(1), pop: p - s0, land: qs - s0, rows: B.slice(s0, s1).map(s => s.raw),
                t: demo ? undefined : B.slice(s0, s1).map(s => Math.round(s.t - B[s0].t)),
                bias: st.bias.map(v => +v.toFixed(1)), M: M && M.map(r => r.map(v => +v.toFixed(4))), bf: demo || undefined },
      };
      st.lastLandN = B[q].n;
      bus.emit('trick', trick);
      break;
    }
  }
}
