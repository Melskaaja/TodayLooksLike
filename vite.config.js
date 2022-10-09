import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [vue(), ssr()]
})
