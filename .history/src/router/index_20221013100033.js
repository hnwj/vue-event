import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
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
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const whiteAPIList = ['/reg', '/api/login'] // 白名单

// 前置路由守卫
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (token) {
    if (!store.state.userInfo) {
      store.dispatch('initUserInfo')
    }
    next()
  } else {
    if (whiteAPIList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
