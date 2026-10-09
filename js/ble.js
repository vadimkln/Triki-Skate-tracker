// Підключення до Triki через Web Bluetooth (Bluefy на iPhone, Chrome/Edge на ПК).
import { S, log, bus, sleep } from './util.js';
import { st, onNotify, resetLive, startCalib } from './sensor.js';

const NUS = '6e400001-b5a3-f393-e0a9-e50e24dcca9e';
const RX = '6e400002-b5a3-f393-e0a9-e50e24dcca9e';
const TX = '6e400003-b5a3-f393-e0a9-e50e24dcca9e';
const LEDU = '6e400004-b5a3-f393-e0a9-e50e24dcca9e';
const SLEEP = [0x20, 0, 0, 0, 0, 0, 0];

const ble = { device: null, rx: null, led: null, battery: null, want: false, reconnecting: false, ka: null, q: Promise.resolve() };
export const bleInfo = () => ({ name: ble.device && (ble.device.name || 'Triki'), battery: ble.battery });

// Команда старту: діапазони ±16 g / ±2000 °/с, частота (Гц), увімкнути обидва сенсори
const wakeBytes = () => [0x20, 0x10, 0x00, 0xD0, 0x07, S.freq & 255, (S.freq >> 8) & 255, 0x03];

// Браузер не дозволяє дві операції Bluetooth одночасно — ставимо в чергу
function gatt(fn) { const p = ble.q.then(fn); ble.q = p.catch(() => {}); return p; }

async function writeRx(bytes, quiet) {
  if (!ble.rx) return;
  const data = new Uint8Array(bytes);
  return gatt(async () => {
    try {
      if (ble.rx.properties.writeWithoutResponse && ble.rx.writeValueWithoutResponse) await ble.rx.writeValueWithoutResponse(data);
      else if (ble.rx.writeValueWithResponse) await ble.rx.writeValueWithResponse(data);
      else await ble.rx.writeValue(data);
    } catch (e) { if (!quiet) log('Команда не пройшла: ' + e.message); }
  });
}

export const bluetoothAvailable = () => !!navigator.bluetooth;

export async function connect(all) {
  if (!navigator.bluetooth) { bus.emit('banner', 'nobt'); return; }
  bus.emit('stop-sources');
  try {
    const opts = all
      ? { acceptAllDevices: true, optionalServices: [NUS, 'battery_service'] }
      : { filters: [{ namePrefix: 'Triki' }, { namePrefix: 'TRIKI' }, { namePrefix: 'triki' }, { services: [NUS] }],
          optionalServices: [NUS, 'battery_service'] };
    bus.emit('conn', 'wait', 'Вибір пристрою…');
    const dev = await navigator.bluetooth.requestDevice(opts);
    ble.device = dev;
    dev.addEventListener('gattserverdisconnected', onDisconnected);
    st.source = 'ble';
    resetLive();
    try { await setup(); }
    catch (e) {
      try { dev.gatt.disconnect(); } catch {}
      st.source = null;
      if (e.notTriki) { bus.emit('conn', 'off', 'Це не Triki'); bus.emit('banner', 'nottriki'); log(`«${dev.name || 'без назви'}» — не Triki`); }
      else { bus.emit('conn', 'off', 'Не вдалося підключитись'); log('Помилка: ' + e.message); }
      return;
    }
    bus.emit('banner', null);
    ble.want = true;
    startCalib(true);
    bus.emit('source-started');
  } catch (e) {
    st.source = null; ble.want = false;
    bus.emit('conn', 'off', 'Не підключено');
    log(e.name === 'NotFoundError' ? 'Вибір скасовано або Triki не знайдено' : 'Помилка: ' + e.message);
  }
}

async function setup() {
  const dev = ble.device;
  bus.emit('conn', 'wait', 'Підключаюсь…');
  const server = await dev.gatt.connect();
  let svc;
  try { svc = await server.getPrimaryService(NUS); }
  catch { const e = new Error('не Triki'); e.notTriki = true; throw e; }
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
  bus.emit('conn', 'on', `${dev.name || 'Triki'}${ble.battery != null ? ' ' + ble.battery + '%' : ''}`);
  log('Підключено: ' + (dev.name || 'Triki'));
  clearInterval(ble.ka);
  ble.ka = setInterval(() => { if (S.keepalive && dev.gatt.connected) writeRx(wakeBytes(), true); }, 1000);
}

function onDisconnected() {
  clearInterval(ble.ka);
  if (st.source !== 'ble') return;
  log('Triki відключився');
  if (ble.want && S.autoRe) reconnectLoop();
  else { st.source = null; bus.emit('conn', 'off', 'Відключено'); }
}

async function reconnectLoop() {
  if (ble.reconnecting) return;
  ble.reconnecting = true;
  while (ble.want && ble.device && !ble.device.gatt.connected) {
    bus.emit('conn', 'wait', 'Перепідключаюсь…');
    try { await setup(); break; } catch { await sleep(1000); }
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
  clearInterval(ble.ka);
  if (st.source === 'ble' && ble.device && ble.device.gatt.connected) {
    await writeRx(SLEEP);
    st.source = null;
    ble.device.gatt.disconnect();
  }
  st.source = null;
  bus.emit('conn', 'off', 'Не підключено');
}
