<template>
  <div>
    <v-app>
      <BottomNavigation />
      <DrawerNavigation />
      <v-main>
        <OfflineMode />
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
    authUser() {
      return this.$store.state.authUser
    },
    species() {
      return this.$store.state.species
    },
  },
  created() {
    this.$db.getUser()
    this.loadSpecies()
    this.checkEmailLogin()
  },
  methods: {
    loadSpecies() {
      if (!this.species || !this.species.length) {
        this.$db
          .getList('species')
          .then((species) => {
            this.$store.dispatch('setSpecies', species)
          })
          .catch(this.$notifier.dbError)
      }
    },
    checkEmailLogin() {
      if (this.$route.query.email_login) {
        const href = this.baseURL + this.$route.fullPath
        this.$db
          .validateLoginWithEmail(href)
          .then(() => {
            this.$notifier.success('Seja bem vindo')
          })
          .catch(this.$notifier.dbError)
      }
    },
  },
}
</script>
