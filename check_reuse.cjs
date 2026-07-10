// Find which notes keys already exist in other pt-BR dictionaries and report
// their canonical values, plus which notes keys are product-terms (skip).
const fs = require('fs');
const path = require('path');

const i18nDir = 'static/js/i18n';
const allCatalogs = {};
for (const f of fs.readdirSync(i18nDir)) {
  if (!f.endsWith('.pt-BR.js') || f === 'notes.pt-BR.js') continue;
  const src = fs.readFileSync(path.join(i18nDir, f), 'utf8');
  // crude: 'key': 'value'  and  'key': "value"
  for (const m of src.matchAll(/'([^'\\]*(?:\\.[^'\\]*)*)'\s*:\s*'((?:[^'\\]|\\.)*)'/g)) {
    allCatalogs[m[1]] = { value: m[2], file: f };
  }
  for (const m of src.matchAll(/'([^'\\]*(?:\\.[^'\\]*)*)'\s*:\s*"((?:[^"\\]|\\.)*)"/g)) {
    allCatalogs[m[1]] = { value: m[2], file: f };
  }
}

const notesKeys = fs.readFileSync('notes_keys.txt', 'utf8').split('\n').filter(l => l && !l.startsWith('TOTAL')).slice(0);
// first line after header
const cleanKeys = notesKeys.filter(k => k && !k.startsWith('TOTAL'));

console.log('=== REUSE (already translated elsewhere — use exact value, do NOT redeclare) ===');
const reuse = [];
const fresh = [];
for (const k of cleanKeys) {
  if (allCatalogs[k]) {
    reuse.push(`  ${JSON.stringify(k)}: ${JSON.stringify(allCatalogs[k].value)},  // from ${allCatalogs[k].file}`);
  } else {
    fresh.push(k);
  }
}
reuse.forEach(l => console.log(l));
console.log('\n=== FRESH keys needing new translation (count: ' + fresh.length + ') ===');
fresh.forEach(k => console.log(JSON.stringify(k)));
