// Усе, що бачить користувач: підпис трюку на 3D, останній трюк, список, статистика, налаштування.
import { $, esc, S, saveSettings, bus, log, logLines } from './util.js';
import { session, liveTricks, nameOf, landedOf, editTrick, summarize, history, archiveSession } from './session.js';
import { TRICK_NAMES } from './tricks.js';
import { st, hz, collectStill } from './sensor.js';
import { buildMount, V } from './math.js';

const fmtTime = ms => new Date(ms).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', hour12: false });

// ---------- підпис трюку поверх 3D (у дусі Skate, але тихо) ----------
const stack = [];
let fadeTimer = null;
export function callout(t) {
  stack.unshift({ name: nameOf(t), ok: landedOf(t) });
  stack.length = Math.min(stack.length, 3);
  const el = $('callout');
  el.classList.remove('fade');
  el.innerHTML = stack.map((c, age) =>
    `<div class="cl cl${age}${age === 0 ? ' enter' : ''}"><span class="cn">${esc(c.name)}</span>` +
    (age === 0 ? `<span class="ct ${c.ok ? 'ok' : 'bail'}">${c.ok ? 'чисто' : 'впав'}</span>` : '') + '</div>'
  ).reverse().join('');
  clearTimeout(fadeTimer);
  fadeTimer = setTimeout(() => el.classList.add('fade'), 7000);
}

// ---------- статус підключення ----------
export function setConn(state, text) {
  $('connText').textContent = text;
  $('dot').className = 'dot' + (state === 'on' ? ' on' : state === 'wait' ? ' wait' : '');
  $('connInfo').textContent = state === 'on' ? `Підключено: ${text}.` : state === 'wait' ? text : 'Triki не підключений.';
  $('cta').hidden = !!st.source;
  $('bDisconnect').disabled = !st.source;
}

const BANNERS = {
  nobt: 'Цей браузер не вміє Bluetooth. На iPhone відкрий сторінку в браузері <b>Bluefy</b>, на комп\'ютері — у Chrome або Edge. Демо працює й тут.',
  nottriki: 'Вибраний пристрій — не Triki. Спробуй інший у списку.',
  scene: '3D не запустилось на цьому пристрої. Трюки й статистика працюють і без нього.',
};
export function banner(key) { const b = $('banner'); b.innerHTML = key ? BANNERS[key] || key : ''; b.hidden = !key; }

export function showSpeed(v) {
  const el = $('speed');
  if (v == null) { el.hidden = true; return; }
  el.hidden = false; el.innerHTML = `${v.toFixed(0)}<small>км/год</small>`;
}

// ---------- секції під 3D ----------
let openRow = null;

function renderLast() {
  const ts = liveTricks(), el = $('last');
  if (!ts.length) {
    el.innerHTML = '<p class="empty">Тут з\'явиться твій перший трюк: назва, висота, час у повітрі й чи вдалося приземлитись.</p>';
    return;
  }
  const t = ts[ts.length - 1], ok = landedOf(t);
  el.innerHTML = `
    <div class="last-head"><div class="last-name">${esc(nameOf(t))}</div><div class="last-h">${Math.round(t.height)}<small>см</small></div></div>
    <span class="verdict ${ok ? '' : 'fail'}">${ok ? 'Приземлено' : 'Невдало' + (t.reason && t.landedOverride == null ? ': ' + t.reason : '')}</span>
    <dl class="facts">
      <dt>Час у повітрі</dt><dd>${Math.round(t.air * 1000)} мс</dd>
      <dt>Фліп</dt><dd>${Math.round(t.roll)}°</dd>
      <dt>Розворот дошки</dt><dd>${Math.round(t.yaw)}°</dd>
      <dt>Найшвидше обертання</dt><dd>${Math.round(t.peakSpin)} °/с</dd>
      <dt>Удар при приземленні</dt><dd>${t.landG.toFixed(1)} g</dd>
    </dl>
    ${t.flags && t.flags.length ? `<p class="note">${esc(t.flags.join('; '))}.</p>` : ''}
    ${!S.mount ? '<p class="note">Положення Triki на дошці ще не налаштоване, тож назва трюку може бути неточною. Налаштуй його в налаштуваннях.</p>' : ''}`;
}

