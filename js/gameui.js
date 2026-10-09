// Екран гри: рахунок і комбо, завдання S.K.A.T.E., підказка, рівень-бульбашка, список трюків, правила.
import { $, esc, S, bus } from './util.js';
import { t, num, fmtTime, trickName } from './i18n.js';
import { st } from './sensor.js';
import { g, level, restart, setGameMode, bubble, popRing, liveAir, SKATE } from './game.js';

let lastStatus = '', lastBub = '', lastScore = null, flashUntil = 0, statusMsg = null;

export function renderHud() {
  const p = g.play;
  const score = num(p.score);
  if (score !== lastScore) { $('hudScore').textContent = score; lastScore = score; }
  const combo = $('hudCombo');
  const mult = Math.min(4, 1 + 0.5 * (p.streak - 1));
  combo.hidden = !(p.streak > 1 && Date.now() - p.lastLand < 6000);
  if (!combo.hidden) combo.textContent = '×' + num(mult, mult % 1 ? 1 : 0);
  $('hudSkate').hidden = p.mode !== 'skate';
  if (p.mode === 'skate') {
    $('hudTarget').textContent = p.over ? '—' : trickName(p.target || '');
    [...$('hudLetters').children].forEach((el, i) => el.classList.toggle('got', i < p.letters));
  }
  renderStatus();
}

function statusText() {
  if (!st.source) return { text: t('hud.connect'), cls: '' };
  if (g.play.over) return { text: t('hud.over', { n: g.play.hits }), cls: 'bad' };
  if (statusMsg && Date.now() < statusMsg.until) return statusMsg;
  switch (g.phase) {
    case 'level': return { text: t('hud.level'), cls: '' };
    case 'air': { const a = liveAir(); return { text: t('hud.air', { r: num(a ? a.roll : 0), y: num(a ? a.yaw : 0) }), cls: 'inair' }; }
    case 'cool': return { text: t('hud.reset'), cls: '' };
    case 'ready': return { text: t('hud.ready'), cls: '' };
    default: return { text: '', cls: '' };
  }
}
function renderStatus() {
  const s = statusText(), key = s.text + '|' + s.cls;
  if (key === lastStatus) return;
  lastStatus = key;
  const el = $('hudStatus');
  el.textContent = s.text;
  el.className = 'hud-status' + (s.cls ? ' ' + s.cls : '');
}

// бульбашка рівня — кожен кадр
export function updateLive() {
  if (S.mode !== 'game') return;
  const ring = $('hudRing'), b = bubble(), R = 37;
  const rr = Math.round(popRing() * R * 2);
  if (ring.dataset.size !== String(rr)) { ring.style.width = ring.style.height = rr + 'px'; ring.dataset.size = rr; }
  ring.classList.toggle('pop', g.phase === 'air' || Date.now() < flashUntil);
  let x = 0, y = 0;
  if (b && st.source) {
    const len = Math.hypot(b[0], b[1]), k = len > 1 ? 1 / len : 1;
    x = Math.round(b[0] * k * R); y = Math.round(-b[1] * k * R);
  }
  const key = x + ',' + y;
  if (key !== lastBub) { $('hudBubble').style.transform = `translate(${x}px, ${y}px)`; lastBub = key; }
  if (g.phase === 'air' || statusMsg) renderStatus();
  else if (!lastStatus) renderStatus();
}

export function renderGameMain() {
  const p = g.play;
  for (const b of $('gameModes').children) b.classList.toggle('on', b.dataset.gm === p.mode);
  $('gameModeNote').textContent = t(p.mode === 'skate' ? 'game.skateNote' : 'game.freeNote');
  const row = (k, v) => `<dt>${t(k)}</dt><dd>${v}</dd>`;
  $('gameStats').innerHTML = row('game.score', num(p.score)) + row('game.best', num(S.gameBest || 0)) +
    row('game.landed', p.landed) + row('game.attempts', p.attempts) + row('game.bestCombo', Math.max(p.bestCombo, 0));
  $('gameListEmpty').hidden = p.list.length > 0;
  $('gameList').innerHTML = p.list.map(r => {
    const tags = [];
    if (r.target && !r.hit) tags.push(t('game.miss') + (r.letter ? ' · ' + t('game.letter', { l: r.letter }) : ''));
    if (r.target && r.hit) tags.push(t('game.hit'));
    if (!r.ok && r.reason === 'timeout') tags.push(t('hud.timeout'));
    if (r.sloppy && r.ok) tags.push(t('game.sloppy'));
    if (r.repeat) tags.push(t('game.repeat'));
    if (r.mult > 1 && r.points) tags.push('×' + num(r.mult, r.mult % 1 ? 1 : 0));
    return `<li><div class="row grow"><span class="t">${fmtTime(r.time)}</span>` +
      `<span class="n">${esc(trickName(r.name))}${tags.length ? `<span class="tg">${esc(tags.join(' · '))}</span>` : ''}</span>` +
      `<span class="v">${r.points ? '+' + num(r.points) : '—'}</span>` +
      `<span class="r ${r.ok ? '' : 'fail'}">${r.ok ? '✓' : '✕'}</span></div></li>`;
  }).join('');
}

export function renderGame() { renderHud(); renderGameMain(); }

// показати результат трюку: короткий напис і спалах кільця
export function onGameTrick(r) {
  flashUntil = Date.now() + 500;
  if (!r.ok) statusMsg = { text: t(r.reason === 'timeout' ? 'hud.timeout' : 'hud.flipped'), cls: 'bad', until: Date.now() + 1800 };
  else statusMsg = null;
  const combo = $('hudCombo');
  combo.classList.remove('bump'); void combo.offsetWidth; combo.classList.add('bump');
  lastStatus = '';
}

export function wireGame() {
  $('gameModes').addEventListener('click', e => { const b = e.target.closest('[data-gm]'); if (b) setGameMode(b.dataset.gm); });
  $('bLevel').onclick = () => { statusMsg = null; level(); };
  $('bGameRestart').onclick = () => { statusMsg = null; restart(); };
  $('howBox').open = !(S.gameBest > 0);
  bus.on('game', () => { lastStatus = ''; renderGame(); });
  bus.on('lang', () => { lastStatus = ''; lastScore = null; renderGame(); });
  bus.on('conn', () => { lastStatus = ''; renderHud(); });
}

export { SKATE };
