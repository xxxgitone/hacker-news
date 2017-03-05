import Vue from 'vue'
import Router from 'vue-router'
import News from '../views/News'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: News
    },
    {
      path: '/news',
      component: News
    }
  ]
})
