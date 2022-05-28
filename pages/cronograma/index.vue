<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Consultoria Mensal" />
      </div>
      <div class="d-flex justify-space-between align-center mb-6">
        <div class="d-flex justify-center align-center">
          <div style="font-size: 42px" class="primary--text font-weight-bold">
            {{
              new Date().toLocaleString('pt-BR', {
                day: 'numeric',
              })
            }}
          </div>
          <div class="ml-3">
            <div
              style="
                color: rgba(123, 163, 162, 0.6);
                font-size: 18px;
                line-height: 20px;
              "
            >
              {{ new Date().toLocaleString('pt-BR', { weekday: 'long' }) }}
            </div>
            <div
              style="
                color: rgba(123, 163, 162, 0.4);
                font-size: 16px;
                line-height: 18px;
              "
            >
              {{
                new Date().toLocaleString('pt-BR', {
                  month: 'short',
                  year: 'numeric',
                })
              }}
            </div>
          </div>
        </div>
        <div class="d-flex justify-center align-center">
          <v-btn
            style="
              background-color: rgba(123, 163, 162, 0.4);
              text-transform: none;
            "
            class="primary--text rounded-1 px-6"
            elevation="0"
            >Esta semana</v-btn
          >
        </div>
      </div>
      <div class="d-flex justify-space-around align-center text-center mb-6">
        <template v-for="month in 4">
          <template v-for="week in 4">
            <div
              v-if="
                month >= currentContract.month &&
                week >= currentContract.week &&
                month * week < currentContract.month * currentContract.week + 4
              "
              :key="'month-' + month + '-week-' + week"
              class="week pointer"
              :class="{
                active:
                  month === currentContract.month &&
                  week === currentContract.week,
              }"
              @click="active = index"
            >
              <div>M{{ month }}</div>
              <h3>S{{ week }}</h3>
            </div>
          </template>
        </template>
      </div>
    </v-container>
    <v-divider class="mb-6"></v-divider>
    <v-container v-if="currentContract.data" class="cronograma px-3">
      <v-row>
        <v-col cols="4">
          <h6 class="subtitle-1 text-center">Quando</h6>
        </v-col>
        <v-col cols="8">
          <h6 class="subtitle-1">Tratamento</h6>
        </v-col>
      </v-row>
      <v-row
        v-for="(item, index) in currentContract.data[currentContract.month - 1][
          currentContract.week - 1
        ].filter((i) => i.value !== 'U')"
        :key="index"
        class="align-center item template-form"
      >
        <v-col cols="4">
          <div class="red--text body-2">Esta semana</div>
        </v-col>
        <v-col cols="8">
          <v-btn
            dark
            block
            x-large
            elevation="6"
            class="justify-space-between ccp-option"
            :class="item.value"
          >
            {{ item.description }}
            <v-icon right>mdi-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        v-if="
          currentContract.data[currentContract.month - 1][
            currentContract.week - 1
          ].filter((i) => i.value === 'U').length > 0
        "
      >
        <v-col cols="4"> </v-col>
        <v-col cols="8">
          <h6 class="subtitle-1">Complementares</h6>
        </v-col>
      </v-row>
      <v-row
        v-for="(item, index) in currentContract.data[currentContract.month - 1][
          currentContract.week - 1
        ].filter((i) => i.value === 'U')"
        :key="index"
        class="align-center item template-form"
      >
        <v-col cols="4">
          <div class="red--text body-2">Esta semana</div>
        </v-col>
        <v-col cols="8">
          <v-btn
            dark
            block
            x-large
            elevation="6"
            class="justify-space-between ccp-option"
            :class="item.value"
          >
            {{ item.description }}
            <v-icon right>mdi-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else class="text-center">
      <v-alert color="info" dark> Estamos montando seu cronograma </v-alert>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filters: {
        search: null,
      },
      active: 4,
      weeks: [
        {
          month: 'M1',
          week: 'S1',
        },
        {
          month: 'M1',
          week: 'S2',
        },
        {
          month: 'M1',
          week: 'S3',
        },
        {
          month: 'M1',
          week: 'S4',
        },
        {
          month: 'M2',
          week: 'S1',
        },
        {
          month: 'M2',
          week: 'S2',
        },
        {
          month: 'M2',
          week: 'S3',
        },
      ],
    }
  },
  computed: {
    currentContract() {
      return this.$store.state.currentContract
    },
  },
  methods: {
    search() {
      if (this.filters.search) {
        this.$router.push('/pri-responde?search=' + this.filters.search)
      } else {
        this.$router.push('/pri-responde')
      }
    },
  },
}
</script>
<style scoped lang="sass">
.cronograma
  .subtitle-1
    color: #939393
    font-weight: 600
  .item
    .col-4
      border-right: 1px solid rgba(215, 215, 215, 0.4)
      text-align: right
    .v-btn
      .v-icon
        font-size: 22px
.week
  color: #919191
  padding: 10px 10px
  h3
    color: rgba(123, 163, 162, 0.6)
  &.active
    background-color: rgba(123, 163, 162, 0.4)
    border-radius: 10px
    h3
      color: #fff
</style>
