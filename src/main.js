import { createApp } from 'vue'
import router from '@/routes'
import { pinia } from '@/store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from '@/App.vue'
import 'element-plus/dist/index.css'
import '@/assets/style/index.scss'

const app = createApp(App)

app.config.errorHandler = (err) => {
  console.error(err)
}

app.use(router)
app.use(pinia)
app.use(ElementPlus,{
  locale: zhCn
})

app.mount('#app')
