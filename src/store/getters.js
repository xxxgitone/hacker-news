const getters = {
  /*    获取被选中的连接的标题,用于渲染在右边面板头部 */
  getTitle (state) {
    const menu = state.menus.find(menu => menu.checked === true)
    return menu.name
  }
}

export default getters
