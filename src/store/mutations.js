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
  },
  /*  取消被选中的导航  */
  [types.CANCLE_CHECKED] (state) {
    state.menus.forEach(menu => {
      menu.checked = false
    })
    state.title = ''
  }
  /* 获取个模块内容 */
}

export default mutations

