import Firebase from 'firebase/app'
import 'firebase/database'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com'
}
const v = '/v0'
Firebase.initializeApp(config)
const api = Firebase.database()
export default function fetchIdsByType (type) {
  let ids
  api.ref(v + `/${type}stories`).on('value', snapshot => {
    ids = snapshot.val()
  })
  return ids
}

