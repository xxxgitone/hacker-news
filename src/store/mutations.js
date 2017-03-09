import * as types from './mutations-type'
import axios from 'axios'

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
  /* 获取个模块内容 */
  [types.FETCH_ITEMS] (state, ids) {
    state.items = []
    ids.forEach(id => {
      axios.get(` https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(res => {
          state.items.push(res.data)
          console.log(state.items)
        })
    })
  }
}

export default mutations

