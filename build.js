// build.js — rebuilds app-live.html from break-room-live.js
//
//   node build.js
//
// app-live.html is a vendor shell (React, Supabase, Lucide) with the app's own
// code spliced between the /*APP-START*/ and /*APP-END*/ markers. This script
// swaps in the current contents of break-room-live.js and leaves everything
// else byte-for-byte untouched.
//
// Edit break-room-live.js. Never edit app-live.html by hand.

const fs = require('fs');
const HTML = 'app-live.html', SRC = 'break-room-live.js';
const A = '/*APP-START*/', B = '/*APP-END*/';

const html = fs.readFileSync(HTML, 'utf8');
const i = html.indexOf(A), j = html.indexOf(B);
if (i === -1 || j === -1) { console.error('Markers not found in ' + HTML); process.exit(1); }

let src = fs.readFileSync(SRC, 'utf8');
if (src.startsWith('/*')) src = src.slice(src.indexOf('*/') + 2).replace(/^\n+/, '');

const out = html.slice(0, i) + A + '\n' + src.replace(/\n+$/, '') + '\n' + html.slice(j);
fs.writeFileSync(HTML, out);
console.log('Rebuilt ' + HTML + ' — ' + out.length + ' bytes');
