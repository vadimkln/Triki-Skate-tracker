// Процедурна модель скейтборда. Осі: x — уздовж дошки (ніс у +x), y — вгору, z — поперек.
// Початок координат — центр плоскої частини деки; земля — на y = −DECK_Y.
import * as THREE from '../vendor/three.module.min.js';
import { gripTexture, graphicTexture, plyTexture } from './textures.js';

const L = 0.80, W = 0.21, T = 0.012;          // довжина, ширина, товщина деки (м)
const KICK = 0.27;                           // де починаються ніс і хвіст
export const DECK_Y = 0.084;                 // від землі до центру деки
const TRUCK_X = 0.185, WHEEL_R = 0.027, WHEEL_W = 0.032, WHEEL_Z = 0.090;

function halfWidth(u) {
  const R = W / 2, a = L / 2 - R, d = Math.abs(u);
  return d <= a ? R : Math.sqrt(Math.max(0, R * R - (d - a) * (d - a)));
}
// підйом носа/хвоста: плавний вигин, далі пряма під ~24°
function kickRise(u) {
  const d = Math.abs(u) - KICK; if (d <= 0) return 0;
  const r = 0.04, s = 0.45;
  return d < r ? s * d * d / (2 * r) : s * r / 2 + s * (d - r);
}
// конкейв: краї деки трохи вище за центр (лише на плоскій частині)
function concave(u, v) {
  const fade = Math.max(0, 1 - Math.max(0, Math.abs(u) - KICK + 0.02) / 0.06);
  return 0.005 * v * v * fade;
}
const surf = (u, v) => kickRise(u) + concave(u, v);

function deckMeshes(mats) {
  const NU = 140, NV = 18, cols = NV + 1;
  const top = [], bot = [], uv = [], idxT = [], idxB = [];
  for (let i = 0; i <= NU; i++) {
    const u = -L / 2 + L * i / NU, w = halfWidth(u);
    for (let j = 0; j <= NV; j++) {
      const v = -1 + 2 * j / NV, y = surf(u, v), z = v * w;
      top.push(u, y + T / 2, z); bot.push(u, y - T / 2, z); uv.push(i / NU, j / NV);
    }
  }
  for (let i = 0; i < NU; i++) for (let j = 0; j < NV; j++) {
    const a = i * cols + j, b = (i + 1) * cols + j, c = a + 1, d = b + 1;
    idxT.push(a, c, b, c, d, b);
    idxB.push(a, b, c, c, b, d);
  }
  const mk = (pos, idx) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  // торець: обхід контуру по краях j=0 та j=NV
  const outline = [];
  for (let i = 0; i <= NU; i++) outline.push(i * cols);
  for (let i = NU; i >= 0; i--) outline.push(i * cols + NV);
  const sp = [], suv = [], sidx = [];
  let acc = 0;
  outline.forEach((k, n) => {
    if (n) { const p = outline[n - 1]; acc += Math.hypot(top[k * 3] - top[p * 3], top[k * 3 + 2] - top[p * 3 + 2]); }
    sp.push(top[k * 3], top[k * 3 + 1], top[k * 3 + 2], bot[k * 3], bot[k * 3 + 1], bot[k * 3 + 2]);
    suv.push(acc * 20, 1, acc * 20, 0);
  });
  for (let n = 0; n < outline.length - 1; n++) { const a = 2 * n, b = a + 1, c = a + 2, d = a + 3; sidx.push(a, b, c, c, b, d); }
  const side = new THREE.BufferGeometry();
  side.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
  side.setAttribute('uv', new THREE.Float32BufferAttribute(suv, 2));
  side.setIndex(sidx); side.computeVertexNormals();
  return [new THREE.Mesh(mk(top, idxT), mats.grip), new THREE.Mesh(mk(bot, idxB), mats.graphic), new THREE.Mesh(side, mats.ply)];
}

function wheelGeometry() {
  const h = WHEEL_W / 2, R = WHEEL_R;
  const prof = [[0.0105, -h], [0.019, -h], [0.0236, -h + 0.0006], [0.0262, -h + 0.0028], [R, -h + 0.0062],
                [R, h - 0.0062], [0.0262, h - 0.0028], [0.0236, h - 0.0006], [0.019, h], [0.0105, h]]
    .map(([r, y]) => new THREE.Vector2(r, y));
  const g = new THREE.LatheGeometry(prof, 40);
  g.rotateX(Math.PI / 2);
  return g;
}

