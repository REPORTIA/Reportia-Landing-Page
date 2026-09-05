import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El backend público no devuelve cabeceras CORS. En desarrollo, Vite hace de proxy
// para que el navegador vea las llamadas como del mismo origen. En producción la
// landing llama al backend directamente, así que el backend debe permitir el origen
// de Firebase Hosting (ver src/api.js).
const BACKEND = 'https://ca-reportia-backend.wittyflower-3a63d180.brazilsouth.azurecontainerapps.io'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: BACKEND,
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
