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
  setCurrentContract({ commit }, currentContract) {
    commit('setCurrentContract', currentContract)
  },
  setGreeted({ commit }, status) {
    commit('setGreeted', status)
  },
  toggleDrawer({ commit }, status) {
    commit('toggleDrawer', status)
  },
  logout({ commit }) {
    this.$firebase.logout()
    commit('LOGOUT')
  },
  async checkUnreadNotifications({ commit, state }) {
    const syncedAt = state.notificationsSyncedAt
    if (!syncedAt || this.$moment(syncedAt).diff(Date.now(), 'seconds') > 10) {
      console.log('loadNotifications')
      const unreadNotifications = await this.$axios.$get(
        '/v1/notifications/unread'
      )
      if (unreadNotifications !== null && unreadNotifications !== undefined) {
        commit('setUnreadNotifications', unreadNotifications)
      }
    }
  },
}
