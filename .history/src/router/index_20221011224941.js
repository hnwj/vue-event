import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register'
import login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: register
  },{}
]

const router = new VueRouter({
  routes
})

export default router
