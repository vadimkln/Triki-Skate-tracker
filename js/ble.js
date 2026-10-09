// Підключення до Triki через Web Bluetooth (Bluefy на iPhone, Chrome/Edge на ПК).
// Перший раз відкривається список усіх пристроїв (фільтр за назвою в Bluefy дає порожній список):
// людина вибирає «Triki …», сайт запам'ятовує його id і назву. Далі, якщо браузер уміє getDevices(),
// сайт знаходить цей Triki сам і підключається без списку.
import { S, saveSettings, log, bus, sleep } from './util.js';
import { st, onNotify, resetLive, startCalib } from './sensor.js';
import { t } from './i18n.js';

const NUS = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const RX = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
const TX = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';
const LEDU = '6e400004-b5a3-f393-e0a9-e50e24dcca9e';
const SLEEP = [0x20, 0, 0, 0, 0, 0, 0];

const ble = {
  device: null, rx: null, led: null, battery: null, want: false, reconnecting: false, ka: null, q: Promise.resolve(),
  search: null,        // фоновий пошук збереженого Triki (AbortController)
  knownFailed: false,  // збережений не знайшовся — наступне натискання відкриває список
};
export const bleInfo = () => ({ name: ble.device && (ble.device.name || 'Triki'), battery: ble.battery });
export const bluetoothAvailable = () => !!navigator.bluetooth;
export const canFindSaved = () => !!(navigator.bluetooth && navigator.bluetooth.getDevices);
export const isSearching = () => !!ble.search;
export const knownFailed = () => ble.knownFailed;

// Команда старту: діапазони ±16 g / ±2000 °/с, частота (Гц), увімкнути обидва сенсори
const wakeBytes = () => [0x20, 0x10, 0x00, 0xD0, 0x07, S.freq & 255, (S.freq >> 8) & 255, 0x03];

// Браузер не дозволяє дві операції Bluetooth одночасно — ставимо в чергу
function gatt(fn) { const p = ble.q.then(fn); ble.q = p.catch(() => {}); return p; }

function withTimeout(promise, ms, onTimeout) {
  let timer;
  return Promise.race([promise, new Promise((_, rej) => { timer = setTimeout(() => { onTimeout && onTimeout(); rej(new Error('timeout')); }, ms); })])
    .finally(() => clearTimeout(timer));
}

async function writeRx(bytes, quiet) {
  if (!ble.rx) return;
  const data = new Uint8Array(bytes);
  return gatt(async () => {
    try {
      if (ble.rx.properties.writeWithoutResponse && ble.rx.writeValueWithoutResponse) await ble.rx.writeValueWithoutResponse(data);
      else if (ble.rx.writeValueWithResponse) await ble.rx.writeValueWithResponse(data);
      else await ble.rx.writeValue(data);
    } catch (e) { if (!quiet) log(t('log.cmdFail', { e: e.message })); }
  });
}

// Головна кнопка «Підключити». choose=true — одразу список усіх пристроїв.
export async function connect(choose) {
  if (globalThis.TRIKI_ARTIFACT) { bus.emit('banner', 'artifact'); return; }
  if (!navigator.bluetooth) { bus.emit('banner', 'nobt'); return; }
  const searching = !!ble.search;
  stopSearch();
  // збережений Triki, браузер уміє знаходити його сам, і фоновий пошук ще не провалився
  if (!choose && !searching && S.device && canFindSaved() && !ble.knownFailed) {
    bus.emit('stop-sources');
    bus.emit('conn', 'wait', 'searching', { name: S.device.name });
    try { await connectSaved(6000); return; }
    catch (e) {
      ble.knownFailed = true;
      log(t('log.knownFail', { e: e.message }));
      bus.emit('conn', 'off', 'notFound', { name: S.device.name });
      bus.emit('device');
      return;
    }
  }
  if (S.device && !canFindSaved() && !choose) log(t('log.noKnown'));
  await pick();
}

// Список усіх пристроїв (так у Bluefy Triki видно першим і з правильною назвою)
async function pick() {
  bus.emit('stop-sources');
  bus.emit('conn', 'wait', 'choosing');
  let dev;
  try {
    dev = await navigator.bluetooth.requestDevice({ acceptAllDevices: true, optionalServices: [NUS, 'battery_service'] });
  } catch (e) {
    st.source = null;
    bus.emit('conn', 'off', 'idle');
    if (e.name === 'SecurityError') bus.emit('banner', 'blocked');
    log(e.name === 'NotFoundError' ? t('log.cancel') : t('log.error', { e: e.message }));
    return;
  }
  try { await useDevice(dev, 15000); }
  catch (e) {
    if (e.notTriki) { bus.emit('conn', 'off', 'notTriki'); bus.emit('banner', 'nottriki'); log(t('log.notTriki', { name: dev.name || '?' })); }
    else { bus.emit('conn', 'off', 'failed'); log(t('log.error', { e: e.message })); }
  }
}

async function findSaved() {
  const list = await navigator.bluetooth.getDevices();
  const d = S.device;
  return list.find(x => x.id === d.id) || list.find(x => x.name && x.name === d.name) || null;
}

// Підключення до збереженого Triki без списку
async function connectSaved(ms, signal) {
  const dev = await findSaved();
  if (!dev) { const e = new Error('no permission'); e.final = true; throw e; }
  log(t('log.known', { name: dev.name || S.device.name }));
  // Якщо браузер уміє слухати рекламу — чекаємо, поки Triki з'явиться поруч; інакше просто пробуємо
  if (dev.watchAdvertisements) {
    const ac = new AbortController();
    const seen = new Promise((res, rej) => {
      dev.addEventListener('advertisementreceived', () => res(), { once: true });
      if (signal) signal.addEventListener('abort', () => rej(new Error('aborted')), { once: true });
    });
    let watching = true;
    try { await dev.watchAdvertisements({ signal: ac.signal }); } catch { watching = false; }
    if (watching) {
      try { await withTimeout(seen, ms); } finally { ac.abort(); }
    }
  }
  if (signal && signal.aborted) throw new Error('aborted');
  await useDevice(dev, ms);
}

