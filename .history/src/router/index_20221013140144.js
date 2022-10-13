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
    redirect: '/home',
    component: () => import('@/views/layout'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'user-info', // 这里必须叫user-info, 因为侧边栏导航切换的是它
        component: () => import('@/views/user/userInfo')
      },
      {
        path: 'user-avatar',
        component: () => import('@/views/user/userAvatar')
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
