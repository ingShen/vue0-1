// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
// import DetailCouPage from './pages/detail/count'
// import DetailForPage from './pages/detail/forecast'
// import DetailPubPage from './pages/detail/publish'
// Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  // vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
  mode: 'history',
  // 1.映射关系
  routes: [
    {
      path:'/',
      component: IndexPage
    },
    {
      path:'/detail',
      component: DetailPage,
      children: [
        {
          path:'analysis',
          component: DetailAnaPage
        }
        // {
        //   path:'count',
        //   component: DetailCouPage
        // },
        // {
        //   path:'forecast',
        //   component: DetailForPage
        // },
        // {
        //   path:'publish',
        //   component: DetailPubPage
        // },
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
