import axios from 'axios'
import Cookies from 'js-cookie'

export const state = () => ({
  user: null,
  token: null
})

export const getters = {
  user: state => state.user,
  token: state => state.token
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },

  UPDATE_USER(state, { user }) {
    state.user = user
  }
}

export const actions = {
  saveToken ({ commit, dispatch }, { token, remember }) {
    commit('SET_TOKEN', token)

    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  updateUser ({ commit }, payload) {
    commit('UPDATE_USER', payload)
  },
}