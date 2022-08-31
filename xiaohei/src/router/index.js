import Vue from 'vue'
import Router from 'vue-router'
import Watch from '@/components/watch'
import Life from '@/components/life'

Vue.use(Router)

export default new Router({
  routes: [
    // watch和computed
    {
      path: '/',
      name: 'watch',
      component: Watch
    },
    // 生命周期
    {
      path: '/life',
      name: 'life',
      component: Life
    }
  ]
})
