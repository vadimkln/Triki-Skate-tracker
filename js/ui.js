// Усе, що бачить користувач: підпис трюку на 3D, останній трюк, список, статистика, налаштування.
import { $, esc, S, saveSettings, bus, log, logLines } from './util.js';
import { session, liveTricks, nameOf, landedOf, editTrick, summarize, history, archiveSession, isDemoSession } from './session.js';
import { TRICK_NAMES } from './tricks.js';
import { st, hz, collectStill } from './sensor.js';
import { buildMount, V } from './math.js';
import { t, num, fmtTime, fmtDate, trickName, flagText, reasonText, setLang, lang } from './i18n.js';
import { hasReplay } from './replay.js';
import { canFindSaved, isSearching, knownFailed } from './ble.js';
import { CAL_TRICKS, cal, countOf, startRec, stopRec, deleteLast, clearAll, apply as applyCal, resetCal, exportJson } from './calib.js';
import { openViewer, viewerOpen, viewingId } from './viewer.js';

// ---------- підпис трюку поверх 3D (у дусі Skate, але тихо) ----------
const stack = [];
let fadeTimer = null;
// tag: рядок (калібрування) або { text, cls } (очки в грі)
const tagText = c => (typeof c.tag === 'string' ? c.tag : c.tag ? c.tag.text : t(c.ok ? 'cl.ok' : 'cl.bail'));
const tagCls = c => (typeof c.tag === 'string' ? 'cal' : c.tag ? c.tag.cls : c.ok ? 'ok' : 'bail');
export function callout(tr, tag) {
  stack.unshift({ name: trickName(nameOf(tr)), ok: landedOf(tr), tag });
  stack.length = Math.min(stack.length, 3);
  const el = $('callout');
  el.classList.remove('fade');
  el.innerHTML = stack.map((c, age) =>
    `<div class="cl cl${age}${age === 0 ? ' enter' : ''}"><span class="cn">${esc(c.name)}</span>` +
    (age === 0 ? `<span class="ct ${tagCls(c)}">${esc(tagText(c))}</span>` : '') + '</div>'
  ).reverse().join('');
  clearTimeout(fadeTimer);
  fadeTimer = setTimeout(() => el.classList.add('fade'), 7000);
}

export function clearCallout() { stack.length = 0; $('callout').innerHTML = ''; }

// ---------- статус підключення ----------
let conn = { state: 'off', key: 'idle', p: {} };
export function setConn(state, key, p = {}) { conn = { state, key: key || 'idle', p }; renderConn(); }
const connLabel = () => (conn.key === 'device'
  ? conn.p.name + (conn.p.battery != null ? ` ${conn.p.battery}%` : '')
  : t('conn.' + conn.key, conn.p));

export function renderConn() {
  const txt = connLabel(), dev = S.device;
  $('connText').textContent = txt;
  $('dot').className = 'dot' + (conn.state === 'on' ? ' on' : conn.state === 'wait' ? ' wait' : '');
  let info;
  if (conn.state === 'on') info = t('conn.info.on', { name: txt });
  else if (conn.state === 'wait') info = txt;
  else if (dev) info = (conn.key === 'notFound' ? txt + '. ' : '') + t(canFindSaved() && !knownFailed() ? 'conn.info.saved' : 'conn.info.savedManual', { name: dev.name });
  else info = t('conn.info.first');
  $('connInfo').textContent = info;
  $('cta').hidden = !!st.source;
  $('bDemoHero').textContent = t(S.mode === 'game' ? 'game.demo' : 'cta.demo');
  const demo = st.source === 'demo';
  $('bDemoExit').hidden = !demo;
  $('bDemo').textContent = t(demo ? 'b.demoExit' : 'b.demo');
  $('bDemo').classList.toggle('on', demo);
  $('bDisconnect').disabled = !st.source && !isSearching();
  $('bForget').hidden = !dev;
  $('bConnect').textContent = dev ? t('cta.connectSaved', { name: dev.name }) : t('cta.connect');
  $('ctaHint').textContent = dev ? t('cta.hintSaved', { name: dev.name }) : t('cta.hintFirst');
}

