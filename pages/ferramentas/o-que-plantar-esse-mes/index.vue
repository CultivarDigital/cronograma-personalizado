<template>
  <div>
    <TopNavigation
      :links="[['Ferramentas', '/ferramentas']]"
      :active="'O que plantar em ' + currentMonth.name.toLowerCase()"
      :description="currentMonth.description"
    />
    <v-container>
      <div class="text-center">
        <h3 class="text-center mb-3">{{ currentMonth.name }}</h3>
        <p>{{ currentMonth.description }}</p>
        <p>
          Confira abaixo algumas sugestões para este mês no
          <strong>{{ currentRegion || 'Brasil' }}</strong
          >:
        </p>
      </div>
    </v-container>
    <Species :species="species" parent="/ferramentas/o-que-plantar-esse-mes" />
  </div>
</template>
<script>
import meses from '@/data/meses.json'
export default {
  computed: {
    species() {
      return this.$store.state.species.filter((specie) => {
        if (specie.planting_time) {
          if (!this.currentRegion) return true
          if (specie.planting_time[this.currentRegion] === 'ano todo') {
            return true
          } else if (specie.planting_time[this.currentRegion] === '*') {
            return false
          } else {
            const planting = specie.planting_time[this.currentRegion].split('-')
            const planting1 = meses.find(
              (mes) => mes.code === planting[0]
            ).number
            const planting2 = meses.find(
              (mes) => mes.code === planting[1]
            ).number

            if (planting1 <= planting2) {
              if (
                this.currentMonth.number >= planting1 &&
                this.currentMonth.number <= planting2
              ) {
                return true
              }
            } else if (
              this.currentMonth.number >= planting1 &&
              this.currentMonth.number <= 12 &&
              this.currentMonth.number >= 1 &&
              this.currentMonth.number <= planting2
            ) {
              return true
            }
          }
          return false
        }
        return false
      })
    },
    currentMonth() {
      const month = new Date().getMonth() + 1
      return meses.find((mes) => mes.number === month)
    },
  },
}
</script>
