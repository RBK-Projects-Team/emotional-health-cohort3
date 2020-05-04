import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      localStorage.setItem('user', JSON.stringify(userData))
      Axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
      state.user = userData
    },
    // LOGOUT, clear user data, local storage and axios header
    CLEAR_USER_DATA (){
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    // Login Submit to backend
    loginSubmit({ commit}, credentilas) {
      return Axios
      .post('http://127.0.0.1:3000/login', credentilas)
      .then(({data}) => {
        commit('SET_USER_DATA', data)
      })
      .catch(err => { this.status = err.response.status })
    }, // Survey Submit to Backend
    surveySubmit({ commit}, credentilas1) {
      return Axios
      .post('http://127.0.0.1:3000/submit', credentilas1)
      .then(({data}) => {
        commit('SET_USER_DATA', data)
      })
      .catch(err => { this.status = err.response.status })
    }, // Logout Submit on fronten (Delete user Sessesion)
    logoutSubmit({commit}){
      commit('CLEAR_USER_DATA')
    }
  }
  // getters:{
  //   loggedIn(state){
  //     return !!state.user
  //   }
  // }
})
