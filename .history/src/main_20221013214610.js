import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as element from '@/element'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import '@/assets/global.less' // 全局初始化样式
// 导入dayjs方法
import dayjs from 'dayjs'

Vue.use(VueQuillEditor)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  element,
  render: h => h(App)
}).$mount('#app')
