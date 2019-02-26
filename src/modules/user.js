// import auth from '../../api/auth'
// import config from '../../config'
import user from '../api/user'

// initial state
const state = {
  users: []
}

// getters
const getters = {}
// actions
const actions = {
  getAuth ({commit}, options) {
    user.postUser((user) => {
      commit('setUser', {user, ...options})
    }, {...options.data})
  }
}

// mutations
const mutations = {
  setUser (state, options) {
    // console.log(router, 77777)
    const { router, user, message } = options
    localStorage.setItem('users', JSON.stringify(user))
    message.success('登录成功')
    state.user = user
    router.push('/')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
