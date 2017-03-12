import * as types from './mutations-type'
import axios from 'axios'

//  获取单个item
function fetchItem (id) {
  return new Promise(function (resolve, reject) {
    axios.get(` https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => {
        resolve(res.data)
      })
  })
}

const actions = {
  /* 获取个模块内容 */
  [types.FETCH_ITEMS] ({ state }, ids) {
    console.log('actions')
    state.items = []
    const itemIds = ids.map(id => fetchItem(id))
    Promise.all(itemIds).then((datas) => {
      datas.forEach(data => {
        //  新增一个属性，用于记录点赞
        Object.assign(data, {voted: false})
      })
      state.items = datas
      state.loading = false
    })

    return Promise.resolve()
  }
}

export default actions
