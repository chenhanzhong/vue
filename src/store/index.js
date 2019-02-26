import Vue from 'vue'
import Vuex from 'vuex'
// import cart from '../modules/cart'
import init from '../modules/init'
import collect from '../modules/collect'
import user from '../modules/user'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    init,
    collect
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
