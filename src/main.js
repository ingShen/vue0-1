// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Apple from './components/apple'
import Banana from './components/banana'
import RedApple from './components/redapple'

Vue.config.productionTip = false
Vue.use(VRouter)

const router = new VRouter({
  // vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
  mode: 'history',
  // 1.映射关系
  routes: [
    // 重定向
    {
      path:'/',
      redirect: '/apple'
    },
    {
      path: '/apple', // path: '/apple/:color/abc/:type'  添加color参数脑补后，必须完整匹配，否则找不到页面
      name: 'applePage', // 命名路由
      component: Apple,
      children:[
        {
          path:'red',
          component: RedApple
        }
      ]
    },
    {
      path: '/banana',
      component: Banana
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
