import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // For https://USERNAME.github.io/REPOSITORY_NAME/, change base to '/REPOSITORY_NAME/'.
  // For https://USERNAME.github.io/ or a custom domain, keep base as '/'.
  base: '/'
})
