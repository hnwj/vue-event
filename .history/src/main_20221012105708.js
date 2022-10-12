import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import { Button, Select, Form, Input, FormItem, Link, Message, Main, Aside, Container, Header, Menu, } from 'element-ui'
import '@/assets/global.less' // 全局初始化样式
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Link)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Header)
Vue.use(Menu)
// 将message挂载到vue的原型上
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
