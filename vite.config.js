import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
  // This is critical for React Router on Vercel
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: './', // Optional: set if deploying to a subpath
});
