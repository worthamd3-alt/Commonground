// build.js — rebuilds app-live.html from break-room-live.js
//
//   node build.js            minified deploy build (default)
//   node build.js --readable unminified, for debugging in the browser
//
// break-room-live.js is the source of truth. app-live.html is a vendor shell
// (React, Supabase, Lucide) with the app's own code spliced between the
// /*APP-START*/ and /*APP-END*/ markers. Never hand-edit app-live.html.
//
// The app body is the TAIL of the bundle's IIFE: it shares scope with the
// vendor code and ends with the `})();` that closes it. Minifying it in place
// renames its declarations to short names that collide with vendor ones, so
// the minified build wraps the app in its own IIFE to keep those names local.

const fs = require('fs');
const HTML = 'app-live.html', SRC = 'break-room-live.js';
const A = '/*APP-START*/', B = '/*APP-END*/';
const readable = process.argv.indexOf('--readable') !== -1;

const html = fs.readFileSync(HTML, 'utf8');
const i = html.indexOf(A), j = html.indexOf(B);
if (i === -1 || j === -1) { console.error('Markers not found in ' + HTML); process.exit(1); }

let src = fs.readFileSync(SRC, 'utf8');
if (src.startsWith('/*')) src = src.slice(src.indexOf('*/') + 2).replace(/^\n+/, '');

let body = src.replace(/\s+$/, '');
if (!readable) {
  const CLOSER = '})();';
  if (body.slice(-CLOSER.length) !== CLOSER) {
    console.error('Expected the app body to end with the bundle IIFE closer.'); process.exit(1);
  }
  const appOnly = body.slice(0, -CLOSER.length);
  const scoped = require('esbuild').transformSync('(()=>{' + appOnly + '})();',
    { minify: true, legalComments: 'none' }).code;
  body = scoped + '\n' + CLOSER;
}

const result = html.slice(0, i) + A + '\n' + body + '\n' + html.slice(j);
fs.writeFileSync(HTML, result);
console.log('Rebuilt ' + HTML + ' — ' + result.length + ' bytes' + (readable ? ' (readable)' : ' (minified)'));
