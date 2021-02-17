import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.0.12:3000',
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
  },
  getChats(token) {
    return apiClient
      .get('/getChats', { params: { token: token } })
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
  getChat(chatid) {
    return apiClient
      .get('/getChat', { params: { chatid: chatid } })
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
  addMember(chatid, chatname, member) {
    return apiClient
      .get('/addMember', {
        params: { chatid: chatid, chatname: chatname, member: member }
      })
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
  sentChat(token, chatid, newchat) {
    return apiClient
      .get('/sentChat', {
        params: { token: token, chatid: chatid, newchat: newchat }
      })
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
  createChat(token, member, newchat, chatname) {
    return apiClient
      .get('/createChat', {
        params: {
          token: token,
          member: member,
          newchat: newchat,
          chatname: chatname
        }
      })
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
