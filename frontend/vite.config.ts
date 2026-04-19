import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'public/dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/client/main.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
      }
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/client'),
    },
  },
});
