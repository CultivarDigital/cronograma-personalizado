<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Consultoria Mensal" />
      </div>
      <div class="text-center">
        <h3 class="text-h5 font-weight-bold mb-3" style="color: #acacac">
          Vamos realizar nosso Acompanhamento Mensal?
        </h3>
        <p class="mb-8" style="color: #78746d">
          <small>
            A consultoria mensal é indispensável para o melhor acompanhamento do
            seu Cronograma Capilar Personalizado.
          </small>
        </p>
      </div>
      <div v-if="success">
        <v-card
          color="#F4F4F4"
          to="/consultoria-mensal/id"
          rounded="3"
          class="d-flex justify-start align-center pa-6 primary--text mb-6"
          elevation="3"
        >
          <v-avatar
            left
            color="rgba(123, 163, 162, 0.4)"
            class="primary--text"
            size="60"
          >
            <v-icon dark>mdi-check</v-icon>
          </v-avatar>
          <div class="w-100 ml-3">
            <h4>Pedido realizado com sucesso!</h4>
            <small style="font-size: 10px">
              Clique aqui para realizar o pagamento
            </small>
          </div>
        </v-card>
      </div>
      <div v-else>
        <v-card
          color="#F4F4F4"
          rounded="3"
          class="d-flex justify-start align-center pa-6 primary--text mb-6"
          elevation="3"
          @click="create"
        >
          <v-avatar
            left
            color="rgba(123, 163, 162, 0.4)"
            class="primary--text"
            size="60"
          >
            <strong class="primary--text">1X</strong>
          </v-avatar>
          <div class="w-100 ml-3">
            <h4>USO ÚNICO - R$ 0,00</h4>
            <small style="font-size: 10px"
              >Será feito uma única vez durante o seu CCp</small
            >
          </div>
        </v-card>
        <v-card
          color="#F4F4F4"
          rounded="3"
          class="d-flex justify-start align-center pa-6 primary--text mb-6"
          elevation="3"
          @click="create"
        >
          <v-avatar
            left
            color="rgba(123, 163, 162, 0.4)"
            class="primary--text"
            size="60"
          >
            <strong class="primary--text">3X</strong>
          </v-avatar>
          <div class="w-100 ml-3">
            <h4>PACK TOTAL - R$ 0,00</h4>
            <small style="font-size: 10px">
              Você será acompanhada durante os próximos 3 meses
            </small>
          </div>
        </v-card>
        <!-- <v-card
          color="#F4F4F4"
          to="/consultoria-mensal/item"
          rounded="3"
          class="d-flex justify-start align-center pa-6 primary--text mb-6"
          elevation="3"
        >
          <v-avatar
            left
            color="rgba(123, 163, 162, 0.4)"
            class="primary--text"
            size="60"
          >
            <strong class="primary--text">JAN</strong>
          </v-avatar>
          <div class="w-100 ml-3">
            <h4>Consultoria #3</h4>
            <v-progress-linear
              color="primary"
              rounded
              value="80"
              style="width: 72px"
              class="d-inline-block mr-1"
            ></v-progress-linear>
          </div>
        </v-card> -->
      </div>
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
      success: false,
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
  methods: {
    search() {
      if (this.filters.search) {
        this.$router.push('/pri-responde?search=' + this.filters.search)
      } else {
        this.$router.push('/pri-responde')
      }
    },
    create() {
      this.success = true
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
