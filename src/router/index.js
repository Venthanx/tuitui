import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home')
const Profile = () => import('@/views/profile')

Vue.use(VueRouter)

  const routes = [
    { path: '', redirect: '/Home' },
    { path: '/Home', component: Home },
    { path: '/Profile', component: Profile },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
