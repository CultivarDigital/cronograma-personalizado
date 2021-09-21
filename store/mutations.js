export default {
  LOGOUT: (state) => {
    console.log('LOGOUTLOGOUTLOGOUTLOGOUTLOGOUTLOGOUT')
    state.authUser = null
  },
  SET_AUTH_USER: (state, authUser) => {
    state.authUser = null
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      displayName: authUser.displayName,
      photoURL: authUser.photoURL,
      emailVerified: authUser.emailVerified,
      bio: authUser.bio,
      region: authUser.region,
    }
  },
  togglePortal(state, show) {
    state.showPortal = show
  },
  setSpecies(state, species) {
    state.species = species
  },
  setFilters(state, filters) {
    state.filters = filters
  },
  setPage(state, page) {
    state.page = page
  },
  setOfflineMode(state, offlineMode) {
    state.offlineMode = offlineMode
  },
}
