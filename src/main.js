// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/iconfont.css'

import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import axios from 'axios'

Vue.use(jquery)
Vue.use(bootstrap)
Vue.config.productionTip = false
Vue.prototype.$http=axios
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})


