<template>
  <div>
    <p v-if="season" class="text-center pt-2 mb-3">
      <v-chip outlined :class="season.code">
        <v-avatar left>
          <img :src="require('~/assets/img/' + season.code + '.png')" raw />
        </v-avatar>
        <strong>{{ season.label }}</strong>
      </v-chip>
    </p>
    <v-container>
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
    </v-container>
    <v-container v-if="moon">
      <div class="img-wrapper mb-4">
        <img
          :src="require('~/assets/img/' + moon.info.image)"
          raw
          style="max-width: 180px"
        />
      </div>
      <!-- <p>
          <small>{{ moon.info.description }}</small>
        </p> -->
      <div class="text-center">
        <div>
          <div v-for="action in moon.info.good_to" :key="action.title">
            <div v-if="action.categories">
              <div class="mb-3">
                <span class="caption">{{ action.title }}: </span>
                <v-chip
                  v-for="category in action.categories"
                  :key="category"
                  color="primary"
                  small
                  class="mr-1 mb-1 darken-1"
                >
                  {{ category }}
                </v-chip>
              </div>
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
                <span class="caption">{{ action.title }}: </span>
                <v-chip
                  v-for="item in action.description.split(', ')"
                  :key="item"
                  color="primary"
                  small
                  class="mr-1 mb-1 darken-1"
                >
                  {{ item }}
                </v-chip>
              </div>
            </div>
          </div>
        </div>
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
