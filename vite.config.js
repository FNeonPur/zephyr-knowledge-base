import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        overview: resolve(__dirname, 'pages/overview.html'),
        setup: resolve(__dirname, 'pages/setup.html'),
        'build-system': resolve(__dirname, 'pages/build-system.html'),
        kernel: resolve(__dirname, 'pages/kernel.html'),
        drivers: resolve(__dirname, 'pages/drivers.html'),
        networking: resolve(__dirname, 'pages/networking.html'),
        advanced: resolve(__dirname, 'pages/advanced.html'),
        projects: resolve(__dirname, 'pages/projects.html')
      }
    }
  }
})
