import Vue from 'vue'
import VueRouter from 'vue-router'

import VueMq from 'vue-mq'

import DiscoverTweets from '@/views/DiscoverTweets.vue'
import FeedPage from '@/views/FeedPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import SignupPage from '@/views/SignupPage.vue'
import MyTweets from "@/views/MyTweets.vue"
import DiscoverUsers from "@/views/DiscoverUsers.vue"
import OtherUser from "@/views/OtherUser.vue"

Vue.use(VueMq, {
  breakpoints: {
    mobile: 480,
    tablet: 768,
    laptop: 1024,
    desktop: Infinity,
  }
})

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
    path: '/discovertweets',
    name: 'DiscoverTweets',
    component: DiscoverTweets
  },
  {
    path: '/discoverusers',
    name: 'DiscoverUsers',
    component: DiscoverUsers
  },
  {
    path: '/mytweets',
    name: 'MyTweets',
    component: MyTweets
  },
  {
    path: '/otheruser',
    name: 'OtherUser',
    component: OtherUser
  }
]

const router = new VueRouter({
  routes
})

export default router
