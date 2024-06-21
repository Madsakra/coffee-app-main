import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.VITE_KEY':JSON.stringify(process.env.VITE_KEY)

  },
  css:{
    postcss:{plugins:[tailwindcss()]}
  }
})
