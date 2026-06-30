import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Fixes blank screen by ensuring assets are loaded from root
  plugins: [react()],
  build: {
    outDir: 'dist',
    target: 'es2017',
    rollupOptions: {
      external: ['webmcp-kit', 'webmcp-kit/devtools']
    }
  }
});