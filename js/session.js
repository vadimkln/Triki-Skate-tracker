// Сесія катання: список трюків, правки користувача, статистика, історія.
import { store, bus } from './util.js';

const newSession = () => ({ id: Date.now(), start: Date.now(), tricks: [], gps: { max: 0, sum: 0, n: 0, dist: 0 } });

export let session = store.get('session', null);
if (!session || !Array.isArray(session.tricks)) session = newSession();
if (!session.gps) session.gps = { max: 0, sum: 0, n: 0, dist: 0 };

export const nameOf = t => t.label || t.name;
export const landedOf = t => (t.landedOverride != null ? t.landedOverride : t.landed);
export const liveTricks = () => session.tricks.filter(t => !t.deleted);

export function saveSession() {
  if (store.set('session', session)) return;
  // місце закінчилось — прибираємо сирі дані найстаріших трюків
  for (const t of session.tricks) { if (t.snip) { delete t.snip; if (store.set('session', session)) return; } }
}

export function addTrick(t) {
  Object.assign(t, { id: Date.now() + '-' + Math.round(Math.random() * 1e5), time: Date.now() });
  session.tricks.push(t);
  saveSession();
  bus.emit('session');
  return t;
}

export function editTrick(id, patch) {
  const t = session.tricks.find(x => x.id === id);
  if (!t) return;
  Object.assign(t, patch);
  saveSession();
  bus.emit('session');
}

export function summarize(s = session) {
  const ts = s.tricks.filter(t => !t.deleted), ok = ts.filter(landedOf), hs = ts.map(t => t.height);
  const end = s === session ? Date.now() : (ts.length ? ts[ts.length - 1].time : s.start);
  return {
    attempts: ts.length, landed: ok.length, rate: ts.length ? Math.round(100 * ok.length / ts.length) : 0,
    maxH: hs.length ? Math.max(...hs) : 0, avgH: hs.length ? hs.reduce((a, b) => a + b, 0) / hs.length : 0,
    maxAir: ts.length ? Math.max(...ts.map(t => t.air)) : 0, maxSpin: ts.length ? Math.max(...ts.map(t => t.peakSpin)) : 0,
    minutes: Math.max(0, Math.round((end - s.start) / 60000)),
    gpsMax: s.gps.max, gpsAvg: s.gps.n ? s.gps.sum / s.gps.n : 0, dist: s.gps.dist,
  };
}

export function history() { return store.get('history', []); }

export function archiveSession() {
  const sum = summarize(session);
  if (sum.attempts) {
    const h = history();
    h.unshift({ start: session.start, ...sum });
    store.set('history', h.slice(0, 50));
  }
  session = newSession();
  saveSession();
  bus.emit('session');
}

// сесія, якої не торкались 6 годин, автоматично йде в історію
{
  const last = session.tricks.length ? session.tricks[session.tricks.length - 1].time : session.start;
  if (session.tricks.length && Date.now() - last > 6 * 3600 * 1000) archiveSession();
}
