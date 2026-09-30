import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The app and its API are served by the same Node server (server/index.ts), so the base is '/'.
// In development Vite proxies /api to that server (npm run dev:server).
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.API_PORT ?? 8787}`,
        changeOrigin: false,
      },
    },
  },
})
