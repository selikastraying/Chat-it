import UserServices from '@/services/UserServices.js'

export const namespaced = true

export const state = {
  name: '',
  token: null
}

export const mutations = {
  SET_NAME(state, name) {
    state.name = name
  },
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export const actions = {
  login({ commit }, { id, pass }) {
    return UserServices.userLogin(id, pass)
      .then(token => {
        commit('SET_NAME', id)
        commit('SET_TOKEN', token)
        return true
      })
      .catch(error => {
        console.log('login failed:' + error.message)
        return false
      })
  },
  register({ commit }, data) {
    return UserServices.register(data)
      .then(token => {
        commit('SET_NAME', data.id)
        commit('SET_TOKEN', token)
        return true
      })
      .catch(error => {
        console.log('register failed:' + error.message)
        return false
      })
  },
  resetState({ commit }) {
    commit('SET_NAME', '')
    commit('SET_TOKEN', null)
    return true
  }
}

export const getters = {
  getName: state => {
    return state.name
  },
  getToken: state => {
    return state.token
  }
}