function truck(x, mats) {
  const g = new THREE.Group(), inward = -Math.sign(x);          // кінгпін дивиться до центру дошки
  const deckBottom = -T / 2, axleY = -DECK_Y + WHEEL_R;
  const add = (geo, mat, px, py, pz) => { const m = new THREE.Mesh(geo, mat); m.position.set(px, py, pz); g.add(m); return m; };
  add(new THREE.BoxGeometry(0.066, 0.008, 0.056), mats.metal, 0, deckBottom - 0.004, 0);                     // основа
  add(new THREE.BoxGeometry(0.026, 0.024, 0.040), mats.metal, -inward * 0.006, deckBottom - 0.018, 0);       // корпус
  const kp = add(new THREE.CylinderGeometry(0.0042, 0.0042, 0.034, 14), mats.steel, inward * 0.013, deckBottom - 0.026, 0);
  kp.rotation.z = inward * 0.55;
  for (const dy of [-0.016, -0.031]) {                                                                       // втулки
    const bu = add(new THREE.CylinderGeometry(0.0095, 0.0095, 0.008, 20), mats.bushing, inward * (0.013 - dy * 0.35), deckBottom + dy, 0);
    bu.rotation.z = inward * 0.55;
  }
  const bar = add(new THREE.CylinderGeometry(0.0095, 0.0095, 0.145, 22), mats.metal, 0, axleY, 0); bar.rotation.x = Math.PI / 2;
  const hub = add(new THREE.SphereGeometry(0.016, 20, 14), mats.metal, 0, axleY + 0.004, 0); hub.scale.set(1, 0.95, 1.9);
  const axle = add(new THREE.CylinderGeometry(0.004, 0.004, 0.212, 12), mats.steel, 0, axleY, 0); axle.rotation.x = Math.PI / 2;
  for (const s of [1, -1]) {
    const nut = add(new THREE.CylinderGeometry(0.0062, 0.0062, 0.006, 6), mats.steel, 0, axleY, s * 0.103); nut.rotation.x = Math.PI / 2;
    add(wheelGeometry(), mats.urethane, 0, axleY, s * WHEEL_Z);
    const core = add(new THREE.CylinderGeometry(0.0108, 0.0108, 0.028, 20), mats.core, 0, axleY, s * WHEEL_Z); core.rotation.x = Math.PI / 2;
  }
  for (const bx of [-0.019, 0.019]) for (const bz of [-0.021, 0.021]) {                                      // болти на гриптейпі
    add(new THREE.CylinderGeometry(0.0038, 0.0038, 0.0016, 14), mats.bolt, bx, T / 2 + 0.0007, bz);
  }
  g.position.x = x;
  return g;
}

// кришечка Triki під декою — з рифленим краєм, як у справжньої кришки
function trikiCap(mat) {
  const geo = new THREE.CylinderGeometry(0.0225, 0.0225, 0.0075, 84, 1);
  const p = geo.attributes.position, v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const r = Math.hypot(v.x, v.z);
    if (r > 0.02) { const a = Math.atan2(v.z, v.x), k = (0.0225 + 0.0011 * Math.cos(21 * a)) / r; p.setXYZ(i, v.x * k, v.y, v.z * k); }
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat); m.position.set(0, -T / 2 - 0.0038, 0);
  return m;
}

export function buildBoard(maxAniso = 4) {
  const S = (o) => new THREE.MeshStandardMaterial(o);
  const mats = {
    grip: S({ map: gripTexture(maxAniso), roughness: 1 }),
    graphic: S({ map: graphicTexture(), roughness: 0.5 }),
    ply: S({ map: plyTexture(), roughness: 0.75, side: THREE.DoubleSide }),
    metal: S({ color: 0xA7ACB1, metalness: 0.75, roughness: 0.38 }),
    steel: S({ color: 0xD4D7DA, metalness: 0.9, roughness: 0.25 }),
    bolt: S({ color: 0x2b2b2b, metalness: 0.6, roughness: 0.4 }),
    bushing: S({ color: 0xF3C316, roughness: 0.6 }),
    urethane: S({ color: 0xF0EDE4, roughness: 0.42 }),
    core: S({ color: 0x5a5d61, metalness: 0.5, roughness: 0.4 }),
    cap: S({ color: 0xB8301E, metalness: 0.35, roughness: 0.45 }),
  };
  const g = new THREE.Group();
  for (const m of deckMeshes(mats)) g.add(m);
  g.add(truck(TRUCK_X, mats), truck(-TRUCK_X, mats), trikiCap(mats.cap));
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}
