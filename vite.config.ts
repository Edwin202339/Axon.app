import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Axon.app/',
  server: {
    port: 3000,
    host: true, // Escuchar en todas las direcciones de red
    open: true, // Abrir automáticamente en el navegador predeterminado
    hmr: {
      overlay: true, // Mostrar errores en una superposición en el navegador
    },
  },
})
