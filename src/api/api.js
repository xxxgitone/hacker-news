import axios from 'axios'

//  获取单个user
export function fetchUser (id) {
  return new Promise((resolve, reject) => {
    axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`)
    .then((res) => {
      resolve(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })
}
//  获取单个item
export function fetchItem (id) {
  return new Promise(function (resolve, reject) {
    axios.get(` https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(res => {
        resolve(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
