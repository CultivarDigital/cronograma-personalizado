export default {
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
  setGreeted(state, hasBeenGreeted) {
    state.hasBeenGreeted = hasBeenGreeted
  },
}
