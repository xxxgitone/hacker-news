// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import moment from 'moment'

Vue.config.productionTip = false

//  全局过滤器，用于处理时间
Vue.filter('timeAgo', (timestamp) => {
  return moment(timestamp).startOf('day').fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
