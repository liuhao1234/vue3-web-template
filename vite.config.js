import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

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
      reactivityTransform: true, //启用响应式语法糖$refs...
    }),
    /**
     * https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md
     * http://mockjs.com/
     */
    viteMockServe({
      // default
      mockPath: 'mock',
      supportTs: false,
      localEnabled: process.env.NODE_ENV === 'development'
    }),
    /**
     * https://github.com/antfu/unplugin-auto-import#install
     * https://juejin.cn/post/7012446423367024676
     * 自动导入vue3的hooks，组件可直接使用vue、vue-router、pinia库中的ref、computed、useRouter、useStore等方法，无需import方式导入
     */
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      resolvers: [
        ElementPlusResolver() //按需导入插件,无需全局导入样式
      ],
    }),
    /**
     * https://github.com/antfu/unplugin-vue-components#installation
     * https://juejin.cn/post/7012446423367024676
     * 按需自动导入elementui组件,按需自动导入components文件夹下的组件并全局注册
     */
    Components({
      // dirs: ['src/components'], //自动导入自定义组件，默认配置是['src/components']
      resolvers: [
        ElementPlusResolver() //按需导入插件,无需全局导入样式
      ],
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