let bannerKey = null;
export function banner(key) {
  bannerKey = key || null;
  const b = $('banner');
  b.innerHTML = key ? t('banner.' + key) : '';
  b.hidden = !key;
}

let lastSpeed = null;
export function showSpeed(v) {
  lastSpeed = v;
  const el = $('speed');
  if (v == null) { el.hidden = true; return; }
  el.hidden = false; el.innerHTML = `${num(v)}<small>${t('unit.kmh')}</small>`;
}

// ---------- секції під 3D ----------
let openRow = null;

function renderLast() {
  const ts = liveTricks(), el = $('last');
  if (!ts.length) { el.innerHTML = `<p class="empty">${esc(t('last.empty'))}</p>`; return; }
  const tr = ts[ts.length - 1], ok = landedOf(tr);
  const reason = !ok && tr.reason && tr.landedOverride == null ? ': ' + reasonText(tr.reason) : '';
  el.innerHTML = `
    <div class="last-head"><div class="last-name">${esc(trickName(nameOf(tr)))}</div><div class="last-h">${num(tr.height)}<small>${t('unit.cm')}</small></div></div>
    <span class="verdict ${ok ? '' : 'fail'}">${esc(ok ? t('last.landed') : t('last.bailed') + reason)}</span>
    <dl class="facts">
      <dt>${t('last.air')}</dt><dd>${num(tr.air * 1000)} ${t('unit.ms')}</dd>
      <dt>${t('last.flip')}</dt><dd>${num(tr.roll)}°</dd>
      <dt>${t('last.spin')}</dt><dd>${num(tr.yaw)}°</dd>
      <dt>${t('last.peak')}</dt><dd>${num(tr.peakSpin)} ${t('unit.dps')}</dd>
      <dt>${t('last.impact')}</dt><dd>${num(tr.landG, 1)} g</dd>
    </dl>
    ${tr.flags && tr.flags.length ? `<p class="note">${esc(tr.flags.map(flagText).join('; '))}.</p>` : ''}
    ${!S.mount && !S.trickCal && !isDemoSession() ? `<p class="note">${esc(t('last.noMount'))}</p>` : ''}
    ${hasReplay(tr) ? `<button class="btn small last-replay" data-replay="${tr.id}"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4v16l13-8z"/></svg>${esc(t('last.replay'))}</button>` : ''}`;
}

const PENCIL = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>';

function renderList() {
  const ts = liveTricks().slice().reverse(), ul = $('list'), playing = viewingId();
  $('listEmpty').hidden = ts.length > 0;
  ul.innerHTML = ts.slice(0, 60).map(tr => {
    const ok = landedOf(tr), open = openRow === tr.id, name = nameOf(tr);
    return `<li class="${playing === tr.id ? 'playing' : ''}"><div class="row-w">
        <button class="row" data-act="replay" data-id="${tr.id}">
          <span class="t">${fmtTime(tr.time)}</span><span class="n">${esc(trickName(name))}</span>
          <span class="v">${num(tr.height)} ${t('unit.cm')}</span>
          <span class="r ${ok ? '' : 'fail'}" aria-label="${esc(ok ? t('last.landed') : t('last.bailed'))}">${ok ? '✓' : '✕'}</span></button>
        <button class="row-ed" data-act="edit" data-id="${tr.id}" aria-expanded="${open}" aria-label="${esc(t('row.edit'))}">${PENCIL}</button></div>
      ${open ? `<div class="edit">
        ${hasReplay(tr) ? '' : `<p class="note">${esc(t('edit.noReplay'))}</p>`}
        <div class="seg"><button class="btn small ${ok ? 'on' : ''}" data-act="ok" data-id="${tr.id}">${esc(t('edit.landed'))}</button>
                         <button class="btn small ${ok ? '' : 'on'}" data-act="fail" data-id="${tr.id}">${esc(t('edit.bailed'))}</button></div>
        <label>${esc(t('edit.actually'))} <select data-act="label" data-id="${tr.id}">
          ${TRICK_NAMES.map(n => `<option value="${esc(n)}" ${n === name || (n === 'Other' && name === 'Інше') ? 'selected' : ''}>${esc(trickName(n))}</option>`).join('')}</select></label>
        <div class="seg"><button class="btn small" data-act="del" data-id="${tr.id}">${esc(t('edit.delete'))}</button></div>
      </div>` : ''}</li>`;
  }).join('');
}

