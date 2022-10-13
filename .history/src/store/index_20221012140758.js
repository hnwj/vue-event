import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
//  导入axios
import { getUserInfoAPI } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 1. 用来存储登录成功之后，得到的 token
    token: '',
    // 用户信息
    info: {}
  },
  getters: {
  },
  mutations: {
    // 更新token
    updateToken (state, newToken) {
      state.token = newToken
    },
    // 更新用户信息
    updateUserInfo (state, info) {
      state.info = info
    }
  },
  actions: {
    // 定义初始化用户基本信息
    async initUserInfo (state) {
      const { data: res } = await getUserInfoAPI()
      if (res.code === 0) {
        store.commit('updateToken', res.data)
      }
    }
  },
  modules: {
  },
  // 配置为 vuex 的插件
  plugins: [createPersistedState()]
})
