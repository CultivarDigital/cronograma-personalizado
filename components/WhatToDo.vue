<template>
  <div>
    <p v-if="season" class="text-center pt-2 mb-5">
      <v-chip outlined :class="season.code">
        <v-avatar left>
          <img :src="require('~/assets/img/' + season.code + '.png')" raw />
        </v-avatar>
        <strong>{{ season.label }}</strong>
      </v-chip>
    </p>
    <div class="d-flex align-center justify-center mb-2">
      <v-btn icon left color="primary" @click="changeDay(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-row class="text-center align-center">
        <v-col cols="4">
          <a @click="changeDay(-1)">
            <DayInfo :day="previousDay" />
          </a>
        </v-col>
        <v-col cols="4">
          <DayInfo :day="day" main hightlight />
        </v-col>
        <v-col cols="4">
          <a @click="changeDay(1)">
            <DayInfo :day="nextDay" />
          </a>
        </v-col>
      </v-row>
      <v-btn icon left color="primary" @click="changeDay(1)">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <v-container v-if="moon">
      <div class="item item-body text-center">
        <div class="img-wrapper mb-4">
          <img
            :src="require('~/assets/img/' + moon.info.image)"
            raw
            style="max-width: 200px"
          />
        </div>
        <!-- <p>
          <small>{{ moon.info.description }}</small>
        </p> -->
        <div>
          <div v-for="action in moon.info.good_to" :key="action.title">
            <div v-if="action.categories">
              <p class="mb-5">
                <strong>
                  <small>{{ action.title }}:</small>
                </strong>
                <v-chip
                  v-for="category in action.categories"
                  :key="category"
                  color="primary"
                  small
                  class="mr-1 mb-1 darken-1"
                >
                  {{ category }}
                </v-chip>
              </p>
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
              <div>
                <p>
                  <small>
                    <strong> {{ action.title }}: </strong>
                    {{ action.description }}
                  </small>
                </p>
              </div>
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
      <!-- <v-calendar-daily locale="pt-br"></v-calendar-daily> -->
    </v-container>
  </div>
</template>

<script>
import moon from '@/data/moon'
import seasons from '@/data/seasons'
const today = new Date()
today.setDate(today.getDate())
today.setHours(18, 0, 0)
export default {
  data() {
    return {
      seasons,
      day: today,
    }
  },
  computed: {
    nextDay() {
      return this.sumDate(this.day, 1)
    },
    previousDay() {
      return this.sumDate(this.day, -1)
    },
    moon() {
      return moon.getInfo(this.day)
    },
    season() {
      const seasonsLabels = {
        spring: 'Primavera',
        summer: 'Verão',
        fall: 'Outono',
        winter: 'Inverno',
      }
      const season = seasons.currentSeason(this.day, 'south')
      return { code: season, label: seasonsLabels[season] }
    },
    diff() {
      return Math.round(moon.diffDates(today, this.day))
    },
  },
  created() {
    // setInterval(() => {
    //   this.changeDay(1)
    // }, 50)
  },
  methods: {
    changeDay(days) {
      this.day = this.sumDate(this.day, days)
    },
    sumDate(date, days) {
      const newDate = new Date(date)
      return new Date(newDate.setDate(newDate.getDate() + days))
    },
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
  },
}
</script>
