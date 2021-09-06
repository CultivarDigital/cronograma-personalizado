import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: process.env.npm_package_name,
    paths: ['authUser', 'region', 'species', 'specie_categories'],
  })(store)
}
