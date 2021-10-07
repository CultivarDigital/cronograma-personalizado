export default {
  LOGOUT: (state) => {
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
  toggleDrawer(state, status) {
    state.showDrawer = status
  },
  set(state, data) {
    state[data.collectionName] = data.items
  },
  setPage(state, page) {
    state.page = page
  },
  setOfflineMode(state, offlineMode) {
    state.offlineMode = offlineMode
  },
}
