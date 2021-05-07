import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: Math.floor(Math.random() * 900) + 1
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
