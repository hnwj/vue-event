import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 1. 用来存储登录成功之后，得到的 token
    token: ''
  },
  getters: {
  },
  mutations: {
    // 更新
    updateToken (state, token) {
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  }
})
