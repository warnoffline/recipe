import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import ReceptSoup from '@/pages/ReceptSoup'
import SecondCourse from '@/pages/SecondCourse'
import ReceptDessert from '@/pages/ReceptDessert'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/soup',
    component: ReceptSoup
  },
  {
    path: '/secondCourse',
    component: SecondCourse
  },
  {
    path: '/dessert',
    component: ReceptDessert
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
