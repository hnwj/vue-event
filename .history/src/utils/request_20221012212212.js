import axios from 'axios'
import store from '@/store'

const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

// 定义请求拦截器
myAxios.interceptors.request.use(function (config) {
  // 为请求头挂载Authorization字
  config.headers.Authorization = store.store.token
})

export default myAxios