import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register'
import login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
re
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
