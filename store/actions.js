export default {
  setUser({ commit }, { authUser }) {
    if (!authUser) {
      commit('LOGOUT')
      return
    }
    commit('SET_AUTH_USER', authUser)
  },
  logout({ commit }) {
    commit('LOGOUT')
  },
}
