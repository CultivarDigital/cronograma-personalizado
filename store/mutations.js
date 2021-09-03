export default {
  LOGOUT: (state) => {
    state.authUser = null
  },
  SET_AUTH_USER: (state, authUser) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      displayName: authUser.displayName,
      photoURL: authUser.photoURL,
      emailVerified: authUser.emailVerified,
    }
  },
  setRegion(state, region) {
    state.region = region
  },
  setSpecies(state, species) {
    state.species = species
  },
  setFilters(state, filters) {
    state.filters = filters
  },
  setPageTitle(state, pageTitle) {
    state.page_title = pageTitle
  },
  setPageDescription(state, pageDescription) {
    state.page_description = pageDescription
  },
  addToUploadPool(state, data) {
    const uploadPool = JSON.parse(JSON.stringify(state.uploadPool))
    uploadPool.push(data)
    state.uploadPool = uploadPool
  },
  removeFromUploadPool(state, hash) {
    let uploadPool = JSON.parse(JSON.stringify(state.uploadPool))
    uploadPool = uploadPool.filter((item) => item.hash !== hash)
    state.uploadPool = uploadPool
  },
}
