// Перегляд повтору з таймлайном: відтворення, покадровий крок, перемотування пальцем, швидкість.
import { $, S, saveSettings, bus } from './util.js';
import { t, num, trickName } from './i18n.js';
import { nameOf } from './session.js';
import { buildTrack, hasReplay } from './replay.js';
import { playTrack, stopReplay, getReplay, rp, setOrbitMode } from './scene.js';

const PLAY = 'M8 5v14l11-7z', PAUSE = 'M6 5h4v14H6zM14 5h4v14h-4z', PAD = 10;
let view = null;            // { id, trick, tr }
let hintTimer = null, lastDrawn = null, scrub = null;

export const viewerOpen = () => !!view;
export const viewingId = () => (view ? view.id : null);

export function openViewer(trick) {
  if (!hasReplay(trick)) return false;
  let tr;
  try { tr = buildTrack(trick.snip); } catch (e) { console.error(e); return false; }
  view = { id: trick.id, trick, tr };
  const panel = $('rp');
  panel.hidden = false;
  document.body.classList.add('viewing');
  $('rpName').textContent = trickName(nameOf(trick));
  playTrack(tr, { mode: 'view', from: 0, to: tr.dur, t: 0, speed: S.rpSpeed || 0.5, play: true, delay: 0.35 });
  setOrbitMode(true, Math.round(panel.offsetHeight * 0.5));
  const hint = $('rpHint');
  hint.classList.remove('fade');
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => hint.classList.add('fade'), 3500);
  lastDrawn = null;
  update(getReplay());
  bus.emit('viewer', true);
  return true;
}

export function closeViewer() {
  if (!view) return;
  view = null;
  $('rp').hidden = true;
  document.body.classList.remove('viewing');
  stopReplay();
  setOrbitMode(false);
  bus.emit('viewer', false);
}

const signed = v => (v > 0.0005 ? '+' : v < -0.0005 ? '−' : '') + num(Math.abs(v), 2);
function timecode(s) {
  const m = Math.floor(s / 60), r = s - m * 60;
  return `${m}:${r.toFixed(2).padStart(5, '0')}`;
}

function update(r) {
  if (!view || !r || r.mode !== 'view') return;
  const tr = view.tr, f = Math.max(0, Math.min(tr.n - 1, Math.round(r.t * tr.fs)));
  const key = `${r.t.toFixed(4)}|${r.playing}|${r.speed}`;
  if (key === lastDrawn) return;
  lastDrawn = key;
  $('rpTc').textContent = timecode(r.t);
  $('rpFrame').textContent = t('rp.frame', { i: f + 1, n: tr.n });
  $('rpRel').textContent = t('rp.fromPop', { s: signed((f - tr.pop) / tr.fs) });
  $('rpH').textContent = `${num(tr.h[f] * 100)} ${t('unit.cm')}`;
  $('rpRoll').textContent = `${num(tr.roll[f])}°`;
  $('rpYaw').textContent = `${num(tr.yaw[f])}°`;
  $('rpPlayIcon').setAttribute('d', r.playing ? PAUSE : PLAY);
  $('rpPlay').setAttribute('aria-label', t(r.playing ? 'rp.pause' : 'rp.play'));
  for (const b of $('rpSpeed').children) b.classList.toggle('on', +b.dataset.sp === r.speed);
  const c = $('rpTrack');
  c.setAttribute('aria-valuemin', 1); c.setAttribute('aria-valuemax', tr.n); c.setAttribute('aria-valuenow', f + 1);
  c.setAttribute('aria-valuetext', t('rp.frame', { i: f + 1, n: tr.n }));
  draw(r);
}

