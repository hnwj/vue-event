import Vue from 'vue'
import VueRouter from 'vue-router'
// import register from '@/views/register'
// import login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/reg',
    component: () => import('@/views/register')
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout')
  }
]

const router = new VueRouter({
  routes
})

// 前置路由守卫
router.beforeEach

export default router
