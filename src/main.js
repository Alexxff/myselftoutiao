import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
// import axios from 'axios'
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
import axios from './utils/axios.config'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Component)
new Vue({

  render: h => h(App),
  router
}).$mount('#app')
