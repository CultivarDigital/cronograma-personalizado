export default {
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
  setGreeted(state, hasBeenGreeted) {
    state.hasBeenGreeted = hasBeenGreeted
  },
  setCurrentContract(state, currentContract) {
    state.currentContract = currentContract
  },
  setUnreadNotifications(state, unreadNotifications) {
    state.unreadNotifications = unreadNotifications
    state.notificationsSyncedAt = Date.now()
  },
}
