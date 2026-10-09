// Вектори, кватерніони, фільтр орієнтації.

export const V = {
  dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
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

function qStep(q, gx, gy, gz, dt) {
  const [w, x, y, z] = q, h = 0.5 * dt;
  const r = [w + (-x * gx - y * gy - z * gz) * h, x + (w * gx + y * gz - z * gy) * h,
             y + (w * gy - x * gz + z * gx) * h, z + (w * gz + x * gy - y * gx) * h];
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
