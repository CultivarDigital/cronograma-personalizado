<template>
  <div>
    <v-app>
      <BottomNavigation />
      <DrawerNavigation />
      <v-main>
        <Nuxt />
        <div class="text-center">
          <v-divider />
          <br />
          <Footer />
        </div>
      </v-main>
      <Portal />
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
    species() {
      return this.$store.state.species
    },
  },
  created() {
    this.$firebase.getUser()
    this.checkEmailLogin()
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
