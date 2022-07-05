<template>
  <div>
    <v-app>
      <v-main class="d-flex justify-center align-center">
        <Nuxt />
      </v-main>
      <Snackbar />
    </v-app>
  </div>
</template>

<script>
export default {
  computed: {
    baseURL() {
      return process.env.BASE_URL
    },
  },
  created() {
    this.$firebase.getUser()
    this.checkEmailLogin()
    if (this.$auth.user) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    checkEmailLogin() {
      if (this.$route.query.email_login) {
        const href = this.baseURL + this.$route.fullPath
        this.$firebase
          .validateLoginWithEmail(href)
          .then(() => {
            this.$notifier.success('Olá!')
          })
          .catch(this.$notifier.firebaseError)
      }
    },
  },
}
</script>
