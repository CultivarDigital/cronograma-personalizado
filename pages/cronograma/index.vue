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
            24
          </div>
          <div class="ml-3">
            <div
              style="
                color: rgba(123, 163, 162, 0.6);
                font-size: 18px;
                line-height: 20px;
              "
            >
              Qua
            </div>
            <div
              style="
                color: rgba(123, 163, 162, 0.4);
                font-size: 16px;
                line-height: 18px;
              "
            >
              Fev 2022
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
      <div class="d-flex justify-center align-center text-center mb-6">
        <div class="week">
          <div>M1</div>
          <h3>S1</h3>
        </div>
        <div class="week">
          <div>M1</div>
          <h3>S2</h3>
        </div>
        <div class="week">
          <div>M1</div>
          <h3>S3</h3>
        </div>
        <div class="week active">
          <div>M1</div>
          <h3>S4</h3>
        </div>
        <div class="week">
          <div>M2</div>
          <h3>S1</h3>
        </div>
        <div class="week">
          <div>M2</div>
          <h3>S2</h3>
        </div>
        <div class="week">
          <div>M2</div>
          <h3>S3</h3>
        </div>
      </div>
    </v-container>
    <v-divider class="mb-6"></v-divider>
    <v-container class="cronograma px-3">
      <v-row>
        <v-col cols="4">
          <h6 class="subtitle-1 text-center">Quando</h6>
        </v-col>
        <v-col cols="8">
          <h6 class="subtitle-1">Tratamento</h6>
        </v-col>
      </v-row>
      <v-row class="align-center item">
        <v-col cols="4">
          <div class="red--text body-2">Esta semana</div>
        </v-col>
        <v-col cols="8">
          <v-btn
            style="background-color: rgba(238, 96, 94, 0.8)"
            dark
            block
            x-large
            elevation="6"
            class="justify-space-between"
          >
            Hidratação
            <v-icon right>mdi-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="align-center item">
        <v-col cols="4">
          <div class="red--text body-2">Esta semana</div>
        </v-col>
        <v-col cols="8">
          <v-btn
            style="background-color: #939393"
            dark
            block
            x-large
            elevation="6"
            class="justify-space-between"
          >
            Nutrição
            <v-icon right>mdi-check-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="align-center item">
        <v-col cols="4">
          <div class="red--text body-2">Esta semana</div>
        </v-col>
        <v-col cols="8">
          <v-btn
            style="background-color: rgba(238, 96, 94, 0.6)"
            dark
            block
            x-large
            elevation="6"
            class="justify-space-between"
          >
            Nutrição
            <v-icon right>mdi-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4"> </v-col>
        <v-col cols="8">
          <h6 class="subtitle-1">Complementares</h6>
        </v-col>
      </v-row>
      <v-row class="align-center item">
        <v-col cols="4">
          <div class="body-2" style="color: rgba(123, 163, 162, 0.8)">
            Noite anterior a cada tratamento
          </div>
        </v-col>
        <v-col cols="8">
          <v-btn
            style="background-color: rgba(123, 163, 162, 0.8)"
            dark
            block
            x-large
            elevation="6"
            class="justify-space-between"
          >
            Umectação
            <v-icon right>mdi-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
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
    }
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
