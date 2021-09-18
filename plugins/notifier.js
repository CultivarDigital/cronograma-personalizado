export default ({ app, store }, inject) => {
  inject('notifier', {
    notify({ content = '', color = '' }) {
      store.commit('snackbar/showMessage', { content, color })
    },
  })
}
