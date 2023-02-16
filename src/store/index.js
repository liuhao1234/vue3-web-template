import { createPinia } from 'pinia'
import { useUserStore } from '@/store/user'
import { useHomeStore } from '@/store/home'
export const pinia = createPinia()
// console.log(111,useUserStore)
export default {
  user: useUserStore,
  home: useHomeStore
}