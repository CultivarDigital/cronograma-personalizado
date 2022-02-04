import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: process.env.npm_package_name,
    paths: [
      'auth',
      'region',
      'species',
      'species_filters',
      'products',
      'offlineMode',
      'hasBeenGreeted',
    ],
  })(store)
}
