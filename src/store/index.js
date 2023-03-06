import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { useUserStore } from '@/store/user'
import { useHomeStore } from '@/store/home'

export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


export default {
  user: useUserStore,
  home: useHomeStore
}