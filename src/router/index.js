import Vue from 'vue'
import Router from 'vue-router'
import Newest from '../views/Newest.vue'
import Top from '../views/Top.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/news',
      component: Newest
    }
  ]
})
