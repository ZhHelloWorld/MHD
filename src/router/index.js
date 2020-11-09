import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
import HC from '../views/History&collection'
import Login from '../views/Login'
import Mine from '../views/Mine'
import Rank from '../views/Rank'
import Register from '../views/Register'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import VIP from '../views/VIP'
import Collection from '../views/History&collection/Collection'
import History from '../views/History&collection/history'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/hc',
    component: HC,
    children: [
      {
        path: 'collection',
        component: Collection
      },
      {
        path: 'history',
        component: History
      },
      {
        path: '',
        redirect: '/hc/collection'
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/searchResult',
    component: SearchResult
  },
  {
    path: '/vip',
    component: VIP
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes
})

export default router
