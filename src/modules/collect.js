import collect from '../api/collect'

// initial state
const state = {
  list: [],
  loading: true
}

// getters
const getters = {}
// actions
const actions = {
  getList ({ commit }, {current}) {
    commit('setInit')
    // console.log(current, 888)
    collect.getList(data => {
      commit('setList', {data, current})
    })
  }
}

// mutations
const mutations = {
  setList (state, {data, current}) {
    // console.log(data, current, 888)
    state.list = data.projects.slice((current - 1) * 10, current * 10)
    state.loading = false
  },
  setInit (state) {
    state.loading = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