async function useDevice(dev, ms) {
  if (ble.device && ble.device !== dev) ble.device.removeEventListener('gattserverdisconnected', onDisconnected);
  ble.device = dev;
  dev.removeEventListener('gattserverdisconnected', onDisconnected);
  dev.addEventListener('gattserverdisconnected', onDisconnected);
  bus.emit('stop-sources');
  st.source = 'ble';
  resetLive();
  try { await withTimeout(setup(), ms, () => { try { dev.gatt.disconnect(); } catch {} }); }
  catch (e) { try { dev.gatt.disconnect(); } catch {} st.source = null; throw e; }
  const name = dev.name || (S.device && S.device.name) || 'Triki';
  if (!S.device || S.device.id !== dev.id || S.device.name !== name) {
    S.device = { id: dev.id, name };
    saveSettings();
    log(t('log.saved', { name }));
  }
  ble.knownFailed = false;
  bus.emit('device');
  bus.emit('banner', null);
  ble.want = true;
  startCalib(true);
  bus.emit('source-started');
}

async function setup() {
  const dev = ble.device;
  bus.emit('conn', 'wait', 'connecting');
  const server = await dev.gatt.connect();
  let svc;
  try { svc = await server.getPrimaryService(NUS); }
  catch { const e = new Error('not Triki'); e.notTriki = true; throw e; }
  const tx = await svc.getCharacteristic(TX);
  tx.removeEventListener('characteristicvaluechanged', onNotify);
  tx.addEventListener('characteristicvaluechanged', onNotify);
  await tx.startNotifications();
  ble.rx = await svc.getCharacteristic(RX);
  try { ble.led = await svc.getCharacteristic(LEDU); } catch { ble.led = null; }
  try {
    const bs = await server.getPrimaryService('battery_service');
    ble.battery = (await (await bs.getCharacteristic('battery_level')).readValue()).getUint8(0);
  } catch { ble.battery = null; }
  st.connectedAt = performance.now(); st.arrivals = [];
  await writeRx(wakeBytes());
  bus.emit('conn', 'on', 'device', { name: dev.name || 'Triki', battery: ble.battery });
  log(t('log.connected', { name: dev.name || 'Triki' }));
  clearInterval(ble.ka);
  ble.ka = setInterval(() => { if (S.keepalive && dev.gatt.connected) writeRx(wakeBytes(), true); }, 1000);
}

// Фоновий пошук збереженого Triki після відкриття сайту (приблизно хвилину)
export async function autoConnect() {
  if (globalThis.TRIKI_ARTIFACT || !S.device || !S.autoConnect || !canFindSaved() || ble.search || st.source) return;
  const ac = new AbortController();
  ble.search = ac;
  bus.emit('conn', 'wait', 'searching', { name: S.device.name });
  bus.emit('device');
  let ok = false;
  for (let i = 0; i < 6 && !ac.signal.aborted && !st.source; i++) {
    try { await connectSaved(10000, ac.signal); ok = true; break; }
    catch (e) {
      if (ac.signal.aborted) break;
      if (e.final) { ble.knownFailed = true; log(t('log.knownFail', { e: e.message })); break; }
      await sleep(1000);
    }
  }
  const mine = ble.search === ac;
  if (mine) ble.search = null;
  if (mine && !ok && !st.source) { bus.emit('conn', 'off', 'idle'); }
  bus.emit('device');
}

export function stopSearch() {
  if (!ble.search) return;
  ble.search.abort(); ble.search = null;
  bus.emit('device');
}

function onDisconnected() {
  clearInterval(ble.ka);
  if (st.source !== 'ble') return;
  log(t('log.disconnected'));
  if (ble.want && S.autoRe) reconnectLoop();
  else { st.source = null; bus.emit('conn', 'off', 'disconnected'); }
}

async function reconnectLoop() {
  if (ble.reconnecting) return;
  ble.reconnecting = true;
  while (ble.want && ble.device && !ble.device.gatt.connected) {
    bus.emit('conn', 'wait', 'reconnecting');
    try { await withTimeout(setup(), 12000); break; } catch { await sleep(1000); }
  }
  ble.reconnecting = false;
}

export async function restartStream() {
  if (st.source !== 'ble') return;
  await writeRx(SLEEP); await sleep(150); await writeRx(wakeBytes());
  st.arrivals = []; st.connectedAt = performance.now();
}

export async function disconnect() {
  ble.want = false;
  stopSearch();
  clearInterval(ble.ka);
  if (st.source === 'ble' && ble.device && ble.device.gatt.connected) {
    await writeRx(SLEEP);
    st.source = null;
    ble.device.gatt.disconnect();
  }
  st.source = null;
  bus.emit('conn', 'off', 'idle');
}

// Забути збережений Triki: наступного разу знову відкриється список
export async function forget() {
  const saved = S.device;
  if (!saved) return;
  if (st.source === 'ble') await disconnect();
  S.device = null; saveSettings();
  ble.knownFailed = false;
  try {
    if (canFindSaved()) {
      const list = await navigator.bluetooth.getDevices();
      const dev = list.find(x => x.id === saved.id);
      if (dev && dev.forget) await dev.forget();
    }
  } catch {}
  log(t('log.forgot'));
  bus.emit('device');
  bus.emit('conn', 'off', 'idle');
}
