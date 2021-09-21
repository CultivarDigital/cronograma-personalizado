export default {
  setUser({ commit }, { authUser }) {
    commit('LOGOUT')
    if (!authUser) {
      return
    }
    const profileRef = this.$fire.firestore
      .collection('users')
      .doc(authUser.uid)

    profileRef.get().then((profile) => {
      if (profile.exists) {
        const data = profile.data()
        authUser.bio = data.bio
        authUser.region = data.region

        commit('SET_AUTH_USER', authUser)
      } else {
        profileRef.set({
          displayName: authUser.displayName,
          photoURL: authUser.photoURL,
        })
        commit('SET_AUTH_USER', authUser)
      }
      commit('SET_AUTH_USER', authUser)
    })
  },
  setPage({ commit }, page) {
    commit('setPage', page)
  },
  setOfflineMode({ commit }, offlineMode) {
    commit('setOfflineMode', offlineMode)
  },
  showPortal({ commit }) {
    commit('togglePortal', true)
  },
  hidePortal({ commit }) {
    commit('togglePortal', false)
  },
  logout({ commit }) {
    commit('LOGOUT')
  },
}
