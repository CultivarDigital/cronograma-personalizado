export const state = () => {
  return {
    region: null,
    page_title: null,
    page_description: null,
    species: [],
    specie_categories: [],
  }
}

export const mutations = {
  setRegion(state, region) {
    state.region = region
  },
  setSpecies(state, species) {
    state.species = species
  },
  setSpecieCategories(state, specieCategories) {
    state.specie_categories = specieCategories
  },
  setPageTitle(state, pageTitle) {
    state.page_title = pageTitle
  },
  setPageDescription(state, pageDescription) {
    state.page_description = pageDescription
  },
}
