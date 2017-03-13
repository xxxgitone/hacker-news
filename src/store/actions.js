import * as types from './mutations-type'
import { fetchItem } from '../api/api'

const actions = {
  /* 获取个模块内容 */
  [types.FETCH_ITEMS] ({ commit, state }, ids) {
    state.items = []
    const itemIds = ids.map(id => fetchItem(id))
    Promise.all(itemIds).then((datas) => {
      datas.forEach(data => {
        //  新增一个属性，用于记录点赞
        Object.assign(data, {voted: false})
      })
      state.items = datas
      //  这里可以直接写state.loading = false， 为了体验actions
      commit('UODATE_LOADING')
    })

    return Promise.resolve()
  }
}

export default actions
