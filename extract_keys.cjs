// Temporary helper to extract literal window.t('...') keys from a consumer file.
const fs = require('fs');
const file = process.argv[2];
const src = fs.readFileSync(file, 'utf8');
const keys = new Set();
for (const m of src.matchAll(/window\.t\(\s*'((?:[^'\\]|\\.)*)'/g)) keys.add(m[1]);
for (const m of src.matchAll(/window\.t\(\s*"((?:[^"\\]|\\.)*)"/g)) keys.add(m[1]);
const arr = [...keys].sort();
console.log('TOTAL: ' + arr.length);
arr.forEach(k => console.log(k));
