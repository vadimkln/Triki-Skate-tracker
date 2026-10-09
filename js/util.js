// Спільні дрібниці: DOM, події, журнал, збереження налаштувань.

export const $ = id => document.getElementById(id);
export const sleep = ms => new Promise(r => setTimeout(r, ms));
export const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Проста шина подій, щоб модулі не залежали один від одного напряму
const handlers = {};
export const bus = {
  on(name, fn) { (handlers[name] = handlers[name] || []).push(fn); },
  emit(name, ...args) {
    for (const fn of handlers[name] || []) {
      try { fn(...args); } catch (e) { console.error(name, e); }
    }
  },
};

export const logLines = [];
export function log(msg) {
  const d = new Date(), z = v => String(v).padStart(2, '0');
  const line = `${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}  ${msg}`;
  logLines.push(line);
  if (logLines.length > 500) logLines.shift();
  bus.emit('log', line);
}

// localStorage може бути недоступним (приватний режим) — тоді просто нічого не зберігаємо
export const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem('triki.' + key); return v == null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem('triki.' + key, JSON.stringify(value)); return true; }
    catch { return false; }
  },
};

export const S = Object.assign({
  accScale: 2048,      // ±16 g — перевірено на реальному Triki
  gyroScale: 16.4,     // ±2000 °/с
  stance: 'regular',
  freq: 104,           // таку частоту просить і Żappka
  keepalive: false,
  autoRe: true,
  beep: true,
  gps: false,
  mount: null,         // як Triki закріплений на дошці (майстер у налаштуваннях)
  lang: null,          // null — за мовою телефона
  device: null,        // збережений Triki: { id, name }
  autoConnect: true,   // підключатись до збереженого Triki при відкритті сайту
  trickCal: null,      // калібрування трюків: осі фліпа й shuvit у координатах Triki
  mode: 'tracker',     // 'tracker' — датчик на дошці, 'game' — гра з Triki в руці
  gameMode: 'free',    // 'free' або 'skate'
  gameBest: 0, gameBestCombo: 0,
  rpSpeed: 0.5,
}, store.get('settings', {}));

export function saveSettings() { store.set('settings', S); }
