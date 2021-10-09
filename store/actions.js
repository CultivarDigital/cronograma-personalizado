const getFilters = (species, type) => {
  const items = {}
  species.forEach((specie) => {
    if (specie[type]) {
      specie[type].forEach((item) => {
        items[item] = true
      })
    }
  })
  return Object.keys(items)
    .sort((a, b) => {
      return a.localeCompare(b)
    })
    .filter((item) => item)
}

export default {
  setUser(context, { authUser }) {
    context.commit('LOGOUT')
    if (!authUser) {
      return
    }
    this.$firebase
      .get('users', authUser.uid)
      .then((profile) => {
        if (profile) {
          authUser.bio = profile.bio
          authUser.region = profile.region
          context.commit('SET_AUTH_USER', authUser)
        } else {
          this.$firebase
            .set('users', authUser.uid, {
              displayName: authUser.displayName,
              photoURL: authUser.photoURL,
            })
            .then((profile) => {
              context.commit('SET_AUTH_USER', authUser)
            })
        }
      })
      .catch()
  },
  setPage({ commit }, page) {
    commit('setPage', page)
  },
  setProducts({ commit }, products) {
    commit('set', { collectionName: 'products', products })
  },
  setSpecies({ commit }, species) {
    const items = species.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    commit('set', { collectionName: 'species', items })

    if (items) {
      const filters = {
        specie_categories: getFilters(items, 'categories'),
        specie_stratum: getFilters(items, 'stratum'),
        specie_cycle: getFilters(items, 'cycle'),
        specie_climate: getFilters(items, 'climate'),
        specie_origin: getFilters(items, 'origin'),
        specie_height: getFilters(items, 'height'),
      }
      commit('set', { collectionName: 'species_filters', items: filters })
    }
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
  toggleDrawer({ commit }, status) {
    commit('toggleDrawer', status)
  },
  logout({ commit }) {
    this.$firebase.logout()
    commit('LOGOUT')
  },
}
