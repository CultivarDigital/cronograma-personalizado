import Vue from 'vue'

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
        if (this.$localForage) {
          return await this.$localForage.getItem(key)
        }
      },
      async setLocalItem(key, value) {
        if (this.$localForage) {
          return await this.$localForage.setItem(key, value)
        }
      },
      notify(msg, type) {
        this.$notifier.notify({
          content: msg,
          color: type === 'error' ? 'red' : 'green',
        })
      },
    },
  }

  Vue.mixin(globalMixin)
}
