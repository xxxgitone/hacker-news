import * as types from './mutations-type'

const mutations = {
  [types.UPDATE_MENU] (state, menuId) {
    state.menus.forEach(menu => {
      menu.checked = false
    })
    const menu = state.menus.find(menu => menu.id === menuId)
    menu.checked = true
    return state.menus
  }
}

export default mutations

