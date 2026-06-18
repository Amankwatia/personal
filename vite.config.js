import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages project site: https://amankwatia.github.io/personal/
  // Change this to '/' when moving to a custom domain or user site.
  base: '/personal/'
})
