import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-404',
      closeBundle() {
        const index = resolve('dist/index.html')
        copyFileSync(index, resolve('dist/404.html'))
      },
    },
  ],
  base: '/',
})
