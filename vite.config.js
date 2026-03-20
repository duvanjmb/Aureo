import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  preview: {
    allowedHosts: true, // 👈 Esto permite cualquier host en modo preview (ideal para despliegue)
    port: 80,           // Aseguramos que use el puerto 80 que pide SeeNode
    host: '0.0.0.0'     // Aseguramos que escuche en todas las interfaces
  }
})
