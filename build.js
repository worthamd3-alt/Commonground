// build.js — rebuilds app-live.html from break-room-live.js
//
//   node build.js            minified deploy build (default)
//   node build.js --readable unminified, for debugging in the browser
//
// break-room-live.js is the source of truth. app-live.html is a vendor shell
// (React, Supabase, Lucide) with the app's own code spliced between the
// /*APP-START*/ and /*APP-END*/ markers. Never hand-edit app-live.html.

const fs = require('fs');
const HTML = 'app-live.html', SRC = 'break-room-live.js';
const A = '/*APP-START*/', B = '/*APP-END*/';
const readable = process.argv.indexOf('--readable') !== -1;

const html = fs.readFileSync(HTML, 'utf8');
const i = html.indexOf(A), j = html.indexOf(B);
if (i === -1 || j === -1) { console.error('Markers not found in ' + HTML); process.exit(1); }

let src = fs.readFileSync(SRC, 'utf8');
if (src.startsWith('/*')) src = src.slice(src.indexOf('*/') + 2).replace(/^\n+/, '');

let body = src.replace(/\n+$/, '');
if (!readable) {
  // The app body closes the bundle's IIFE, so add a matching opener for the
  // minifier, then strip it back off. Keeps the deployed file small while
  // break-room-live.js stays readable.
  const wrapper = '(()=>{';
  const out = require('esbuild').transformSync(wrapper + body, { minify: true, legalComments: 'none' }).code;
  if (out.slice(0, wrapper.length) !== wrapper) {
    console.error('Minifier changed the wrapper; refusing to splice.'); process.exit(1);
  }
  body = out.slice(wrapper.length);
}

const result = html.slice(0, i) + A + '\n' + body + '\n' + html.slice(j);
fs.writeFileSync(HTML, result);
console.log('Rebuilt ' + HTML + ' — ' + result.length + ' bytes' + (readable ? ' (readable)' : ' (minified)'));
