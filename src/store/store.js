import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

// 数据ids
import topids from '../dataids/topids'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '',
    //  用于存储注册用户信息
    loginUser: {
      id: '',
      password: '',
      created: ''
    },
    items: [],
    comments: [],
    //  用于存储hacker-news官方api中用户信息
    user: {},
    loading: false,
    limitNum: 15,
    ids: {
      topids
    },
    menus: [
        { id: 1, name: 'WELCOME', isShow: true, checked: false, icon: 'iconfont icon-Welcome', to: 'welcome' },
        { id: 2, name: 'NEW', isShow: true, checked: false, icon: 'iconfont icon-news', to: 'newest' },
        { id: 3, name: 'THREADS', isShow: true, checked: false, icon: 'iconfont icon-lamb', to: 'threads' },
        { id: 4, name: 'COMMENTS', isShow: true, checked: false, icon: 'iconfont icon-comments', to: 'comments' },
        { id: 5, name: 'SHOW', isShow: true, checked: false, icon: 'iconfont icon-show', to: 'show' },
        { id: 6, name: 'ASK', isShow: true, checked: false, icon: 'iconfont icon-ask', to: 'ask' },
        { id: 7, name: 'JOBS', isShow: true, checked: false, icon: 'iconfont icon-jobs', to: 'jobs' },
        { id: 8, name: 'SUBMIT', isShow: true, checked: false, icon: 'iconfont icon-submit-go', to: 'submit' }
    ]
  },
  mutations,
  getters,
  actions
})

export default store
