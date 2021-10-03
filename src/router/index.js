import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Character from '../views/character'
import Episode from '../views/episode'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page/:page',
      name: 'Home_page',
      component: Home
    },
    {
      path: '/character/:id',
      name: 'Character',
      component: Character
    },
    {
      path: '/episode',
      name: 'Episode',
      component: Episode
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
