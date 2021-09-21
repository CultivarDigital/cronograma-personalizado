import Vue from 'vue'
import firebaseTranslations from '@/data/firebase-translations'

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true

  const globalMixin = {
    computed: {
      isLoggedIn() {
        return this.authUser && this.authUser.uid
      },
      authUser() {
        const user = this.$store.state.authUser
        return user && user.uid ? user : null
      },
      currentRegion() {
        return this.authUser && this.authUser.region
          ? this.authUser.region
          : null
      },
      baseURL() {
        return process.env.BASE_URL
      },
    },
    methods: {
      setUser(user) {
        this.$store.dispatch('setUser', { authUser: user })
      },
      async getLocalItem(key) {
        return await this.$localForage.getItem(key)
      },
      async setLocalItem(key, value) {
        return await this.$localForage.setItem(key, value)
      },
      notify(msg, type) {
        this.$notifier.notify({
          content: msg,
          color: type === 'error' ? 'red' : 'green',
        })
      },
      firebaseError(error) {
        console.log(error)
        if (error) {
          const msg = firebaseTranslations[error.code]
          if (msg) {
            this.notify(msg, 'error')
          } else if (error.message) {
            this.notify(error.message, 'error')
          }
        } else {
          this.notify('Ocorreu um erro inesperado. Tente novamente mais tarde')
        }
      },
    },
  }

  Vue.mixin(globalMixin)
}
