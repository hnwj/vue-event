import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select,Form,In } from 'element-ui'
import '@/assets/global.less' // 全局初始化样式
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
