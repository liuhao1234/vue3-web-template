const Login = () => import('@/views/Login/index.vue')
const page404 = () => import('@/views/404/index.vue')
const Home = () => import('@/views/Home/index.vue')
const Index = () => import('@/views/Index/index.vue')
const User = () => import('@/views/User/index.vue')

const routes = [
  { 
    name: 'login',
    path: '/login', 
    component: Login 
  },
  { 
    name: 'home',
    path: '/home',
    component:Home,
    children:[{
      name:'index',
      path:'index',
      component:Index
    },{
      name:'user',
      path:'user',
      component:User
    },{
      path: ':catchAll(.*)', 
      component: page404 
    }]
  },
  { 
    path: '/', 
    redirect: '/login' 
  },
  {
    path: '/:catchAll(.*)', 
    component: page404 
  }
]

export default routes;