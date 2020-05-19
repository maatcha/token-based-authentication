import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    STORE_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
      console.log(axios.defaults.headers.common)
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios.post('//localhost:3000/register', credentials).then(({ data }) => {
        commit('STORE_USER_DATA', data)
      })
    }
  }
})
