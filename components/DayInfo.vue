<template>
  <div>
    <v-card
      color="primary px-1 py-2 pb-3"
      dark
      outlined
      :class="hightlight ? 'darken-1' : ''"
    >
      <p class="mb-0" :class="hightlight ? 'text-h6' : ''">
        <small v-if="diff === 0" class="mb-3">Hoje</small>
        <small v-else-if="diff === 1" class="mb-3">Amanhã</small>
        <small v-else-if="diff === -1" class="mb-3">Ontem</small>
        <small v-else>{{ $moment(day).format('DD MMM') }}</small>
      </p>
      <div>
        <v-icon>{{ moon.icon }}</v-icon>
      </div>
    </v-card>
  </div>
</template>

<script>
import moon from '@/data/moon'

const today = new Date()
today.setDate(today.getDate())
today.setHours(18, 0, 0)
export default {
  props: {
    day: {
      type: Date,
      default: new Date(),
    },
    hightlight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    moon() {
      return moon.getInfo(this.day)
    },
    diff() {
      return Math.round(moon.diffDates(today, this.day))
    },
  },
}
</script>
