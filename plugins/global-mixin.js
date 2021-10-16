import Vue from 'vue'

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true

  const globalMixin = {
    computed: {
      isLoggedIn() {
        return this.$auth.user && this.$auth.user.uid
      },
      currentRegion() {
        return this.$auth.user && this.$auth.user.region
          ? this.$auth.user.region
          : null
      },
      baseURL() {
        return process.env.BASE_URL
      },
    },
    methods: {
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
