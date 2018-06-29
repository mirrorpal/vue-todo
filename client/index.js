import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import './assets/style/global.styl'
import createRouter from './config/router'

Vue.use(VueRouter)

const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('beforeEach invoked')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach invoked')
})

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  render: h => h(App)
}).$mount(root)
