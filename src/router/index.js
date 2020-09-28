import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/dl',
    name: 'dl',
    component: () => import('../views/Dl.vue')
  },
  {
    path: '/zc',
    name: 'zc',
    component: () => import('../views/Zc.vue')
  },
  {
    path: '/zhu',
    name: 'zhu',
    component: () => import('../views/Zhu.vue')
  },{
    path: '/tc',
    name: 'tc',
    component: () => import('../views/Tc.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
