// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

fastclick.attach(document.body) //解决移动端300MS延迟

Vue.config.productionTip = false

axios.defaults.timeout=10000 //全局超时设置
Vue.prototype.$axios = axios

Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
