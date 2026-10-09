// Процедурні текстури — малюються в canvas при запуску, без файлів-картинок.
import * as THREE from '../vendor/three.module.min.js';

// детермінований генератор, щоб асфальт щоразу був однаковим
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }

// крапка з «загортанням» по краях, щоб текстура стикувалась без швів
function dotWrapped(g, x, y, r, size) {
  for (const dx of [0, -size, size]) for (const dy of [0, -size, size]) {
    const xx = x + dx, yy = y + dy;
    if (xx < -r || yy < -r || xx > size + r || yy > size + r) continue;
    g.beginPath(); g.arc(xx, yy, r, 0, Math.PI * 2); g.fill();
  }
}

export function asphaltTextures(maxAniso = 8) {
  const N = 1024, rnd = rng(7);
  const [c, g] = canvas(N, N), [b, gb] = canvas(N, N);
  g.fillStyle = '#3f4041'; g.fillRect(0, 0, N, N);
  gb.fillStyle = '#7f7f7f'; gb.fillRect(0, 0, N, N);
  // великі плями: латки, трохи світліші й темніші місця
  for (let i = 0; i < 70; i++) {
    const v = 64 + Math.floor(rnd() * 22);
    g.fillStyle = `rgba(${v},${v},${v + 1},0.12)`;
    dotWrapped(g, rnd() * N, rnd() * N, 40 + rnd() * 160, N);
  }
  // щебінь: тисячі дрібних камінців різного відтінку
  for (let i = 0; i < 70000; i++) {
    const x = rnd() * N, y = rnd() * N, r = 0.4 + rnd() * rnd() * 1.7, v = 38 + Math.floor(rnd() * rnd() * 90);
    g.fillStyle = `rgb(${v},${v},${v})`; dotWrapped(g, x, y, r, N);
    const hb = 110 + Math.floor((v - 35) * 1.1);
    gb.fillStyle = `rgb(${hb},${hb},${hb})`; dotWrapped(gb, x, y, r, N);
  }
  // світлі камінці, що «блищать»
  for (let i = 0; i < 700; i++) {
    const x = rnd() * N, y = rnd() * N, r = 0.8 + rnd() * 1.2, v = 118 + Math.floor(rnd() * 34);
    g.fillStyle = `rgb(${v},${v},${v - 4})`; dotWrapped(g, x, y, r, N);
    gb.fillStyle = '#e6e6e6'; dotWrapped(gb, x, y, r, N);
  }
  // тріщини: випадкові ламані з відгалуженнями, подалі від країв
  const crack = (x, y, ang, len, w) => {
    g.strokeStyle = 'rgba(22,22,22,0.85)'; gb.strokeStyle = '#141414';
    for (const ctx of [g, gb]) { ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x, y); }
    let px = x, py = y;
    for (let s = 0; s < len; s++) {
      ang += (rnd() - 0.5) * 0.9;
      px += Math.cos(ang) * 6; py += Math.sin(ang) * 6;
      if (px < 30 || py < 30 || px > N - 30 || py > N - 30) break;
      g.lineTo(px, py); gb.lineTo(px, py);
      if (rnd() < 0.05 && w > 0.8) { g.stroke(); gb.stroke(); crack(px, py, ang + (rnd() > .5 ? 1 : -1) * (0.6 + rnd()), len / 3, w * 0.6); g.beginPath(); gb.beginPath(); g.moveTo(px, py); gb.moveTo(px, py); }
    }
    g.stroke(); gb.stroke();
  };
  crack(260, 300, 0.4, 90, 1.8); crack(700, 650, 2.2, 70, 1.5); crack(520, 820, -0.3, 40, 1.2);

  const map = new THREE.CanvasTexture(c), bump = new THREE.CanvasTexture(b);
  map.colorSpace = THREE.SRGBColorSpace;
  for (const t of [map, bump]) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = maxAniso; }
  return { map, bump };
}

export function gripTexture(maxAniso = 4) {
  const N = 256, rnd = rng(11), [c, g] = canvas(N, N);
  g.fillStyle = '#1b1b1b'; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 9000; i++) {
    const v = rnd() < 0.5 ? 10 + rnd() * 14 : 34 + rnd() * 22;
    g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(rnd() * N, rnd() * N, 1.2, 1.2);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(7, 2); t.anisotropy = maxAniso;
  return t;
}

// Низ деки: жовта фарба бордюру, чорний шеврон дивиться на ніс (видно, куди ніс, коли дошка перевернута)
export function graphicTexture() {
  const W = 1024, H = 256, [c, g] = canvas(W, H);
  g.fillStyle = '#F3C316'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#111';
  g.beginPath(); g.moveTo(W * 0.70, 0); g.lineTo(W * 0.86, H / 2); g.lineTo(W * 0.70, H); g.lineTo(W * 0.62, H); g.lineTo(W * 0.78, H / 2); g.lineTo(W * 0.62, 0); g.closePath(); g.fill();
  for (let k = 0; k < 3; k++) g.fillRect(W * (0.16 + k * 0.035), 0, W * 0.012, H);
  g.beginPath(); g.arc(W * 0.42, H / 2, H * 0.17, 0, Math.PI * 2); g.lineWidth = 10; g.strokeStyle = '#111'; g.stroke();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Торець деки: шари клена, один фарбований
export function plyTexture() {
  const [c, g] = canvas(16, 64);
  const layers = ['#D8A766', '#C48F52', '#D2A062', '#1d1d1d', '#D2A062', '#C48F52', '#D8A766'];
  layers.forEach((col, i) => { g.fillStyle = col; g.fillRect(0, i * 64 / layers.length, 16, 64 / layers.length + 1); });
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping;
  return t;
}
