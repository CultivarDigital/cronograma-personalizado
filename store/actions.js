export default {
  onAuthStateChanged({ commit }, { authUser, claims }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    commit('SET_AUTH_USER', authUser)
  },
}
