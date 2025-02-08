import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    minetypes:{
      'ttf': 'font/ttf',
      'woff2': 'font/woff2',
      },
    },
  plugins: [react()],
})
