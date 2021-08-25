import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/delivery',
    name: 'Delivery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Delivery.vue')
  },
  {
    path: '/steps',
    name: 'Steps',
    component: () => import(/* webpackChunkName: "about" */ '../views/Steps.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import(/* webpackChunkName: "about" */ '../views/Statistics.vue')
  },
  {
    path: '/devices',
    name: 'Devices',
    component: () => import(/* webpackChunkName: "about" */ '../views/Devices.vue')
  },
  {
    path: '/tasks:index',
    name: 'Tasks',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tasks.vue')
  },
  {
    path: '/info_device:index',
    name: 'InfoDevices',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoDevices.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
