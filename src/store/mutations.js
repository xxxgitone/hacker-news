import * as types from './mutations-type'

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
  }
}

export default mutations

