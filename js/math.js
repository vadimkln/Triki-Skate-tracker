// Вектори, кватерніони, фільтр орієнтації.

export const V = {
  dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
  add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
  sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
  mul: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
  len: a => Math.hypot(a[0], a[1], a[2]),
  norm: a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; },
  cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
};

// Матриця кріплення: рядки — осі дошки (x — до носа, y — поперек, z — вгору) у координатах Triki.
// gFlat — прискорення, коли дошка стоїть рівно; gNose — коли піднято ніс.
export function buildMount(gFlat, gNose) {
  const z = V.norm(gFlat);
  let xr = gNose ? V.sub(gNose, V.mul(z, V.dot(gNose, z))) : null;
  if (!xr || V.len(xr) < 0.15) {
    xr = V.sub([1, 0, 0], V.mul(z, z[0]));
    if (V.len(xr) < 0.1) xr = V.sub([0, 1, 0], V.mul(z, z[1]));
  }
  const x = V.norm(xr), y = V.cross(z, x);
  return [x, y, z];
}

// Точний крок повороту (через вісь і кут): при 25 Гц і швидкому фліпі за крок буває 60°,
// і проста лінійна формула там помітно «недокручує»
function qStep(q, gx, gy, gz, dt) {
  const th = Math.hypot(gx, gy, gz) * dt;
  if (th < 1e-9) return q;
  const s = Math.sin(th / 2) / (th / dt), c = Math.cos(th / 2);
  const dx = gx * s, dy = gy * s, dz = gz * s;
  const [w, x, y, z] = q;
  const r = [w * c - x * dx - y * dy - z * dz, w * dx + x * c + y * dz - z * dy,
             w * dy - x * dz + y * c + z * dx, w * dz + x * dy - y * dx + z * c];
  const n = Math.hypot(r[0], r[1], r[2], r[3]);
  return [r[0] / n, r[1] / n, r[2] / n, r[3] / n];
}

// Фільтр Mahony: гіроскоп + м'яка корекція «де верх» за акселерометром (лише коли |a| ≈ 1 g)
export function mahony(q, gRad, a, dt, kp = 2.0) {
  let [gx, gy, gz] = gRad;
  const an = V.len(a);
  if (an > 0.75 && an < 1.25) {
    const [w, x, y, z] = q, ax = a[0] / an, ay = a[1] / an, az = a[2] / an;
    const vx = 2 * (x * z - w * y), vy = 2 * (w * x + y * z), vz = w * w - x * x - y * y + z * z;
    gx += kp * (ay * vz - az * vy); gy += kp * (az * vx - ax * vz); gz += kp * (ax * vy - ay * vx);
  }
  return qStep(q, gx, gy, gz, dt);
}

// Чисте інтегрування гіроскопа (°/с) від рівного положення — для повтору трюку
export function integrateQ(gyroDps, fs) {
  let q = [1, 0, 0, 0];
  const out = [q], k = Math.PI / 180, dt = 1 / fs;
  for (const g of gyroDps) { q = qStep(q, g[0] * k, g[1] * k, g[2] * k, dt); out.push(q); }
  return out;
}

// Світовий «верх» у координатах тіла для орієнтації q (тіло → світ)
export const upOf = ([w, x, y, z]) => [2 * (x * z - w * y), 2 * (w * x + y * z), w * w - x * x - y * y + z * z];

// Найкоротший поворот, що ставить «верх» (вектор a в осях тіла) вертикально
export function qFromUp(a) {
  const n = V.norm(a), d = n[2];
  if (d < -0.9999) return [0, 1, 0, 0];
  const c = V.cross(n, [0, 0, 1]), q = [1 + d, c[0], c[1], c[2]], l = Math.hypot(...q);
  return q.map(v => v / l);
}

// Оберти дошки з урахуванням її нахилу (градуси). Кутова швидкість розкладається на три осі:
//   фліп — навколо довгої осі дошки x, розворот — навколо справжньої вертикалі u,
//   нахил — навколо осі n, перпендикулярної до обох. x і u не перпендикулярні, коли дошка задерта
//   після попу, тому розклад косокутний: інакше фліп частково рахується як розворот і навпаки.
export function decompose(u, w, dt, acc) {
  const x = [1, 0, 0], s = V.dot(x, u), det = 1 - s * s;
  if (det > 0.15) {
    const n = V.norm(V.cross(u, x));
    const c = V.dot(w, n), w2 = V.sub(w, V.mul(n, c));
    const wx = V.dot(w2, x), wu = V.dot(w2, u);
    acc.roll += (wx - s * wu) / det * dt;
    acc.yaw += (wu - s * wx) / det * dt;
    acc.pitch += c * dt;
  } else {
    // дошка майже вертикально (impossible): фліп і розворот тут не розділити — рахуємо в осях дошки
    acc.roll += w[0] * dt; acc.pitch += w[1] * dt; acc.yaw += w[2] * dt;
  }
}
export function decomposeStep(q, w, dt, acc) {
  decompose(upOf(q), w, dt, acc);
  return mahony(q, w.map(v => v * Math.PI / 180), [0, 0, 0], dt);
}

export function qMul(a, b) {
  const [aw, ax, ay, az] = a, [bw, bx, by, bz] = b;
  return [aw * bw - ax * bx - ay * by - az * bz, aw * bx + ax * bw + ay * bz - az * by,
          aw * by - ax * bz + ay * bw + az * bx, aw * bz + ax * by - ay * bx + az * bw];
}
// Найкоротший поворот, що переводить напрямок a в напрямок b
export function qFromTo(a, b) {
  const na = V.norm(a), nb = V.norm(b), d = V.dot(na, nb);
  if (d < -0.9999) { const p = Math.abs(na[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0], ax = V.norm(V.cross(na, p)); return [0, ax[0], ax[1], ax[2]]; }
  const c = V.cross(na, nb), q = [1 + d, c[0], c[1], c[2]], l = Math.hypot(...q);
  return q.map(v => v / l);
}
export function slerp(a, b, t) {
  let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  if (d < 0) { b = b.map(v => -v); d = -d; }
  if (d > 0.9995) { const r = a.map((v, i) => v + (b[i] - v) * t), l = Math.hypot(...r); return r.map(v => v / l); }
  const th = Math.acos(d), s = Math.sin(th), wa = Math.sin((1 - t) * th) / s, wb = Math.sin(t * th) / s;
  return a.map((v, i) => v * wa + b[i] * wb);
}