function renderStats() {
  const s = summarize(), ts = liveTricks(), has = s.attempts > 0;
  const row = (k, v, u = '') => `<dt>${t(k)}</dt><dd>${v}${u ? `<small>${u}</small>` : ''}</dd>`;
  let h = row('st.attempts', s.attempts) + row('st.rate', has ? s.rate : '—', has ? '%' : '') +
    row('st.maxH', has ? num(s.maxH) : '—', has ? t('unit.cm') : '') +
    row('st.avgH', has ? num(s.avgH) : '—', has ? t('unit.cm') : '') +
    row('st.maxAir', has ? num(s.maxAir * 1000) : '—', has ? t('unit.ms') : '') +
    row('st.maxSpin', has ? num(s.maxSpin) : '—', has ? t('unit.dps') : '') +
    row('st.duration', s.minutes, t('unit.min'));
  if (S.gps || s.gpsMax) {
    h += row('st.topSpeed', s.gpsMax ? num(s.gpsMax, 1) : '—', s.gpsMax ? t('unit.kmh') : '') +
         row('st.avgSpeed', s.gpsAvg ? num(s.gpsAvg, 1) : '—', s.gpsAvg ? t('unit.kmh') : '') +
         row('st.dist', s.dist ? num(s.dist / 1000, 2) : '—', s.dist ? t('unit.km') : '');
  }
  $('stats').innerHTML = h;
  const by = {};
  for (const tr of ts) { const n = trickName(nameOf(tr)); by[n] = by[n] || { a: 0, o: 0 }; by[n].a++; if (landedOf(tr)) by[n].o++; }
  $('bytrick').innerHTML = Object.entries(by).sort((a, b) => b[1].a - a[1].a).map(([n, v]) =>
    `<div class="bt-row"><span>${esc(n)}</span><span>${t('bt.of', { o: v.o, a: v.a })}</span><div class="bar"><i style="width:${Math.round(100 * v.o / v.a)}%"></i></div></div>`).join('');
  const hist = history();
  $('historyBox').hidden = !hist.length;
  $('historySum').textContent = t('stats.history', { n: hist.length });
  $('history').innerHTML = hist.map(x => `<li><span>${esc(t('hist.item', { date: fmtDate(x.start), time: fmtTime(x.start), n: x.attempts, rate: x.rate }))}</span><span>${num(x.maxH)} ${t('unit.cm')}</span></li>`).join('');
}

export function renderAll() { $('demoNote').hidden = !isDemoSession(); renderLast(); renderList(); renderStats(); }

function showReplay(id) {
  const tr = session.tricks.find(x => x.id === id);
  if (!tr) return;
  if (!hasReplay(tr)) { openRow = id; renderList(); return; }
  closeSheet();
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  openViewer(tr);
}

function wireList() {
  $('list').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const id = b.dataset.id, act = b.dataset.act;
    if (act === 'replay') { showReplay(id); return; }
    if (act === 'edit') { openRow = openRow === id ? null : id; renderList(); return; }
    if (act === 'ok') editTrick(id, { landedOverride: true });
    if (act === 'fail') editTrick(id, { landedOverride: false });
    if (act === 'del') { openRow = null; editTrick(id, { deleted: true }); }
  });
  $('list').addEventListener('change', e => {
    const s = e.target; if (s.dataset.act !== 'label') return;
    const tr = session.tricks.find(x => x.id === s.dataset.id); if (!tr) return;
    editTrick(tr.id, { label: s.value === tr.name ? undefined : s.value });
  });
  $('last').addEventListener('click', e => { const b = e.target.closest('[data-replay]'); if (b) showReplay(b.dataset.replay); });
  const nb = $('bNewSession');
  nb.onclick = () => {
    if (liveTricks().length && !nb.dataset.armed) {
      nb.dataset.armed = '1'; nb.textContent = t('stats.newConfirm');
      setTimeout(() => { delete nb.dataset.armed; nb.textContent = t('stats.new'); }, 4000);
      return;
    }
    delete nb.dataset.armed; nb.textContent = t('stats.new');
    openRow = null; archiveSession();
  };
}

