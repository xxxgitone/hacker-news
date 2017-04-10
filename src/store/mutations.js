import * as types from './mutations-type'
import { fetchUser } from '../api/api'
// import axios from 'axios'

const mutations = {
  /*  更新选中菜单，和右边面板头部标题  */
  [types.UPDATE_MENU] (state, menuId) {
    state.menus.forEach(menu => {
      menu.checked = false
    })
    const menu = state.menus.find(menu => menu.id === menuId)
    menu.checked = true
    state.title = menu.name
    return state
  },
  /*  取消被选中的导航  */
  [types.CANCLE_CHECKED] (state) {
    state.menus.forEach(menu => {
      menu.checked = false
    })
    state.title = ''
  },
  //  更新loading状态
  [types.UODATE_LOADING] (state) {
    state.loading = false
  },
  // 赞
  [types.UPDATE_VOTED] (state, id) {
    const item = state.items.find(item => item.id === id)
    item.voted = true
    item.score += 1
  },
  //  隐藏
  [types.HIDE_ITEM] (state, item) {
    const index = state.items.indexOf(item)
    state.items = [
      // 不会影响原数组
      ...state.items.slice(0, index),

      ...state.items.slice(index + 1)
    ]
    return state
  },
  //  获取user
  [types.FETCH_USER] (state, id) {
    fetchUser(id).then(data => {
      state.user = data
    })
  },

  //  实现数据双向绑定
  [types.UPDATE_USERNAME] (state, username) {
    state.loginUser.id = username
    console.log(state.loginUser.id)
  },

  [types.UPDATE_PASSWORD] (state, password) {
    state.loginUser.password = password
    console.log(state.loginUser.password)
  },

  [types.CREATED_ACCOUNT] (state) {
    const loginUser = {
      id: state.loginUser.id.trim(),
      password: state.loginUser.password,
      created: new Date(),
      logged: true
    }
    //  因为这里有几个属性是没有输入的，所以保存之前从新赋值一次，以便更新state
    state.loginUser = loginUser
    localStorage.setItem('user', JSON.stringify(loginUser))
  },

  [types.GET_USERINFO] (state) {
    let loginUser = JSON.parse(localStorage.getItem('user'))
    loginUser && (state.loginUser = loginUser)
  }
}

export default mutations

