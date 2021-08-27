export const state = () => {
  return {
    region: null,
    page_title: null,
    page_description: null,
    species: [],
    filters: {},
    uploadPool: [],
  }
}

export const mutations = {
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