// ---------- налаштування ----------
// Закрита шторка повністю прибрана зі сторінки (hidden), інакше її видно, якщо догортати донизу
let sheetTimer = null;
export function openSheet() {
  const sh = $('sheet');
  clearTimeout(sheetTimer);
  sh.hidden = false;
  void sh.offsetHeight;                       // спершу показати, потім запустити виїзд
  sh.classList.add('open'); $('sheetBg').classList.add('open');
  renderDiag(); renderCal();
}
export function closeSheet() {
  const sh = $('sheet');
  if (sh.hidden) return;
  sh.classList.remove('open'); $('sheetBg').classList.remove('open');
  clearTimeout(sheetTimer);
  sheetTimer = setTimeout(() => { if (!sh.classList.contains('open')) sh.hidden = true; }, 280);
}

function renderDiag() {
  $('diag').innerHTML = `${t('diag.rate')}: ${st.source ? num(hz(), 1) + ' ' + t('unit.hz') : '—'}<br>${t('diag.samples')}: ${st.n}<br>` +
    `${t('diag.packets')}: ${Object.entries(st.pktSizes).map(([k, v]) => `${k} ${t('diag.bytes')} (${v})`).join(', ') || '—'}<br>` +
    `${t('diag.calib')}: ${st.calibInfo ? '1 g = ' + st.calibInfo.lsb : t('diag.calibNo')}`;
}

// майстер положення Triki на дошці
let wiz = null, mountMsg = null;
function renderMount() { $('mountInfo').textContent = t(mountMsg || (S.mount ? 'mount.done' : 'mount.intro')); }
function wizardStart() {
  if (st.source !== 'ble') { mountMsg = 'mount.needConn'; renderMount(); return; }
  wiz = { step: 0, g: [] };
  $('wizText').textContent = t('wiz.1');
  $('wizard').hidden = false;
}
async function wizardNext() {
  if (!wiz) return;
  const btn = $('bWizNext'), step = () => t(wiz.step ? 'wiz.2' : 'wiz.1');
  btn.disabled = true; $('wizText').textContent = t('wiz.hold');
  const s = await collectStill(1500);
  btn.disabled = false;
  if (!wiz) return;
  if (!s) { $('wizText').textContent = t('wiz.noData'); return; }
  if (s.gyroSd > 4) { $('wizText').textContent = t('wiz.moved') + ' ' + step(); return; }
  wiz.g.push(s.acc);
  if (wiz.step === 0) { st.bias = s.bias; wiz.step = 1; $('wizText').textContent = t('wiz.2'); return; }
  const tilt = Math.acos(Math.min(1, V.dot(V.norm(wiz.g[0]), V.norm(wiz.g[1])))) * 180 / Math.PI;
  if (tilt < 8) { wiz.g.pop(); $('wizText').textContent = t('wiz.tilt', { deg: num(tilt) }); return; }
  S.mount = buildMount(wiz.g[0], wiz.g[1]); st.autoMount = null; saveSettings();
  st.q = [1, 0, 0, 0]; wiz = null; $('wizard').hidden = true;
  mountMsg = null; renderMount();
  log(t('log.mount'));
  renderAll();
}

