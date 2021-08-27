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
    this.$bvModal.show('portal-modal')
    if (this.$route.query.regiao) {
      this.$store.commit('setRegion', this.$route.query.regiao)
    }
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
        specie_luminosity: this.getFilters(species, 'luminosity'),
        specie_cycle: this.getFilters(species, 'cycle'),
        specie_climate: this.getFilters(species, 'climate'),
        specie_origin: this.getFilters(species, 'origin'),
        specie_height: this.getFilters(species, 'height'),
      }
      this.$store.commit('setFilters', filters)
    }
    this.loading = false
  },
  methods: {
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
