import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  userLogin(id, pass) {
    return apiClient
      .get('/login', { params: { id: id, pass: pass } })
      .then(res => {
        return res.data
      })
      .catch(error => {
        console.error(error)
      })
  },
  register(data) {
    return apiClient
      .get('/register', { params: { data: data } })
      .then(res => {
        return res.data
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        /* 不論失敗成功皆會執行 */
      })
  },
  checkToken(token) {
    return apiClient
      .get('/checkToken', { params: { token: token } })
      .then(res => {
        return res.data
      })
      .catch(error => {
        console.error(error)
      })
  },
  getFriends(token) {
    return apiClient
      .get('/getFriends', { params: { token: token } })
      .then(res => {
        return res.data
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        /* 不論失敗成功皆會執行 */
      })
  }
}
