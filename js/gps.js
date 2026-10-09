// Приблизна швидкість їзди через GPS телефона (Triki швидкість не міряє).
import { log, bus } from './util.js';
import { session, saveSession } from './session.js';
import { t } from './i18n.js';

let watch = null, last = null;
export let speedKmh = null;

export function setGps(on) {
  if (watch != null) { navigator.geolocation.clearWatch(watch); watch = null; }
  speedKmh = null; last = null;
  bus.emit('speed', null);
  if (!on) return;
  if (!navigator.geolocation) { log(t('log.gpsNo')); return; }
  watch = navigator.geolocation.watchPosition(onPos, e => log(t('log.gps', { e: e.message })),
    { enableHighAccuracy: true, maximumAge: 0, timeout: 15000 });
}

function onPos(p) {
  const c = p.coords, t = p.timestamp;
  let v = c.speed != null && c.speed >= 0 ? c.speed * 3.6 : null;
  if (last && c.accuracy < 25) {
    const R = 6371000, k = Math.PI / 180, dt = (t - last.t) / 1000;
    const d = 2 * R * Math.asin(Math.sqrt(Math.sin((c.latitude - last.lat) * k / 2) ** 2 +
      Math.cos(last.lat * k) * Math.cos(c.latitude * k) * Math.sin((c.longitude - last.lon) * k / 2) ** 2));
    if (v == null && dt > 0.8) v = d / dt * 3.6;
    if (v != null && v > 1.5 && v < 60) session.gps.dist += d;
  }
  last = { lat: c.latitude, lon: c.longitude, t };
  if (v == null || c.accuracy > 30) return;
  speedKmh = speedKmh == null ? v : 0.6 * speedKmh + 0.4 * v;
  if (speedKmh < 60) {
    session.gps.max = Math.max(session.gps.max, speedKmh);
    if (speedKmh > 2) { session.gps.sum += speedKmh; session.gps.n++; }
  }
  bus.emit('speed', speedKmh);
}

setInterval(() => { if (watch != null) { saveSession(); bus.emit('session'); } }, 5000);
