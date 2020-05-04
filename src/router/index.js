import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Bluetooth from '../views/Bluetooth.vue'
import Raspi from '../views/Raspi.vue'
import Settings from '../views/Settings.vue'
import Wifi from '../views/Wifi.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/bluetooth',
    name: 'Bluetooth',
    component: Bluetooth
  },
  {
    path: '/raspi',
    name: 'Raspi',
    component: Raspi
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/wifi',
    name: 'WLAN',
    component: Wifi
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  routes
})

export default router
