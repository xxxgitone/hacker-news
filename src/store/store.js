import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menus: [
        { id: 1, name: 'WELCOME', isShow: true, checked: false, icon: 'iconfont icon-welcome' },
        { id: 2, name: 'NEW', isShow: true, checked: true, icon: 'iconfont icon-news2' },
        { id: 3, name: 'THREADS', isShow: true, checked: false, icon: 'iconfont icon-lamb' },
        { id: 4, name: 'COMMENTS', isShow: true, checked: false, icon: 'iconfont icon-comments' },
        { id: 5, name: 'SHOW', isShow: true, checked: false, icon: 'iconfont icon-chakan' },
        { id: 6, name: 'ASK', isShow: true, checked: false, icon: 'iconfont icon-ask' },
        { id: 7, name: 'JOBS', isShow: true, checked: false, icon: 'iconfont icon-jobs' },
        { id: 8, name: 'SUBMIT', isShow: true, checked: false, icon: 'iconfont icon-submit-go' }
    ]
  },
  mutations
})

export default store
