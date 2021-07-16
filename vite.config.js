import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vue3-todolist/',
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./src/assets/styles/_variables.sass"
          @import "./src/assets/styles/_mixins.sass"
        `
      }
    }
  }
})
