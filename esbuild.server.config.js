import { build } from 'esbuild';

build({
  entryPoints: ['./server/server.ts'],
  outfile: './dist/server/server.js',
  platform: 'node',
  bundle: true,
  format: 'esm',
  sourcemap: true,
  target: 'node21.6.1',
}).catch(() => process.exit(1))