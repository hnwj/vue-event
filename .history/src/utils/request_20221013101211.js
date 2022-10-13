import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

const myAxios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})

// 白名单: 不需要携带token的api地址
const whiteAPIList = ['/api/reg', '/api/login']

// 定义请求拦截器
myAxios.interceptors.request.use(function (config) {
  // 为请求头挂载Authorization字段
  if (!whiteAPIList.includes(config.url)) {
    config.headers.Authorization = store.state.token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  console.dir(error)
  // 响应状态码，4xx,5xx
  // 对响应错误做点什么
  if (error.response.state === 401) {
    // 清除vuex中的token，并退出登录
    store.commit('updateToken', '')
    store.commit('updateUserINfo', {})
    router.push('/login')
    Message.error('用户登录信息过期！')
  }
  return Promise.reject(error)
})

export default myAxios
