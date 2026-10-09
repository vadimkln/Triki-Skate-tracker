// Точка входу: з'єднує модулі між собою.
import { $, S, bus, log } from './util.js';
import { st, startCalib } from './sensor.js';
import { detect } from './tricks.js';
import { addTrick, landedOf, nameOf } from './session.js';
import { connect, disconnect, restartStream, bluetoothAvailable } from './ble.js';
import { startDemo, stopDemo } from './demo.js';
import { setGps } from './gps.js';
import { initScene, startReplay, isReplaying, sceneDebug } from './scene.js';
import * as ui from './ui.js';

let audio = null;
function beep(ok) {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator(), g = audio.createGain(), t = audio.currentTime;
    o.type = 'triangle'; o.frequency.value = ok ? 660 : 220;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.25, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g).connect(audio.destination); o.start(); o.stop(t + 0.35);
  } catch {}
}

bus.on('conn', ui.setConn);
bus.on('banner', ui.banner);
bus.on('speed', ui.showSpeed);
bus.on('session', ui.renderAll);
bus.on('scene-failed', () => ui.banner('scene'));
bus.on('stop-sources', () => { stopDemo(); if (st.rec) ui.toggleRec(); });
bus.on('frame', now => ui.updateAir(now, isReplaying()));
bus.on('trick', (t, frames, fs) => {
  addTrick(t);
  startReplay(t, frames, fs);
  ui.callout(t);
  if (S.beep) beep(landedOf(t));
  log(`Трюк: ${nameOf(t)}, ${Math.round(t.height)} см, ${landedOf(t) ? 'приземлено' : 'невдало'}`);
});

ui.wireSettings({
  connect,
  disconnect: () => (st.source === 'demo' ? stopDemo() : disconnect()),
  demo: startDemo,
  calibrate: () => startCalib(false),
  restartStream,
  gps: setGps,
});

if (!bluetoothAvailable()) ui.banner('nobt');
ui.setConn('off', 'Не підключено');
initScene($('scene'));
ui.renderAll();
if (S.gps) setGps(true);
setInterval(detect, 150);

// для налагодження з консолі
window.triki = { st, S, sceneDebug };
