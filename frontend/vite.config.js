import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This proxy tells Vite to forward API requests to your Python backend (development only)
    proxy: {
      '/upload': 'https://c-converter-backend.onrender.com',
      '/api': 'https://c-converter-backend.onrender.com',
      '/video': 'https://c-converter-backend.onrender.com',
    }
  },
  // Add build configuration for production
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})