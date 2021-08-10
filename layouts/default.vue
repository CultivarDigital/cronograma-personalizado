<template>
  <div id="app">
    <div id="wrapper" class="bg-brown-1">
      <Navbar />
      <b-row no-gutters>
        <b-col md="3" fluid class="sidebar-wrapper d-none d-md-block">
          <Sidebar />
        </b-col>
        <b-col md="9" class="main bg-white pb-4">
          <Nuxt />
          <div class="text-center mobile-footer">
            <hr />
            <Footer />
          </div>
        </b-col>
      </b-row>
    </div>
    <Login />
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
  async created() {
    if (this.$route.query.regiao) {
      this.$store.commit('setRegion', this.$route.query.regiao)
    }
    const species = await this.$axios.$get('/api/species')
    if (species) {
      this.$store.commit('setSpecies', species)
      const categories = {}
      species.forEach((specie) => {
        specie.category.forEach((category) => {
          categories[category] = true
        })
      })
      this.$store.commit(
        'setSpecieCategories',
        Object.keys(categories).sort(function (a, b) {
          return a.localeCompare(b)
        })
      )
    }
  },
}
</script>
