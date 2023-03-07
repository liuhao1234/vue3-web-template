import * as VueRouter from 'vue-router';
import routes from '@/routes/routes';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  strict: true,
  sensitive: true,
});

router.beforeEach((to, from, next) => {
  console.log(from, to);
  next();
});

export default router;
