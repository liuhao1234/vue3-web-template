import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.cn/
export default defineConfig({
  envDir: "./env", //配置文件所在目录，默认根路径
  envPrefix: ["VITE", "VENUS"], //这个时候，我们可以将VITE_、VENUS_开头的变量统统透传给客户端
  css:{
    //css预处理
    preprocessorOptions:{
      scss:{
        //要公用的scss的路径
        additionalData:"@import './src/assets/style/variables.scss';@import './src/assets/style/mixin.scss';"
      }
    }
  },
  plugins: [
    vue({
      reactivityTransform: true, //启用响应式语法糖
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    open: true,
    port: 8088
  }
})
