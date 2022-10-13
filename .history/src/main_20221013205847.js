import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as element from '@/element'


import '@/assets/global.less' // 全局初始化样式

Vue.config.productionTip = false

new Vue({
  router,
  store,
  element,
  render: h => h(App)
}).$mount('#app')
