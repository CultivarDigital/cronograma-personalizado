<template>
  <div>
    <v-container>
      <div v-if="moon" class="item item-body text-center">
        <h3>Hoje é dia de {{ moon.title }}</h3>
        <p class="mb-3">
          <small v-if="next_moon > 1">
            Faltam <strong>{{ Math.ceil(next_moon) }} dias</strong> para
            <strong>{{ moon.next_moon }}</strong>
          </small>
          <small v-else> Amanhã já entra o {{ moon.next_moon }}</small>
        </p>
        <div class="img-wrapper">
          <CachedImage :src="require('~/assets/img/' + moon.image)" raw />
        </div>
        <p>{{ moon.description }}. Esta fase é boa para:</p>
        <div>
          <div v-for="action in moon.good_to" :key="action.title">
            <div v-if="action.categories">
              <strong>{{ action.title }}:</strong>
              <p>{{ action.categories.join(', ') }}</p>
              <div class="mb-3">
                <n-link
                  v-for="specie in getSpecies(action.categories)"
                  :key="specie.id"
                  :to="'/ferramentas/catalogo-de-especies/' + specie.id"
                >
                  <v-avatar size="42" rounded="lg" class="mr-2 mb-2">
                    <CachedImage
                      :title="specie.name"
                      :src="specie.images[0]"
                      thumb
                      size="42"
                      color="primary"
                    />
                  </v-avatar>
                </n-link>
              </div>
            </div>
            <div v-else-if="action.description">
              <p>
                <strong>{{ action.title }}</strong>
                {{ action.description }}
              </p>
            </div>
          </div>
        </div>
        <v-btn
          small
          color="primary"
          class="mb-3"
          to="/guias/guia-de-cultivo/quando-plantar"
        >
          Saiba mais
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import lune from 'lune'
import moon from '@/data/moon'
export default {
  data() {
    return {
      moon_phase: null,
      next_moon: null,
    }
  },
  computed: {
    moon() {
      if (moon && this.moon_phase) {
        return moon[this.moon_phase]
      }
      return null
    },
  },
  created() {
    const today = new Date()
    today.setDate(today.getDate())
    this.calcMoonPhase(today)
  },
  methods: {
    getSpecies(categories) {
      return this.$store.state.species.filter((specie) => {
        if (specie.planting_time) {
          return specie.categories.find((category) =>
            categories.includes(category)
          )
        }
        return false
      })
    },
    calcMoonPhase(date) {
      const currentPhase = lune.phase(date)
      const recentPhases = lune.phase_hunt(date)
      const phase = currentPhase.phase * 100
      if (phase < 25) {
        this.moon_phase = 'nova'
        this.next_moon = this.diffDates(date, new Date(recentPhases.q1_date))
      } else if (phase < 50) {
        this.moon_phase = 'crescente'
        this.next_moon = this.diffDates(date, new Date(recentPhases.full_date))
      } else if (phase < 75) {
        this.moon_phase = 'cheia'
        this.next_moon = this.diffDates(date, new Date(recentPhases.q3_date))
      } else {
        this.moon_phase = 'minguante'
        this.next_moon = this.diffDates(
          date,
          new Date(recentPhases.nextnew_date)
        )
      }

      return currentPhase
    },
    diffDates(date1, date2) {
      return (date2 - date1) / (1000 * 60 * 60 * 24)
    },
  },
}
</script>
