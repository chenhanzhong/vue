import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index'
// import Mark from '@/pages/Mark/index'
import Tabel from '@/pages/Tabels/index'
import Login from '@/pages/Login/index'
import Layout from '@/Layout/index'
import Echarts from '@/pages/Echart/index'
// import Split from '@/pages/Split/index'
import VueParticles from 'vue-particles'

import 'iview/dist/styles/iview.css'// 导入样式

Vue.use(Router)
Vue.use(VueParticles)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'Home',
      component: Layout,
      children: [
        {
          path: '/',
          // name: 'Home',
          component: Home
        },
        // {
        //   path: '/mark',
        //   name: 'markdown',
        //   component: Mark
        // },
        {
          path: '/tabel',
          name: '表格',
          component: Tabel
        },
        {
          path: '/echarts',
          name: '出勤明细',
          component: Echarts
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})
