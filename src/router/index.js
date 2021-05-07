import Vue from 'vue'
import VueRouter from 'vue-router'
import DiscoverPage from '@/views/DiscoverPage.vue'
import FeedPage from '@/views/FeedPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import SignupPage from '@/views/SignupPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  },
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/feed',
    name: 'Feed',
    component: FeedPage
  },
  {
    path: '/discover',
    name: 'Discover',
    component: DiscoverPage
  }
]

const router = new VueRouter({
  routes
})

export default router
