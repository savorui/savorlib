import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
  clean: true,
  dts: true,
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  minify: !opts.watch,
  sourcemap: true,
  target: 'esnext',
  outDir: 'dist',
  injectStyle: true,
}));
