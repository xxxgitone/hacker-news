import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
// import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '',
    menus: [
        { id: 1, name: 'WELCOME', isShow: true, checked: false, icon: 'iconfont icon-welcome', to: 'welcome' },
        { id: 2, name: 'NEW', isShow: true, checked: false, icon: 'iconfont icon-news2', to: 'news' },
        { id: 3, name: 'THREADS', isShow: true, checked: false, icon: 'iconfont icon-lamb', to: 'threads' },
        { id: 4, name: 'COMMENTS', isShow: true, checked: false, icon: 'iconfont icon-comments', to: 'comments' },
        { id: 5, name: 'SHOW', isShow: true, checked: false, icon: 'iconfont icon-chakan', to: 'show' },
        { id: 6, name: 'ASK', isShow: true, checked: false, icon: 'iconfont icon-ask', to: 'ask' },
        { id: 7, name: 'JOBS', isShow: true, checked: false, icon: 'iconfont icon-jobs', to: 'jobs' },
        { id: 8, name: 'SUBMIT', isShow: true, checked: false, icon: 'iconfont icon-submit-go', to: 'submit' }
    ]
  },
  mutations
})

export default store
