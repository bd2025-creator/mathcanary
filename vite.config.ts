import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: repo name must match this base for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/math-canary/'
})
