import Vue from 'vue'
import Router from 'vue-router'
import Watch from '@/components/watch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'watch',
      component: Watch
    }
  ]
})
