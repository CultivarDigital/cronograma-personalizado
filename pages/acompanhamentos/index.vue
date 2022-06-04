<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Consultoria Mensal" />
      </div>
    </v-container>
    <v-container v-if="consultations && consultations.length === 0">
      <v-alert color="warning" dark class="text-center">
        Nenhum acompanhamento encontrado
      </v-alert>
    </v-container>
    <div v-if="consultations && consultations.length">
      <div
        v-if="
          createdConsultationsDataset &&
          createdConsultationsDataset.items.length
        "
        class="template-form"
      >
        <h3 class="mb-6">CONFIRMAR PAGAMENTO</h3>
        <v-container>
          <DoubleTable :data="createdConsultationsDataset" />
        </v-container>
      </div>
      <div
        v-if="paidConsultationsDataset && paidConsultationsDataset.items.length"
        class="template-form"
      >
        <h3 class="mb-6">NÃO FORAM ANALISADAS</h3>
        <v-container>
          <DoubleTable :data="paidConsultationsDataset" />
        </v-container>
      </div>
      <div
        v-if="
          analyzedConsultationsDataset &&
          analyzedConsultationsDataset.items.length
        "
        class="template-form"
      >
        <h3 class="mb-6">NÃO FORAM RESPONDIDAS</h3>
        <v-container>
          <DoubleTable :data="analyzedConsultationsDataset" />
        </v-container>
      </div>
      <div
        v-if="
          answeredConsultationsDataset &&
          answeredConsultationsDataset.items.length
        "
        class="template-form"
      >
        <h3 class="mb-6">ACOMPANHAMENTOS FINALIZADOS</h3>
        <v-container>
          <DoubleTable :data="answeredConsultationsDataset" />
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
    createdConsultationsDataset() {
      return this.datasetByStatus('created')
    },
    paidConsultationsDataset() {
      return this.datasetByStatus('paid')
    },
    analyzedConsultationsDataset() {
      return this.datasetByStatus('analyzed')
    },
    answeredConsultationsDataset() {
      return this.datasetByStatus('answered')
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
        this.$router.push('/acompanhamentos/' + savedConsultation._id)
        this.notify('Sua consultoria foi solicitada!')
      }
    },
    isActive(startAt) {
      return this.dateDiff(startAt) <= 0
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
    datasetByStatus(status) {
      if (this.consultations) {
        return {
          header: {
            label: 'Quando',
            value: 'Acompanhamento',
          },
          items: this.consultations
            .filter((c) => c.status === status)
            .map((consultation, index) => ({
              label: this.$moment(consultation.startAt)
                .tz('UTC')
                .format('DD/MM/YYYY'),
              value: consultation.user.name,
              description: consultation.name,
              data: consultation,
              url: `/acompanhamentos/${consultation._id}`,
            })),
        }
      }
    },
  },
}
</script>
