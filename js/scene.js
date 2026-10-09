// 3D-сцена: асфальт, дошка, проста фізика (гравітація + тверда підлога) і повтор трюку.
import * as THREE from '../vendor/three.module.min.js';
import { buildBoard, DECK_Y } from './board.js';
import { asphaltTextures } from './textures.js';
import { sampleTrack } from './replay.js';
import { st } from './sensor.js';
import { bus, log, S } from './util.js';
import { t } from './i18n.js';

const G = 9.81;
let R = null;                       // renderer, scene, camera, root…
let replay = null;                  // поточний повтор трюку
const orbit = { on: false, az: 0, el: 0, shift: 0, drag: null };  // камера в режимі перегляду повтору
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
      R.w = w; R.h = h;
      placeCamera();
    };
    R.resize = resize;
    window.addEventListener('resize', resize);
    resize();

    canvas.addEventListener('pointerdown', e => {
      if (!orbit.on) return;
      orbit.drag = { x: e.clientX, y: e.clientY, az: orbit.az, el: orbit.el };
      try { canvas.setPointerCapture(e.pointerId); } catch {}
    });
    canvas.addEventListener('pointermove', e => {
      if (!orbit.on || !orbit.drag) return;
      orbit.az = orbit.drag.az - (e.clientX - orbit.drag.x) * 0.009;
      orbit.el = orbit.drag.el + (e.clientY - orbit.drag.y) * 0.006;
      placeCamera();
    });
    const endDrag = () => { orbit.drag = null; };
    canvas.addEventListener('pointerup', endDrag);
    canvas.addEventListener('pointercancel', endDrag);

    bus.on('takeoff', () => {
      // живий «поп»: дошка підстрибує одразу, а точний повтор покажемо після приземлення
      if (!replay && S.mode !== 'game' && phys.y <= contactHeight() + 0.01) phys.vy = 2.0;
    });
    if (!globalThis.TRIKI_ARTIFACT) tryLoadModel();
    requestAnimationFrame(frame);
    return true;
  } catch (e) {
    console.error(e);
    bus.emit('scene-failed');
    return false;
  }
}

// Камера: звичайне положення залежить від орієнтації екрана; у повторі її можна обертати пальцем
const TARGET = new THREE.Vector3(0, 0.22, 0);
function placeCamera() {
  if (!R || !R.w) return;
  const { cam, w, h } = R, portrait = w / h < 0.8;
  cam.aspect = w / h;
  cam.fov = portrait ? 42 : 30;
  const base = portrait ? new THREE.Vector3(1.02, 0.36, 1.86) : new THREE.Vector3(1.3, 0.32, 1.55);
  const v = base.sub(TARGET), r = v.length();
  const az = Math.atan2(v.x, v.z) + orbit.az;
  const el = Math.max(0.03, Math.min(1.25, Math.asin(v.y / r) + orbit.el));
  orbit.el = el - Math.asin(v.y / r);
  cam.position.set(TARGET.x + r * Math.sin(az) * Math.cos(el), TARGET.y + r * Math.sin(el), TARGET.z + r * Math.cos(az) * Math.cos(el));
  cam.lookAt(TARGET);
  if (orbit.shift) cam.setViewOffset(w, h, 0, orbit.shift, w, h); else cam.clearViewOffset();
  cam.updateProjectionMatrix();
}

// Режим перегляду повтору: камера обертається пальцем, картинка зсунута вгору над панеллю
export function setOrbitMode(on, shiftPx = 0) {
  orbit.on = on; orbit.shift = on ? shiftPx : 0; orbit.drag = null;
  if (!on) { orbit.az = 0; orbit.el = 0; }
  if (R) { R.canvas.style.touchAction = on ? 'none' : ''; placeCamera(); }
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
    log(t('log.model'));
  } catch (e) { log(t('log.modelFail', { e: e.message || e })); }
}

function contactHeight() {
  let minY = Infinity;
  for (const p of contact) { tmp.copy(p).applyQuaternion(R.root.quaternion); if (tmp.y < minY) minY = tmp.y; }
  return -minY;
}

// Повтор: mode 'auto' — коротко після трюку й назад до живої картинки; 'view' — перегляд з таймлайном
export function playTrack(tr, o = {}) {
  const from = o.from != null ? o.from : 0;
  replay = { tr, from, to: o.to != null ? o.to : tr.dur, t: o.t != null ? o.t : from, speed: o.speed || 0.5,
             playing: o.play !== false, mode: o.mode || 'auto', delay: o.delay || 0, hold: 0.45 };
  bus.emit('replay', replay);
}
export const getReplay = () => replay;
export const isReplaying = () => !!replay;
export function stopReplay() { replay = null; bus.emit('replay', null); }
export const rp = {
  play() {
    if (!replay) return;
    if (replay.t >= replay.to - 1e-6) replay.t = replay.from;
    replay.playing = true; replay.delay = 0; bus.emit('replay-state', replay);
  },
  pause() { if (replay) { replay.playing = false; bus.emit('replay-state', replay); } },
  toggle() { if (replay) (replay.playing ? rp.pause() : rp.play()); },
  seek(time) { if (!replay) return; replay.t = Math.max(replay.from, Math.min(replay.to, time)); replay.playing = false; bus.emit('replay-state', replay); },
  step(d) {
    if (!replay) return;
    const fs = replay.tr.fs, f = Math.round(replay.t * fs) + d;
    rp.seek(f / fs);
  },
  speed(v) { if (replay) { replay.speed = v; bus.emit('replay-state', replay); } },
};

function frame(now) {
  const dt = Math.min(0.05, (now - R.last) / 1000); R.last = now;
  // у грі дошка стоїть, поки не покаже розпізнаний трюк
  let qb = S.mode === 'game' ? [1, 0, 0, 0] : st.q, lift = null;
  if (replay) {
    const r = replay;
    if (r.playing) {
      if (r.delay > 0) r.delay -= dt;
      else {
        r.t += dt * r.speed;
        if (r.t >= r.to) { r.t = r.to; if (r.mode === 'view') { r.playing = false; bus.emit('replay-state', r); } }
      }
    }
    if (r.mode === 'auto' && r.t >= r.to) { r.hold -= dt; if (r.hold <= 0) { replay = null; bus.emit('replay', null); } }
    if (replay) {
      const smp = sampleTrack(r.tr, r.t);
      qb = smp.q; lift = smp.h;
      bus.emit('replay-time', r);
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
