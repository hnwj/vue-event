import axios from 'axios'
import store from '@/store'

const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

// 白名单: 不需要携带token的api地址
const whiteAPIList = ['/api/reg', '/api/login']

// 定义请求拦截器
myAxios.interceptors.request.use(function (config) {
  // 为请求头挂载Authorization字段
  if (!whiteAPIList.includes(config.url)) {
    config.headers.Authorization = store.store.token
  }
  return config
}, function (error) {
  return Promise.reject(error)
}

)

export default myAxios
