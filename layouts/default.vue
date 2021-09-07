<template>
  <div id="app">
    <div id="wrapper" class="bg-brown-1">
      <Navbar />
      <b-row no-gutters>
        <b-col md="3" fluid class="sidebar-wrapper d-none d-md-block">
          <Sidebar />
        </b-col>
        <b-col md="9" class="main bg-white pb-4">
          <div v-if="loading" class="text-center">
            <b-spinner />
          </div>
          <div v-else>
            <Nuxt />
            <div class="text-center mobile-footer">
              <hr />
              <Footer />
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <Portal />
    <client-only>
      <notifications />
    </client-only>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      loading: true,
    }
  },
  async created() {
    try {
      await this.$fire.authReady()
    } catch (error) {
      console.log('fire.authReady ERROR: ', error)
    }
    await this.$fire.authReady()
    this.checkEmailLogin()
    this.loading = false
    this.loadData()
  },
  methods: {
    async checkEmailLogin() {
      if (this.$route.query.email_login) {
        const href = this.baseURL + this.$route.fullPath
        if (this.$fire.auth.isSignInWithEmailLink(href)) {
          // Additional state parameters can also be passed via URL.
          // This can be used to continue the user's intended action before triggering
          // the sign-in operation.
          // Get the email if available. This should be available if the user completes
          // the flow on the same device where they started it.
          let email = await this.getLocalItem('emailForSignIn')
          if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation')
          }
          // The client SDK will parse the code from the link for you.
          this.$fire.auth
            .signInWithEmailLink(email, href)
            .then((result) => {
              this.setLocalItem('emailForSignIn', null)
              this.notify('Seja bem vindo')
              this.loading = false
            })
            .catch(this.firebaseError)
        }
      }
    },
    async loadData() {
      const species = await this.$axios.$get('/api/species')
      if (species) {
        this.$store.commit(
          'setSpecies',
          species.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
        )
        const filters = {
          specie_categories: this.getFilters(species, 'categories'),
          specie_stratum: this.getFilters(species, 'stratum'),
          specie_cycle: this.getFilters(species, 'cycle'),
          specie_climate: this.getFilters(species, 'climate'),
          specie_origin: this.getFilters(species, 'origin'),
          specie_height: this.getFilters(species, 'height'),
        }
        this.$store.commit('setFilters', filters)
      }
    },
    getFilters(species, type) {
      const items = {}
      species.forEach((specie) => {
        if (specie[type]) {
          specie[type].forEach((item) => {
            items[item] = true
          })
        }
      })
      return Object.keys(items)
        .sort((a, b) => {
          return a.localeCompare(b)
        })
        .filter((item) => item)
    },
  },
}
</script>
