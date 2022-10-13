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
        path: 'home',
        component: () => import('@/views/home')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const whiteAPIList = ['/reg', '/login'] // 白名单

// 前置路由守卫
// 知识点：如果强制next()切换地址，将会再次走路由守卫，再次匹配路由表
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
