import Vue from 'vue'
import Router from 'vue-router'
import News from '../views/News'
import Newest from '../views/Newest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Newest
    },
    {
      path: '/news',
      component: News
    }
  ]
})
