// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import axios from 'axios'

import store from './store'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  const data = localStorage.getItem('users')
  console.log(data, 888)
  if (data) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

Vue.use(iView)

new Vue({
  el: '#app',
  store,
  router,
  render: h=>h(App),
  template: '<App/>'
})
