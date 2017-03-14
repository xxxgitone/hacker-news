import Vue from 'vue'
import Router from 'vue-router'
import Newest from '../views/Newest.vue'
import Top from '../views/Top.vue'
import User from '../views/User.vue'
import Comments from '../views/Comments.vue'

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
      component: Top
    },
    {
      path: '/newest',
      component: Newest
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/item/:id',
      component: Comments
    }
  ]
})
