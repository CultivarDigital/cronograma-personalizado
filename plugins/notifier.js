/* eslint-disable no-console */
import firebaseTranslations from '@/data/firebase-translations'

export default ({ store }, inject) => {
  inject('notifier', {
    notify({ content = '', color = 'success' }) {
      store.commit('snackbar/showMessage', { content, color })
    },
    success(content) {
      store.commit('snackbar/showMessage', { content, color: 'green' })
    },
    error(content) {
      store.commit('snackbar/showMessage', { content, color: 'red' })
    },
    dbError(error) {
      console.log('firebaseError ')
      console.log(error)
      let message = 'Ocorreu um erro inesperado. Tente novamente mais tarde'

      if (error) {
        const msg = firebaseTranslations[error.code]
        if (msg) {
          message = msg
        } else if (error.message) {
          message = error.message
        }
      }
      store.commit('snackbar/showMessage', {
        content: message,
        color: 'red',
      })
    },
  })
}
