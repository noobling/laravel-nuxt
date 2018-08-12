export const strict = false

export const state = () => ({
  navDraw: false,
  loading: false
})

export const getters = {
  navDraw: state => state.navDraw,
  loading: state => state.loading
}

export const mutations = {
  UPDATE_NAV_DRAW(state, { navDraw }) {
    state.navDraw = navDraw
  }
}

export const actions = {
  updateNavDraw({ commit }, payload) {
    commit('UPDATE_NAV_DRAW', payload)
  },
}