// Тимчасове калібрування трюків: записуємо kickflip, heelflip і shuvit в обидва боки,
// щоб дізнатись, навколо яких осей Triki крутиться дошка саме в цього райдера.
// Записи (разом із сирими даними) можна експортувати, щоб потім вшити їх у сайт назавжди.
import { S, saveSettings, store, bus, log } from './util.js';
import { V } from './math.js';
import { st, mount } from './sensor.js';
import { t } from './i18n.js';

export const CAL_TRICKS = ['Kickflip', 'Heelflip', 'BS pop shuvit', 'FS pop shuvit'];

export const cal = {
  target: null,                              // який трюк зараз записуємо
  samples: store.get('cal.samples', []),     // розпізнані спроби з сирим фрагментом
  raw: store.get('cal.raw', []),             // увесь сирий потік під час запису, по шматках
};

const save = () => {
  if (!store.set('cal.samples', cal.samples)) log('cal.samples: storage full');
  if (!store.set('cal.raw', cal.raw)) { cal.raw = cal.raw.slice(-2); store.set('cal.raw', cal.raw); }
};

export const countOf = name => cal.samples.filter(s => s.trick === name).length;

export function startRec(name) {
  stopRec();
  cal.target = name;
  st.calRec = { trick: name, t0: performance.now(), start: Date.now(), fs: st.fs, source: st.source, rows: [] };
  bus.emit('cal');
}

export function stopRec() {
  if (st.calRec) {
    const r = st.calRec; st.calRec = null;
    if (r.rows.length > 10) { r.fs = +st.fs.toFixed(1); cal.raw.push(r); save(); }
  }
  if (cal.target) { cal.target = null; bus.emit('cal'); }
}

// Спроба під час запису калібрування (замість звичайного додавання в сесію)
export function addSample(tr) {
  const s = {
    trick: cal.target, time: Date.now(), source: st.source, stance: S.stance,
    angS: tr.angS, air: +tr.air.toFixed(3), peakSpin: Math.round(tr.peakSpin), landed: tr.landed,
    detected: tr.name, snip: tr.snip,
  };
  cal.samples.push(s);
  save();
  const n = countOf(s.trick);
  log(t('log.calSample', { trick: s.trick, n }));
  bus.emit('cal');
  return n;
}

export function deleteLast() {
  const name = cal.target;
  for (let i = cal.samples.length - 1; i >= 0; i--) {
    if (!name || cal.samples[i].trick === name) { cal.samples.splice(i, 1); break; }
  }
  save(); bus.emit('cal');
}

export function clearAll() {
  stopRec();
  cal.samples = []; cal.raw = []; save();
  bus.emit('cal');
}

const mean = list => {
  const m = [0, 0, 0];
  for (const s of list) for (let i = 0; i < 3; i++) m[i] += s.angS[i] / list.length;
  return m;
};
const deg = (a, b) => Math.acos(Math.min(1, Math.abs(V.dot(V.norm(a), V.norm(b))))) * 180 / Math.PI;

// Обчислити осі: фліп — kickflip мінус heelflip, shuvit — BS мінус FS (у координатах Triki)
export function apply() {
  if (st.source === 'demo') return { ok: false, msg: [{ k: 'cal.demoApply' }] };
  const bf = false;
  const pick = name => cal.samples.filter(s => s.trick === name && s.angS && (s.source === 'demo') === bf);
  const K = pick('Kickflip'), H = pick('Heelflip'), B = pick('BS pop shuvit'), F = pick('FS pop shuvit');
  if (K.length + H.length < 2 || B.length + F.length < 2) return { ok: false, msg: [{ k: 'cal.need' }] };
  const warn = [];
  if (K.length && H.length && V.dot(mean(K), mean(H)) > 0) warn.push({ k: 'cal.sameFlip' });
  if (B.length && F.length && V.dot(mean(B), mean(F)) > 0) warn.push({ k: 'cal.sameShuv' });
  const mk = mean(K.length ? K : []), mh = mean(H.length ? H : []);
  const flipRaw = V.sub(K.length ? mk : [0, 0, 0], H.length ? mh : [0, 0, 0]);
  const mb = mean(B.length ? B : []), mf = mean(F.length ? F : []);
  const shuvRaw = V.sub(B.length ? mb : [0, 0, 0], F.length ? mf : [0, 0, 0]);
  const flip = V.norm(flipRaw);
  const shuv = V.norm(V.sub(shuvRaw, V.mul(flip, V.dot(shuvRaw, flip))));   // строго поперек фліпа
  const pitch = V.cross(shuv, flip);
  // наскільки осі відхилені від налаштованого кріплення (лише для інформації)
  const M = bf ? [[1, 0, 0], [0, 1, 0], [0, 0, 1]] : mount() || [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  const a = Math.round(deg(flip, M[0])), b = Math.round(deg(shuv, M[2]));
  S.trickCal = {
    flip: flip.map(v => +v.toFixed(4)), shuv: shuv.map(v => +v.toFixed(4)), pitch: pitch.map(v => +v.toFixed(4)),
    stance: S.stance, bf, at: Date.now(), n: { kickflip: K.length, heelflip: H.length, bs: B.length, fs: F.length },
  };
  saveSettings();
  log(t('log.calApplied'));
  bus.emit('cal');
  return { ok: true, msg: [{ k: 'cal.applied', p: { a, b } }, ...warn] };
}

export function resetCal() { S.trickCal = null; saveSettings(); bus.emit('cal'); }

export function exportJson() {
  return JSON.stringify({
    app: 'triki-skate', kind: 'trick-calibration', version: 1, exported: new Date().toISOString(),
    device: S.device && S.device.name,
    settings: { mount: S.mount, autoMount: st.autoMount, stance: S.stance, freq: S.freq, accScale: S.accScale, gyroScale: S.gyroScale },
    bias: st.bias, calibration: S.trickCal, samples: cal.samples, raw: cal.raw,
  });
}
