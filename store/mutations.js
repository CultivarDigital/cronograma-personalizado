import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, authUser) => {
    state.user = {
      id: authUser.uid,
      email: authUser.email,
      name: authUser.displayName,
      avatar: authUser.photoURL,
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
