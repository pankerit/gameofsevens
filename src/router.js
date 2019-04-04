import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Season from './views/Season.vue'
import season8 from './views/season8.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/season/:id',
      component: Season
    },
    {
      path: '/season8',
      component: season8
    }
  ]
})
