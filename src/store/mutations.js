import * as types from './mutations-type'
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
  // 赞
  [types.UPDATE_VOTED] (state, id) {
    const item = state.items.find(item => item.id === id)
    item.score += 1
  },
  //  隐藏
  [types.HIDE_ITEM] (state, item) {
    const index = state.items.indexOf(item)
    state.items = [
      ...state.items.slice(0, index),

      ...state.items.slice(index + 1)
    ]
    return state
  }
}

export default mutations

