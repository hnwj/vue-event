import request from '@/utils/request.js'

export const getListAPI = () => {
  return request({
    url: 'http://geek.itheima.net/v1_0/channels'
  })
}

// 注册新用户
export const registerAPI = () => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data
  })
}
