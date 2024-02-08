const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./server.ts'],
  outfile: './dist/server.js',
  platform: 'node',
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'node21.6.1',
}).catch(() => process.exit(1))