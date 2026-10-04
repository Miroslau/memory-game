import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/memory-game/',

  build: {
    outDir: '../',
    emptyOutDir: false,
  },
});