function renderList() {
  const ts = liveTricks().slice().reverse(), ul = $('list');
  $('listEmpty').hidden = ts.length > 0;
  ul.innerHTML = ts.slice(0, 60).map(t => {
    const ok = landedOf(t), open = openRow === t.id;
    return `<li><button class="row" data-id="${t.id}" aria-expanded="${open}">
        <span class="t">${fmtTime(t.time)}</span><span class="n">${esc(nameOf(t))}</span>
        <span class="v">${Math.round(t.height)} см</span>
        <span class="r ${ok ? '' : 'fail'}" aria-label="${ok ? 'приземлено' : 'невдало'}">${ok ? '✓' : '✕'}</span></button>
      ${open ? `<div class="edit">
        <div class="seg"><button class="btn small ${ok ? 'on' : ''}" data-act="ok" data-id="${t.id}">Приземлено</button>
                         <button class="btn small ${ok ? '' : 'on'}" data-act="fail" data-id="${t.id}">Невдало</button></div>
        <label>Насправді це був <select data-act="label" data-id="${t.id}">
          ${TRICK_NAMES.map(n => `<option ${n === nameOf(t) ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
        <div class="seg"><button class="btn small" data-act="del" data-id="${t.id}">Видалити: це був не трюк</button></div>
      </div>` : ''}</li>`;
  }).join('');
}

function renderStats() {
  const s = summarize(), ts = liveTricks(), has = s.attempts > 0;
  const row = (k, v, u = '') => `<dt>${k}</dt><dd>${v}${u ? `<small>${u}</small>` : ''}</dd>`;
  let h = row('Спроб', s.attempts) + row('Вдалих', has ? s.rate : '—', has ? '%' : '') +
    row('Найвищий стрибок', has ? Math.round(s.maxH) : '—', has ? 'см' : '') +
    row('Середня висота', has ? Math.round(s.avgH) : '—', has ? 'см' : '') +
    row('Найдовше в повітрі', has ? Math.round(s.maxAir * 1000) : '—', has ? 'мс' : '') +
    row('Найшвидше обертання', has ? Math.round(s.maxSpin) : '—', has ? '°/с' : '') +
    row('Тривалість', s.minutes, 'хв');
  if (S.gps || s.gpsMax) {
    h += row('Макс. швидкість', s.gpsMax ? s.gpsMax.toFixed(1) : '—', s.gpsMax ? 'км/год' : '') +
         row('Середня швидкість', s.gpsAvg ? s.gpsAvg.toFixed(1) : '—', s.gpsAvg ? 'км/год' : '') +
         row('Проїхано', s.dist ? (s.dist / 1000).toFixed(2) : '—', s.dist ? 'км' : '');
  }
  $('stats').innerHTML = h;
  const by = {};
  for (const t of ts) { const n = nameOf(t); by[n] = by[n] || { a: 0, o: 0 }; by[n].a++; if (landedOf(t)) by[n].o++; }
  $('bytrick').innerHTML = Object.entries(by).sort((a, b) => b[1].a - a[1].a).map(([n, v]) =>
    `<div class="bt-row"><span>${esc(n)}</span><span>${v.o} з ${v.a}</span><div class="bar"><i style="width:${Math.round(100 * v.o / v.a)}%"></i></div></div>`).join('');
  const hist = history();
  $('historyBox').hidden = !hist.length;
  $('historySum').textContent = `Попередні сесії (${hist.length})`;
  $('history').innerHTML = hist.map(x => `<li><span>${new Date(x.start).toLocaleDateString('uk-UA')} ${fmtTime(x.start)}, ${x.attempts} спроб, ${x.rate}% вдалих</span><span>${Math.round(x.maxH)} см</span></li>`).join('');
}

export function renderAll() { renderLast(); renderList(); renderStats(); }

function wireList() {
  $('list').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const id = b.dataset.id;
    if (b.classList.contains('row')) { openRow = openRow === id ? null : id; renderList(); return; }
    if (b.dataset.act === 'ok') editTrick(id, { landedOverride: true });
    if (b.dataset.act === 'fail') editTrick(id, { landedOverride: false });
    if (b.dataset.act === 'del') { openRow = null; editTrick(id, { deleted: true }); }
  });
  $('list').addEventListener('change', e => {
    const s = e.target; if (s.dataset.act !== 'label') return;
    const t = session.tricks.find(x => x.id === s.dataset.id); if (!t) return;
    editTrick(t.id, { label: s.value === t.name ? undefined : s.value });
  });
  const nb = $('bNewSession');
  nb.onclick = () => {
    if (liveTricks().length && !nb.dataset.armed) {
      nb.dataset.armed = '1'; nb.textContent = 'Натисни ще раз: поточна сесія піде в історію';
      setTimeout(() => { delete nb.dataset.armed; nb.textContent = 'Почати нову сесію'; }, 4000);
      return;
    }
    delete nb.dataset.armed; nb.textContent = 'Почати нову сесію';
    openRow = null; archiveSession();
  };
}

// ---------- налаштування ----------
export function openSheet() { $('sheet').classList.add('open'); $('sheetBg').classList.add('open'); renderDiag(); }
export function closeSheet() { $('sheet').classList.remove('open'); $('sheetBg').classList.remove('open'); }

function renderDiag() {
  $('diag').innerHTML = `Частота даних: ${st.source ? hz().toFixed(1) + ' Гц' : '—'}<br>Вимірів: ${st.n}<br>` +
    `Розміри пакетів: ${Object.entries(st.pktSizes).map(([k, v]) => `${k} Б (${v})`).join(', ') || '—'}<br>` +
    `Калібрування: ${st.calibInfo ? '1 g = ' + st.calibInfo.lsb : 'ще ні'}`;
}

const WIZ = [
  'Крок 1 з 2. Постав дошку колесами на рівну підлогу й не чіпай її. Потім натисни «Готово».',
  'Крок 2 з 2. Підніми ніс дошки (задні колеса на підлозі) і тримай нерухомо. Потім натисни «Готово».',
];
let wiz = null;
function wizardStart() {
  if (st.source !== 'ble') { $('mountInfo').textContent = 'Спершу підключи Triki, потім налаштуй положення.'; return; }
  wiz = { step: 0, g: [] };
  $('wizText').textContent = WIZ[0];
  $('wizard').hidden = false;
}
async function wizardNext() {
  if (!wiz) return;
  const btn = $('bWizNext');
  btn.disabled = true; $('wizText').textContent = 'Не рухай дошку…';
  const s = await collectStill(1500);
  btn.disabled = false;
  if (!s) { $('wizText').textContent = 'Даних не прийшло. Перевір підключення і натисни «Готово» ще раз.'; return; }
  if (s.gyroSd > 4) { $('wizText').textContent = 'Дошка рухалась. ' + WIZ[wiz.step]; return; }
  wiz.g.push(s.acc);
  if (wiz.step === 0) { st.bias = s.bias; wiz.step = 1; $('wizText').textContent = WIZ[1]; return; }
  const tilt = Math.acos(Math.min(1, V.dot(V.norm(wiz.g[0]), V.norm(wiz.g[1])))) * 180 / Math.PI;
  if (tilt < 8) { wiz.g.pop(); $('wizText').textContent = `Ніс піднято лише на ${tilt.toFixed(0)}°. Підніми вище й натисни «Готово».`; return; }
  S.mount = buildMount(wiz.g[0], wiz.g[1]); st.autoMount = null; saveSettings();
  st.q = [1, 0, 0, 0]; wiz = null; $('wizard').hidden = true;
  $('mountInfo').textContent = 'Положення налаштовано. Якщо перекладеш Triki на дошці, налаштуй ще раз.';
  log('Положення Triki на дошці збережено');
  renderAll();
}

export async function saveText(name, text, mime) {
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
  $('exportBox').hidden = false;
  $('exportName').textContent = `${name}: якщо файл не зберігся, скопіюй текст і встав у нотатки чи месенджер.`;
  $('exportText').value = text;
}
const stamp = () => { const d = new Date(), p = v => String(v).padStart(2, '0'); return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`; };

export function toggleRec() {
  const b = $('bRec');
  if (!st.rec) {
    if (!st.source) return;
    st.rec = { t0: performance.now(), rows: [] };
    b.textContent = 'Зупинити запис'; b.classList.add('on'); log('Запис сирих даних почато');
    return;
  }
  const r = st.rec; st.rec = null;
  b.textContent = 'Записати сирі дані'; b.classList.remove('on');
  if (r.rows.length) saveText(`triki_${stamp()}.csv`, 't_sec,ax,ay,az,gx,gy,gz\n' + r.rows.map(x => x.join(',')).join('\n'), 'text/csv');
}

export function wireSettings(actions) {
  $('bSettings').onclick = openSheet;
  $('bClose').onclick = closeSheet;
  $('sheetBg').onclick = closeSheet;
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });
  $('bConnect').onclick = () => actions.connect(false);
  $('bConnect2').onclick = () => { closeSheet(); actions.connect(false); };
  $('bConnectAll').onclick = () => { closeSheet(); actions.connect(true); };
  $('bDisconnect').onclick = actions.disconnect;
  $('bDemo').onclick = () => { closeSheet(); actions.demo(); };
  $('bDemoHero').onclick = actions.demo;
  $('bWizard').onclick = wizardStart;
  $('bWizNext').onclick = wizardNext;
  $('bWizCancel').onclick = () => { wiz = null; $('wizard').hidden = true; };
  $('bMountReset').onclick = () => { S.mount = null; saveSettings(); $('mountInfo').textContent = 'Положення скинуто. Налаштуй його, коли закріпиш Triki на дошці.'; renderAll(); };
  $('bCalib').onclick = actions.calibrate;
  $('bRec').onclick = toggleRec;
  $('bExport').onclick = () => saveText(`triki_session_${stamp()}.json`, JSON.stringify({
    app: 'triki-skate', version: 2, exported: new Date().toISOString(),
    settings: { mount: S.mount, stance: S.stance, freq: S.freq, accScale: S.accScale, gyroScale: S.gyroScale },
    bias: st.bias, session,
  }), 'application/json');
  $('bCopy').onclick = async () => { try { await navigator.clipboard.writeText($('exportText').value); log('Скопійовано'); } catch { $('exportText').select(); } };
  $('bExportHide').onclick = () => { $('exportBox').hidden = true; };
  $('bShareLog').onclick = () => saveText('triki_log.txt', logLines.join('\n'), 'text/plain');

  $('freq').value = String(S.freq); $('keepalive').checked = S.keepalive; $('autoRe').checked = S.autoRe;
  $('beep').checked = S.beep; $('gps').checked = S.gps; $('stance').value = S.stance;
  $('freq').onchange = e => { S.freq = +e.target.value; saveSettings(); actions.restartStream(); };
  $('keepalive').onchange = e => { S.keepalive = e.target.checked; saveSettings(); };
  $('autoRe').onchange = e => { S.autoRe = e.target.checked; saveSettings(); };
  $('beep').onchange = e => { S.beep = e.target.checked; saveSettings(); };
  $('stance').onchange = e => { S.stance = e.target.value; saveSettings(); };
  $('gps').onchange = e => { S.gps = e.target.checked; saveSettings(); actions.gps(S.gps); renderStats(); };
  if (S.mount) $('mountInfo').textContent = 'Положення налаштовано. Якщо перекладеш Triki на дошці, налаштуй ще раз.';

  setInterval(() => { if ($('sheet').classList.contains('open')) renderDiag(); }, 1000);
  bus.on('log', line => {
    const d = document.createElement('div'); d.textContent = line;
    const L = $('log'); L.prepend(d); while (L.childNodes.length > 300) L.lastChild.remove();
  });
  wireList();
}

// «У повітрі» — поки дошка у вільному падінні
export function updateAir(now, replaying) {
  $('air').classList.toggle('show', !!(st.airSince && now - st.airSince > 60 && !replaying));
}