// калібрування трюків
let calMsg = null;
function renderCal() {
  $('calList').innerHTML = CAL_TRICKS.map(n => {
    const rec = cal.target === n;
    return `<li class="cal-row ${rec ? 'rec' : ''}"><span class="cal-n">${esc(n)}</span><span class="cal-c">${esc(t('cal.count', { n: countOf(n) }))}</span>` +
      `<button class="btn small ${rec ? 'on' : ''}" data-cal="${esc(n)}">${esc(t(rec ? 'cal.stop' : 'cal.rec'))}</button></li>`;
  }).join('');
  let msg = cal.target ? t('cal.recording', { trick: cal.target, n: countOf(cal.target) })
    : calMsg ? calMsg.map(m => t(m.k, m.p)).join(' ') : (S.trickCal ? t('cal.status', { date: fmtDate(S.trickCal.at) + ' ' + fmtTime(S.trickCal.at) }) : t('cal.statusNo'));
  if (st.source === 'demo') msg += ' ' + t('cal.demo');
  $('calStatus').textContent = msg;
  $('bCalReset').hidden = !S.trickCal;
  $('bCalDel').disabled = !cal.samples.length;
  $('calBar').hidden = !cal.target;
  if (cal.target) $('calBarText').textContent = t('cal.bar', { trick: cal.target, n: countOf(cal.target) });
}

function wireCal() {
  $('calList').addEventListener('click', e => {
    const b = e.target.closest('[data-cal]'); if (!b) return;
    const n = b.dataset.cal;
    calMsg = null;
    if (cal.target === n) { stopRec(); return; }
    startRec(n);
    closeSheet();
  });
  $('calBarStop').onclick = () => stopRec();
  $('bCalDel').onclick = () => { calMsg = null; deleteLast(); };
  $('bCalApply').onclick = () => { stopRec(); const r = applyCal(); calMsg = r.msg; renderCal(); renderAll(); };
  $('bCalReset').onclick = () => { calMsg = null; resetCal(); renderAll(); };
  $('bCalExport').onclick = () => saveText(`triki_calibration_${stamp()}.json`, exportJson(), 'application/json');
  const cb = $('bCalClear');
  cb.onclick = () => {
    if (!cb.dataset.armed) {
      cb.dataset.armed = '1'; cb.textContent = t('cal.clearConfirm');
      setTimeout(() => { delete cb.dataset.armed; cb.textContent = t('cal.clear'); }, 4000);
      return;
    }
    delete cb.dataset.armed; cb.textContent = t('cal.clear');
    calMsg = null; clearAll();
  };
  bus.on('cal', renderCal);
}

