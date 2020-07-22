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
    path: '/Neumorphism',
    name: 'Neumorphism',
    component: () => import(/* webpackChunkName: "neumorphism" */ '../views/Neumorphism.vue')
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import(/* webpackChunkName: "examples" */ '../views/Examples.vue')
  },
  {
    path: '/usability',
    name: 'Usability',
    component: () => import(/* webpackChunkName: "usability" */ '../views/Usability.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
