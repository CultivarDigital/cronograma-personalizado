<template>
  <div>
    <div class="d-flex justify-center align-center mb-8">
      <div
        class="d-flex justify-center align-center mr-3"
        :style="
          'width: 67px; height: 67px; background-position: center; background: url(' +
          require('~/assets/img/bg-user.png') +
          ')'
        "
      >
        <User size="53px" />
      </div>

      <div v-if="$auth.user.name" class="primary--text" style="font-size: 24px">
        <p
          v-for="n in $auth.user.name
            .split(' ')
            .filter((name) => name.length > 3)
            .slice(0, 2)"
          :key="n"
          class="mb-0"
          style="line-height: 26px"
        >
          {{ n }}
        </p>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col>
          <v-card color="#EE605E" dark class="pa-4" rounded="lg">
            <p style="line-height: 16px" class="mb-6">
              <small>Tratamentos da semana</small>
            </p>
            <p class="mb-0"><strong>Hidratação</strong></p>
            <p class="mb-0"><strong>Nutrição</strong></p>
            <p class="mb-0"><strong>Umectação</strong></p>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            elevation="lg"
            style="background-color: rgba(123, 163, 162, 0.4)"
            dark
            class="font-weight-bold text-center pa-5"
          >
            <p class="mb-0" style="font-size: 14px">Você está na</p>
            <p class="mb-0" style="font-size: 45px"><strong>12ª</strong></p>
            <p class="mb-0" style="font-size: 14px"><strong>Semana</strong></p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
}
</script>
