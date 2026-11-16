import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 部署在 https://ropehuo.github.io（用户站根域名），base 保持 '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