function draw(r) {
  const c = $('rpTrack'), tr = view.tr, n = tr.n;
  const dpr = Math.min(3, window.devicePixelRatio || 1), W = c.clientWidth, H = c.clientHeight;
  if (!W || !H) return;
  if (c.width !== Math.round(W * dpr) || c.height !== Math.round(H * dpr)) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
  const g = c.getContext('2d');
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.clearRect(0, 0, W, H);
  const x = i => PAD + (W - 2 * PAD) * i / Math.max(1, n - 1);
  const top = 17, bot = H - 4, cur = r.t * tr.fs;

  g.fillStyle = 'rgba(255,255,255,0.09)';
  roundRect(g, 0, top, W, bot - top, 6); g.fill();
  // відрізок у повітрі
  const xp = x(tr.pop), xl = x(tr.land);
  g.fillStyle = 'rgba(243,195,22,0.26)'; g.fillRect(xp, top, xl - xp, bot - top);
  g.fillStyle = '#F3C316'; g.fillRect(xp, bot - 4, xl - xp, 4);
  // кадри: кожен кадр — риска, кожен п'ятий — довша
  const step = Math.max(1, Math.ceil(n / ((W - 2 * PAD) / 4)));
  for (let i = 0; i < n; i += step) {
    const major = (i / step) % 5 === 0, past = i <= cur;
    g.fillStyle = past ? (major ? '#fff' : 'rgba(255,255,255,0.78)') : (major ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.26)');
    const hh = major ? 17 : 9;
    g.fillRect(Math.round(x(i)) - 0.5, bot - 7 - hh, 1, hh);
  }
  // позначки попу й приземлення
  g.fillStyle = '#F3C316';
  g.fillRect(Math.round(xp) - 1, top, 2, bot - top); g.fillRect(Math.round(xl) - 1, top, 2, bot - top);
  g.font = '800 11px "Fira Sans Extra Condensed", "Arial Narrow", sans-serif';
  g.textBaseline = 'alphabetic';
  g.textAlign = xp < 22 ? 'left' : 'center'; g.fillText('POP', xp < 22 ? Math.max(0, xp - 2) : xp, 11);
  g.textAlign = xl > W - 24 ? 'right' : 'center'; g.fillText('LAND', xl > W - 24 ? Math.min(W, xl + 2) : xl, 11);
  // курсор
  const px = x(cur);
  g.fillStyle = '#fff';
  g.fillRect(px - 1, top - 3, 2, bot - top + 3);
  g.beginPath(); g.moveTo(px - 6, top - 7); g.lineTo(px + 6, top - 7); g.lineTo(px, top + 1); g.closePath(); g.fill();
}

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y); g.lineTo(x + w - r, y); g.quadraticCurveTo(x + w, y, x + w, y + r);
  g.lineTo(x + w, y + h - r); g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  g.lineTo(x + r, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r);
  g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y); g.closePath();
}

function seekAt(clientX) {
  if (!view) return;
  const c = $('rpTrack'), rect = c.getBoundingClientRect(), tr = view.tr;
  const frac = Math.max(0, Math.min(1, (clientX - rect.left - PAD) / Math.max(1, rect.width - 2 * PAD)));
  rp.seek(frac * (tr.n - 1) / tr.fs);
}

export function wireViewer() {
  $('rpClose').onclick = closeViewer;
  $('rpPlay').onclick = () => rp.toggle();
  $('rpBack').onclick = () => rp.step(-1);
  $('rpFwd').onclick = () => rp.step(1);
  $('rpStart').onclick = () => rp.seek(0);
  $('rpEnd').onclick = () => { const r = getReplay(); if (r) rp.seek(r.to); };
  $('rpSpeed').addEventListener('click', e => {
    const b = e.target.closest('[data-sp]'); if (!b) return;
    S.rpSpeed = +b.dataset.sp; saveSettings(); rp.speed(S.rpSpeed);
  });
  const c = $('rpTrack');
  c.addEventListener('pointerdown', e => { scrub = e.pointerId; try { c.setPointerCapture(e.pointerId); } catch {} seekAt(e.clientX); });
  c.addEventListener('pointermove', e => { if (scrub === e.pointerId) seekAt(e.clientX); });
  const end = () => { scrub = null; };
  c.addEventListener('pointerup', end); c.addEventListener('pointercancel', end);
  c.addEventListener('keydown', e => {
    const r = getReplay(); if (!r) return;
    if (e.key === 'Home') { rp.seek(0); e.preventDefault(); }
    if (e.key === 'End') { rp.seek(r.to); e.preventDefault(); }
  });
  document.addEventListener('keydown', e => {
    if (!view || $('sheet').classList.contains('open')) return;
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'SELECT' || tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key === 'Escape') closeViewer();
    else if (e.key === ' ' && tag !== 'BUTTON') { e.preventDefault(); rp.toggle(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); rp.step(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); rp.step(1); }
  });
  bus.on('replay-time', update);
  bus.on('replay-state', r => { lastDrawn = null; update(r); });
  bus.on('lang', () => {
    if (!view) return;
    $('rpName').textContent = trickName(nameOf(view.trick));
    lastDrawn = null; update(getReplay());
  });
  window.addEventListener('resize', () => {
    if (!view) return;
    setOrbitMode(true, Math.round($('rp').offsetHeight * 0.5));
    lastDrawn = null; update(getReplay());
  });
}
