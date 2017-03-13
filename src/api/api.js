import axios from 'axios'

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
