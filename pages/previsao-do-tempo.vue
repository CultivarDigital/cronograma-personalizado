<template>
  <div>
    <TopNavigation active="Previsão do tempo" />
    <div v-if="weather">
      <div class="text-center">
        <h3>Previsão do tempo</h3>
        <p class="mb-0">
          <small>{{ $moment(weather.date).format('DD/MM/YYYY') }}</small>
        </p>
        <h4>
          {{ weather.data.location.name }} - {{ weather.data.location.region }}
        </h4>
        <p>
          <img :src="weather.data.forecast.forecastday[0].day.condition.icon" />
          <br />
          <strong>{{
            weather.data.forecast.forecastday[0].day.condition.text
          }}</strong>
        </p>
        <div>
          <div
            v-if="
              weather.data.forecast.forecastday[0].day.daily_chance_of_rain > 0
            "
          >
            <v-sparkline
              :smooth="16"
              label-size="4"
              fill
              :gradient="['#2196F3', '#1feaea']"
              :line-width="3"
              :labels="
                weather.data.forecast.forecastday[0].hour.map(
                  (hour) => hour.time.split(' ')[1]
                )
              "
              :value="
                weather.data.forecast.forecastday[0].hour.map(
                  (hour) => hour.chance_of_rain
                )
              "
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
            <v-alert color="blue" dark>
              Hoje tem
              {{
                weather.data.forecast.forecastday[0].day.daily_chance_of_rain
              }}
              % de chance de chover
            </v-alert>
          </div>
          <v-divider class="my-6"></v-divider>
          <div>
            <h5>Temperatura</h5>
            <p>
              Min: {{ weather.data.forecast.forecastday[0].day.mintemp_c }} Max:
              {{ weather.data.forecast.forecastday[0].day.maxtemp_c }}
            </p>
            <v-sparkline
              :smooth="16"
              label-size="4"
              fill
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :labels="
                weather.data.forecast.forecastday[0].hour.map(
                  (hour) => hour.time.split(' ')[1]
                )
              "
              :value="
                weather.data.forecast.forecastday[0].hour.map(
                  (hour) => hour.temp_c
                )
              "
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
          </div>
          <v-divider class="my-6"></v-divider>
          <div class="mb-6">
            <h5>Vento</h5>
            <p>
              Max:
              {{ weather.data.forecast.forecastday[0].day.maxwind_kph }} km/h
            </p>
            <v-sparkline
              :smooth="16"
              label-size="4"
              fill
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :labels="
                weather.data.forecast.forecastday[0].hour.map(
                  (hour) => hour.time.split(' ')[1]
                )
              "
              :value="
                weather.data.forecast.forecastday[0].hour.map(
                  (hour) => hour.wind_kph
                )
              "
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weather: null,
    }
  },
  async created() {
    this.weather = await this.$axios.$get('/v1/weather')
  },
}
</script>
