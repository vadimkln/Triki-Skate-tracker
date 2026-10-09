// Точка входу: з'єднує модулі між собою.
import { $, S, saveSettings, bus, log } from './util.js';
import { t, num, applyStatic } from './i18n.js';
import { st, startCalib } from './sensor.js';
import { detect } from './tricks.js';
import { addTrick, landedOf, nameOf } from './session.js';
import { connect, disconnect, forget, restartStream, bluetoothAvailable, autoConnect, stopSearch } from './ble.js';
import { startDemo, stopDemo, synthSnip } from './demo.js';
import { startGame, stopGame, level as levelGame, g as gameState } from './game.js';
import * as gui from './gameui.js';
import { setGps } from './gps.js';
import { initScene, playTrack, isReplaying, stopReplay, sceneDebug } from './scene.js';
import { buildTrack, hasReplay } from './replay.js';
import { cal, addSample, stopRec } from './calib.js';
import { wireViewer, viewerOpen, closeViewer } from './viewer.js';
import * as ui from './ui.js';

let audio = null;
function beep(ok) {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator(), g = audio.createGain(), tm = audio.currentTime;
    o.type = 'triangle'; o.frequency.value = ok ? 660 : 220;
    g.gain.setValueAtTime(0.0001, tm); g.gain.exponentialRampToValueAtTime(0.25, tm + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, tm + 0.3);
    o.connect(g).connect(audio.destination); o.start(); o.stop(tm + 0.35);
  } catch {}
}

// короткий повтор одразу після трюку (поки не відкритий перегляд з таймлайном)
function autoReplay(tr) {
  if (viewerOpen() || !hasReplay(tr)) return;
  try {
    const track = buildTrack(tr.snip), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    playTrack(track, { mode: 'auto', from: Math.max(0, track.pop / track.fs - 0.25), to: Math.min(track.dur, track.land / track.fs + 0.3),
                       speed: reduce ? 1 : 0.5, delay: 0.1 });
  } catch (e) { console.error(e); }
}

bus.on('conn', ui.setConn);
bus.on('device', ui.renderConn);
bus.on('banner', ui.banner);
bus.on('speed', ui.showSpeed);
bus.on('session', ui.renderAll);
bus.on('lang', ui.renderLang);
bus.on('scene-failed', () => ui.banner('scene'));
bus.on('stop-sources', () => { stopDemo(); if (st.rec) ui.toggleRec(); });
bus.on('source-started', () => { ui.renderConn(); if (S.mode === 'game') levelGame(); });
bus.on('frame', now => { ui.updateAir(now, isReplaying()); gui.updateLive(); });
bus.on('demo-stopped', () => { closeViewer(); stopReplay(); ui.clearCallout(); ui.renderConn(); });
bus.on('trick', tr => {
  if (S.mode === 'game') return;
  const calN = cal.target ? addSample(tr) : 0;
  if (!calN) addTrick(tr);
  autoReplay(tr);
  ui.callout(tr, calN ? t('cl.cal', { n: calN }) : null);
  if (S.beep) beep(landedOf(tr));
  log(t('log.trick', { name: nameOf(tr), h: Math.round(tr.height), res: t(landedOf(tr) ? 'last.landed' : 'last.bailed') }));
});

// Гра: розпізнаний жест → анімація трюку на дошці, підпис з очками, звук
bus.on('game-trick', r => {
  gui.onGameTrick(r);
  if (r.reason !== 'timeout') {
    try {
      const tr = buildTrack(synthSnip(r.name, !r.ok)), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      playTrack(tr, { mode: 'auto', from: Math.max(0, tr.pop / tr.fs - 0.2), to: tr.dur, speed: reduce ? 1 : 0.6, delay: 0.05 });
    } catch (e) { console.error(e); }
  }
  const multTxt = r.mult > 1 ? ' ×' + num(r.mult, r.mult % 1 ? 1 : 0) : '';
  const tag = r.ok ? (r.points ? { text: '+' + num(r.points) + multTxt, cls: 'pts' } : { text: t('game.miss'), cls: 'cal' }) : null;
  ui.callout({ name: r.name, landed: r.ok }, tag);
  if (S.beep) beep(r.ok && (r.points > 0));
});

// Перемикач режимів: трекер дошки ↔ гра з Triki в руці
function setMode(m) {
  m = m === 'game' ? 'game' : 'tracker';
  const changed = S.mode !== m;
  S.mode = m; saveSettings();
  if (changed && st.source === 'demo') stopDemo();
  closeViewer(); stopReplay(); ui.clearCallout();
  if (m === 'game' && cal.target) stopRec();
  document.body.classList.toggle('game', m === 'game');
  $('trackerMain').hidden = m === 'game';
  $('gameMain').hidden = m !== 'game';
  $('hud').hidden = m !== 'game';
  for (const b of $('modes').children) { const on = b.dataset.mode === m; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); }
  if (m === 'game') startGame(); else stopGame();
  ui.renderConn(); gui.renderGame();
  if (changed) log(t('log.mode', { m: t('mode.' + m) }));
}
$('modes').addEventListener('click', e => { const b = e.target.closest('[data-mode]'); if (b) setMode(b.dataset.mode); });

applyStatic();
ui.wireSettings({
  connect,
  forget,
  disconnect: () => (st.source === 'demo' ? stopDemo() : disconnect()),
  demo: () => { stopSearch(); startDemo(S.mode === 'game' ? 'game' : 'tracker'); },
  stopDemo,
  calibrate: () => startCalib(false),
  restartStream,
  gps: setGps,
});
wireViewer();
gui.wireGame();

if (!bluetoothAvailable() && !globalThis.TRIKI_ARTIFACT) ui.banner('nobt');
ui.setConn('off', 'idle');
initScene($('scene'));
ui.renderLang();
if (S.gps) setGps(true);
setInterval(() => { if (S.mode !== 'game') detect(); }, 150);
setMode(S.mode);
setTimeout(autoConnect, 400);

// для налагодження з консолі
window.triki = { st, S, sceneDebug, game: gameState };
