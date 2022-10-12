import Vue from 'vue'
import VueRouter from 'vue-router'
// import register from '@/views/register'
// import login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/reg'
  },
  {
    path: '/reg',
    component: () => import('@/views/register')
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/layout',
    component:()=> import('@/views/layout')
  }
]

const router = new VueRouter({
  routes
})

export default router
