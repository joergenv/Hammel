import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ManufacturersView from '../views/ManufacturersView.vue'
import MemorygameView from '../views/MemoryGameView.vue'
import TractorsView from '../views/TractorsView.vue'
import UsersView from '../views/UsersView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/manufacturers',
    name: 'manufacturerers',
    component: ManufacturersView
  },
  {
    path: '/memorygame',
    name: 'memorygame',
    component: MemorygameView
  },
  {
    path: '/tractors',
    name: 'tractors',
    component: TractorsView
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
