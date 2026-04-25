const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pkg = require(path.join(root, 'package.json'));
const dist = path.join(root, 'dist-html');
const src = path.join(root, 'index.html');
const out = path.join(dist, `Lung-Cancer-Staging-System-${pkg.version}.html`);

fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(src, out);

console.log(out);
