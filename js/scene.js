// 3D-сцена: асфальт, дошка, проста фізика (гравітація + тверда підлога) і повтор трюку.
import * as THREE from '../vendor/three.module.min.js';
import { buildBoard, DECK_Y } from './board.js';
import { asphaltTextures } from './textures.js';
import { st } from './sensor.js';
import { bus, log } from './util.js';

const G = 9.81;
let R = null;                       // renderer, scene, camera, root…
let replay = null;                  // поточний повтор трюку
const phys = { y: DECK_Y, vy: 0, restY: DECK_Y };
let contact = [];                   // точки моделі, якими вона може торкатись землі
const tmp = new THREE.Vector3(), qThree = new THREE.Quaternion();

export function initScene(canvas) {
  try {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    const aniso = renderer.capabilities.getMaxAnisotropy();

    const scene = new THREE.Scene();
    const sky = new THREE.Color(0xD2D4D2);           // похмуре денне небо
    scene.background = sky;
    scene.fog = new THREE.Fog(sky, 3.2, 12);

    const cam = new THREE.PerspectiveCamera(30, 1, 0.03, 60);
    scene.add(new THREE.HemisphereLight(0xf4f6f7, 0x2e2e2e, 1.5));
    const sun = new THREE.DirectionalLight(0xfff6ea, 2.4);
    sun.position.set(1.2, 3.4, 1.6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -1.4, right: 1.4, top: 1.4, bottom: -1.4, near: 0.5, far: 8 });
    sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.01; sun.shadow.radius = 5;
    scene.add(sun);

    // асфальт: текстура 2×2 м, повторена на 40×40 м
    const asph = asphaltTextures(aniso);
    asph.map.repeat.set(20, 20); asph.bump.repeat.set(20, 20);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40),
      new THREE.MeshStandardMaterial({ map: asph.map, bumpMap: asph.bump, bumpScale: 1.6, roughness: 0.96 }));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    // стерта біла розмітка позаду дошки
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.11, 40),
      new THREE.MeshStandardMaterial({ color: 0xcfcbbd, roughness: 1, transparent: true, opacity: 0.55 }));
    line.rotation.x = -Math.PI / 2; line.rotation.z = 0.12; line.position.set(-0.75, 0.002, -0.4);
    line.receiveShadow = true;
    scene.add(line);

    const root = new THREE.Group();
    scene.add(root);
    R = { renderer, scene, cam, root, model: null, canvas, aniso, last: performance.now() };
    setModel(buildBoard(aniso));

    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      cam.aspect = w / h;
      const portrait = w / h < 0.8;
      cam.fov = portrait ? 42 : 30;
      if (portrait) cam.position.set(1.02, 0.36, 1.86); else cam.position.set(1.3, 0.32, 1.55);
      cam.lookAt(0, 0.22, 0);
      cam.updateProjectionMatrix();
    };
    window.addEventListener('resize', resize);
    resize();

    bus.on('takeoff', () => {
      // живий «поп»: дошка підстрибує одразу, а точний повтор покажемо після приземлення
      if (!replay && phys.y <= contactHeight() + 0.01) phys.vy = 2.0;
    });
    tryLoadModel();
    requestAnimationFrame(frame);
    return true;
  } catch (e) {
    console.error(e);
    bus.emit('scene-failed');
    return false;
  }
}

function setModel(obj) {
  if (R.model) R.root.remove(R.model);
  R.root.position.set(0, 0, 0); R.root.quaternion.identity(); R.root.updateMatrixWorld(true);
  R.model = obj; R.root.add(obj);
  obj.updateMatrixWorld(true);
  // точки для зіткнення з підлогою: вершини моделі (до ~1500 штук)
  const inv = new THREE.Matrix4().copy(R.root.matrixWorld).invert();
  let total = 0; obj.traverse(m => { if (m.isMesh) total += m.geometry.attributes.position.count; });
  const stride = Math.max(1, Math.floor(total / 1500));
  contact = [];
  obj.traverse(m => {
    if (!m.isMesh) return;
    const p = m.geometry.attributes.position;
    for (let i = 0; i < p.count; i += stride) contact.push(new THREE.Vector3().fromBufferAttribute(p, i).applyMatrix4(m.matrixWorld).applyMatrix4(inv));
  });
  phys.restY = -Math.min(...contact.map(v => v.y));
  phys.y = phys.restY; phys.vy = 0;
}