export async function saveText(name, text, mime) {
  if (globalThis.TRIKI_ARTIFACT) { showExport(name, text); return; }   // у прев'ю файли не зберігаються — лише текст
  try {
    const f = new File([text], name, { type: mime });
    if (navigator.canShare && navigator.canShare({ files: [f] })) { await navigator.share({ files: [f], title: name }); return; }
  } catch (e) { if (e.name === 'AbortError') return; }
  try {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: mime })); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  } catch {}
  showExport(name, text);
}
function showExport(name, text) {
  $('exportBox').hidden = false;
  $('exportName').textContent = t('export.note', { name });
  $('exportText').value = text;
  // експорт калібрування натискають у іншій групі — показуємо, де з'явився текст
  $('exportBox').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
const stamp = () => { const d = new Date(), p = v => String(v).padStart(2, '0'); return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`; };

export function toggleRec() {
  const b = $('bRec');
  if (!st.rec) {
    if (!st.source) return;
    st.rec = { t0: performance.now(), rows: [] };
    b.textContent = t('b.recStop'); b.classList.add('on'); log(t('log.recStart'));
    return;
  }
  const r = st.rec; st.rec = null;
  b.textContent = t('b.rec'); b.classList.remove('on');
  if (r.rows.length) saveText(`triki_${stamp()}.csv`, 't_sec,ax,ay,az,gx,gy,gz\n' + r.rows.map(x => x.join(',')).join('\n'), 'text/csv');
}

// перемальовує все, що залежить від мови
export function renderLang() {
  for (const o of $('freq').options) o.textContent = `${o.value} ${t('unit.hz')}`;
  $('lang').value = lang;
  $('bRec').textContent = t(st.rec ? 'b.recStop' : 'b.rec');
  renderConn(); renderMount(); renderCal(); renderAll(); renderDiag();
  if (bannerKey) banner(bannerKey);
  showSpeed(lastSpeed);
}

export function wireSettings(actions) {
  $('bSettings').onclick = openSheet;
  $('bClose').onclick = closeSheet;
  $('sheetBg').onclick = closeSheet;
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('sheet').classList.contains('open')) closeSheet(); });
  $('bConnect').onclick = () => actions.connect(false);
  $('bConnect2').onclick = () => { closeSheet(); actions.connect(false); };
  $('bConnectAll').onclick = () => { closeSheet(); actions.connect(true); };
  $('bForget').onclick = actions.forget;
  $('bDisconnect').onclick = actions.disconnect;
  $('bDemo').onclick = () => { closeSheet(); if (st.source === 'demo') actions.stopDemo(); else actions.demo(); };
  $('bDemoHero').onclick = actions.demo;
  $('bDemoExit').onclick = actions.stopDemo;
  $('bWizard').onclick = wizardStart;
  $('bWizNext').onclick = wizardNext;
  $('bWizCancel').onclick = () => { wiz = null; $('wizard').hidden = true; };
  $('bMountReset').onclick = () => { S.mount = null; saveSettings(); mountMsg = 'mount.resetDone'; renderMount(); renderAll(); };
  $('bCalib').onclick = actions.calibrate;
  $('bRec').onclick = toggleRec;
  $('bExport').onclick = () => saveText(`triki_session_${stamp()}.json`, JSON.stringify({
    app: 'triki-skate', version: 3, exported: new Date().toISOString(),
    settings: { mount: S.mount, stance: S.stance, freq: S.freq, accScale: S.accScale, gyroScale: S.gyroScale, trickCal: S.trickCal },
    device: S.device && S.device.name, bias: st.bias, session,
  }), 'application/json');
  $('bCopy').onclick = async () => { try { await navigator.clipboard.writeText($('exportText').value); log(t('log.copied')); } catch { $('exportText').select(); } };
  $('bExportHide').onclick = () => { $('exportBox').hidden = true; };
  $('bShareLog').onclick = () => saveText('triki_log.txt', logLines.join('\n'), 'text/plain');

  $('freq').value = String(S.freq); $('keepalive').checked = S.keepalive; $('autoRe').checked = S.autoRe;
  $('beep').checked = S.beep; $('gps').checked = S.gps; $('stance').value = S.stance; $('autoConnect').checked = S.autoConnect;
  $('lang').onchange = e => setLang(e.target.value);
  $('freq').onchange = e => { S.freq = +e.target.value; saveSettings(); actions.restartStream(); };
  $('keepalive').onchange = e => { S.keepalive = e.target.checked; saveSettings(); };
  $('autoRe').onchange = e => { S.autoRe = e.target.checked; saveSettings(); };
  $('autoConnect').onchange = e => { S.autoConnect = e.target.checked; saveSettings(); };
  $('beep').onchange = e => { S.beep = e.target.checked; saveSettings(); };
  $('stance').onchange = e => { S.stance = e.target.value; saveSettings(); };
  $('gps').onchange = e => { S.gps = e.target.checked; saveSettings(); actions.gps(S.gps); renderStats(); };

  setInterval(() => { if ($('sheet').classList.contains('open')) renderDiag(); }, 1000);
  bus.on('log', line => {
    const d = document.createElement('div'); d.textContent = line;
    const L = $('log'); L.prepend(d); while (L.childNodes.length > 300) L.lastChild.remove();
  });
  bus.on('viewer', () => renderList());
  wireList();
  wireCal();
}

// «У повітрі» — поки дошка у вільному падінні
export function updateAir(now, replaying) {
  $('air').classList.toggle('show', !!(st.airSince && now - st.airSince > 60 && !replaying && !viewerOpen()));
}
