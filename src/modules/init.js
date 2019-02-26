// import user from '../api/user'
// initial state
const state = {
  all: [],
  menuList: [{name: '首页', web_route: '/'}, {name: '图表', web_route: '/echarts'}, {name: 'Demo', web_route: '/etable', children: [{name: '表格', web_route: '/tabel'}]}],
  token: '',
  router: [],
  current: {},
  config: {}
}

// getters
const getters = {}
// actions
const actions = {
  getInits ({ commit }, options) {
    const storage = localStorage.getItem('users')
    const { router, message } = options
    if (!storage) {
      router.push('/login')
    } else {
      // user.postUser((data) => commit('setToken', {data, message}), {...JSON.parse(storage)})
      commit('setToken', message)
    }
  }
}

// mutations
const mutations = {
  setToken (state, message) {
    // localStorage.setItem('users', options.data)
    // router.push('/')
    message.success('欢迎回来')
  },
  setCurrent (state, data) {
    if (data) {
      state.current = data
    }
  },
  setMenuList (state, menuList) {
    if (menuList) {
      const newMenulist = menuList.map(item => {
        const menus = item
        if (!item.parent) {
          const itemMenus = menuList.map(item2 => {
            if (item2.parent === item.name) {
              return item2
            } else {
              return null
            }
          }).filter(item => item != null)
          if (itemMenus.length > 0) {
            menus.children = itemMenus
          }
          return menus
        } else {
          return null
        }
      }).filter(item => item != null)
      state.menuList = newMenulist
    }
  },
  setConfig (state, data) {
    state.config = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