// Своя модель: файл models/board.glb у репозиторії (ніс уздовж +X, верх — +Y).
// Необов'язковий models/board.json: {"rotateY": 90} — якщо модель дивиться не туди.
async function tryLoadModel() {
  try {
    const res = await fetch('models/board.glb', { cache: 'no-cache' });
    if (!res.ok) return;
    const buf = await res.arrayBuffer();
    let cfg = {};
    try { const r2 = await fetch('models/board.json', { cache: 'no-cache' }); if (r2.ok) cfg = await r2.json(); } catch {}
    const { GLTFLoader } = await import('../vendor/GLTFLoader.js');
    const gltf = await new Promise((ok, err) => new GLTFLoader().parse(buf, './models/', ok, err));
    const obj = gltf.scene;
    obj.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    const wrap = new THREE.Group(); wrap.add(obj);
    obj.rotation.y = (cfg.rotateY || 0) * Math.PI / 180;
    let box = new THREE.Box3().setFromObject(wrap);
    const size = box.getSize(new THREE.Vector3());
    obj.scale.multiplyScalar(0.8 / Math.max(size.x, size.z, 1e-6));        // довжина дошки ≈ 80 см
    box = new THREE.Box3().setFromObject(wrap);
    const c = box.getCenter(new THREE.Vector3());
    obj.position.sub(new THREE.Vector3(c.x, box.min.y + DECK_Y, c.z));     // центр деки на початку координат
    setModel(wrap);
    log('Завантажено свою модель дошки');
  } catch (e) { log('models/board.glb не відкрилась: ' + (e.message || e)); }
}

function contactHeight() {
  let minY = Infinity;
  for (const p of contact) { tmp.copy(p).applyQuaternion(R.root.quaternion); if (tmp.y < minY) minY = tmp.y; }
  return -minY;
}

export function startReplay(trick, frames, fs) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  replay = { frames, fs, T: trick.air, t0: performance.now() + 120, speed: reduce ? 1 : 0.5 };
}
export const isReplaying = () => !!replay;

function frame(now) {
  const dt = Math.min(0.05, (now - R.last) / 1000); R.last = now;
  let qb = st.q, lift = null;
  if (replay) {
    if (now < replay.t0) { qb = [1, 0, 0, 0]; lift = 0; }
    else {
      const el = (now - replay.t0) / 1000 * replay.speed;
      if (el <= replay.T) { qb = replay.frames[Math.min(replay.frames.length - 1, Math.floor(el * replay.fs))]; lift = 0.5 * G * el * (replay.T - el); }
      else if (el <= replay.T + 0.45) { qb = replay.frames[replay.frames.length - 1]; lift = 0; }
      else { replay = null; }
    }
  }
  qThree.set(qb[1], qb[3], -qb[2], qb[0]);          // осі дошки (x, y, z-вгору) → осі сцени (x, y-вгору, z)
  R.root.quaternion.copy(qThree);
  const floor = contactHeight();                     // нижче цього центр дошки опуститись не може
  if (lift != null) {
    phys.y = Math.max(phys.restY + lift, floor); phys.vy = 0;
  } else {
    phys.vy -= G * dt; phys.y += phys.vy * dt;
    if (phys.y < floor) {
      phys.y = floor;
      phys.vy = phys.vy < -0.7 ? -phys.vy * 0.22 : 0;  // невеликий відскок від асфальту
    }
  }
  R.root.position.y = phys.y;
  R.renderer.render(R.scene, R.cam);
  bus.emit('frame', now);
  requestAnimationFrame(frame);
}

export const sceneDebug = () => ({ y: phys.y, floor: R ? contactHeight() : null, contact: contact.length, restY: phys.restY });
