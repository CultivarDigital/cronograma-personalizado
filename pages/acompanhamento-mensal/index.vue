<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Acompanhamento mensal" />
      </div>
      <div class="text-center">
        <h3 class="text-h5 font-weight-bold mb-3" style="color: #acacac">
          Vamos realizar nosso Acompanhamento Mensal?
        </h3>
        <p style="color: #78746d">
          <small>
            O acompanhamento mensal é indispensável para o melhor acompanhamento
            do seu Cronograma Capilar Personalizado.
          </small>
        </p>
      </div>
    </v-container>
    <div>
      <v-container
        v-if="
          currentContract && consultations && (canBuyIndividual || canBuyPack)
        "
      >
        <v-card
          v-if="canBuyIndividual"
          color="#F4F4F4"
          rounded="3"
          class="d-flex justify-start align-center pa-6 primary--text mb-6"
          elevation="3"
          @click="create(1)"
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
            <h4>USO ÚNICO - R$ 99,00</h4>
            <small style="font-size: 10px"
              >Será feito uma única vez durante o seu CCP</small
            >
          </div>
        </v-card>
        <v-card
          v-if="canBuyPack"
          color="#F4F4F4"
          rounded="3"
          class="d-flex justify-start align-center pa-6 primary--text mb-6"
          elevation="3"
          @click="create(3)"
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
            <h4>PACK TOTAL - R$ 250,00</h4>
            <small style="font-size: 10px">
              Você será acompanhada durante os próximos 3 meses
            </small>
          </div>
        </v-card>
      </v-container>
      <div v-if="consultations && consultations.length" class="template-form">
        <h3 class="mb-6">MEUS ACOMPANHAMENTOS</h3>
        <v-container>
          <ConsultationCard
            v-for="consultation in consultations"
            :key="consultation._id"
            :consultation="consultation"
          />
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
import statusList from '@/data/status-list'
export default {
  data() {
    return {
      consultations: null,
      statusList,
    }
  },
  computed: {
    canBuyIndividual() {
      if (this.currentConsultations) {
        if (this.currentConsultations.length) {
          const latestDate =
            this.currentConsultations[this.currentConsultations.length - 1]
              .createdAt
          return (
            this.dateDiff(latestDate) > 30 &&
            this.currentContract.remaining_days >= 30
          )
        }
        return true
      }
      return false
    },
    canBuyPack() {
      if (this.currentConsultations && this.currentConsultations.length === 0) {
        return this.currentContract.remaining_days >= 90
      }
      return false
    },
    currentConsultations() {
      if (this.consultations && this.currentContract) {
        return this.consultations.filter(
          (consultation) => consultation.contract === this.currentContract._id
        )
      }
      return null
    },
    currentContract() {
      return this.$store.state.currentContract
    },
  },
  created() {
    this.loadConsultations()
  },
  methods: {
    async create(qtd) {
      const savedConsultation = await this.$axios.$post('/v1/consultations', {
        contract: this.currentContract._id,
        qtd,
      })
      this.loadConsultations()
      if (savedConsultation) {
        this.$router.push('/acompanhamento-mensal/' + savedConsultation._id)
        this.notify('Seu acompanhamento foi solicitado!')
      }
    },
    isActive(startAt) {
      return this.dateDiff(startAt) <= 1
    },
    dateDiff(date) {
      const today = new Date()
      return this.$moment(date)
        .tz('UTC')
        .diff(
          this.$moment(
            Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
          ).tz('UTC'),
          'days'
        )
    },
    loadConsultations() {
      this.$axios.$get('/v1/consultations').then((consultations) => {
        this.consultations = consultations
      })
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
