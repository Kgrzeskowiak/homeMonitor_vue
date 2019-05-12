import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/SensorList',
      name: 'SensorList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/SensorList.vue')
    },
    {
    path: '/Charts',
    name: 'Charts',
    component: () => import('./views/Charts.vue')
    },
    {
    path: '/ConfigAlarm',
    name: 'ConfigAlarm',
    component: () => import('./views/ConfigAlarm.vue')
    }
  ]
})
