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
    Promise.all(itemIds).then((data) => {
      state.items = data
    })

    return Promise.resolve()
  }
}

export default actions
