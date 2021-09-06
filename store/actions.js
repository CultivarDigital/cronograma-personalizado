export default {
  setUser({ commit }, { authUser }) {
    console.log('this.$fire')
    console.log(this.$fire)
    if (!authUser) {
      commit('LOGOUT')
      return
    }
    const profileRef = this.$fire.firestore
      .collection('users')
      .doc(authUser.uid)

    profileRef.get().then((profile) => {
      if (profile.exists) {
        console.log('Perfil já existe')
        const data = profile.data()
        authUser.bio = data.bio
        authUser.region = data.region

        console.log(authUser)
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
  logout({ commit }) {
    commit('LOGOUT')
  },
}
