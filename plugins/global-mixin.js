import Vue from 'vue'

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true

  const globalMixin = {
    computed: {
      isLoggedIn() {
        return this.currentUser && this.currentUser.id
      },
      currentUser() {
        return this.$store.state.user
      },
      currentRegion() {
        return this.currentUser && this.currentUser.region
          ? this.currentUser.region
          : this.$store.state.region
      },
      baseURL() {
        return this.$axios.defaults.baseURL || process.env.BASE_URL
      },
    },
    methods: {
      async getLocalItem(key) {
        return await this.$localForage.getItem(key)
      },
      async setLocalItem(key, value) {
        return await this.$localForage.setItem(key, value)
      },
      userLabel(user) {
        return user ? user.name || user.username || user.email : ''
      },
      notify(msg, type) {
        this.$notify({
          type: type || 'success',
          text: msg,
        })
      },
      showError(error) {
        if (error.response) {
          if (error.response.data) {
            if (
              error.response.status === 401 &&
              error.response.data.includes('invalid signature')
            ) {
              this.notify('Sessão expirada!', 'error')
              this.$auth.logout()
              this.$router.replace('/')
            } else if (error.response.data.message) {
              this.notify(error.response.data.message, 'error')
            } else {
              this.notify(error.response.data, 'error')
            }
          } else {
            this.notify(error.response, 'error')
          }
        }
      },
    },
  }

  Vue.mixin(globalMixin)
}
