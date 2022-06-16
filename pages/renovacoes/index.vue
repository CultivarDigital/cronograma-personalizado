<template>
  <div>
    <TopNavigation active="Atendimento" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Renovações" />
      </div>
    </v-container>
    <v-container v-if="contracts && contracts.length === 0">
      <v-alert color="warning" dark class="text-center">
        Nenhum renovação encontrado
      </v-alert>
    </v-container>
    <div v-if="contracts && contracts.length">
      <div
        v-if="createdContractsDataset && createdContractsDataset.items.length"
        class="template-form"
      >
        <h3 class="mb-6">CONFIRMAR PAGAMENTO</h3>
        <v-container>
          <DoubleTable :data="createdContractsDataset" />
        </v-container>
      </div>
      <div
        v-if="paidContractsDataset && paidContractsDataset.items.length"
        class="template-form"
      >
        <h3 class="mb-6">NÃO FORAM ANALISADAS</h3>
        <v-container>
          <DoubleTable :data="paidContractsDataset" />
        </v-container>
      </div>
      <div
        v-if="analyzedContractsDataset && analyzedContractsDataset.items.length"
        class="template-form"
      >
        <h3 class="mb-6">NÃO FORAM RESPONDIDAS</h3>
        <v-container>
          <DoubleTable :data="analyzedContractsDataset" />
        </v-container>
      </div>
      <div
        v-if="answeredContractsDataset && answeredContractsDataset.items.length"
        class="template-form"
      >
        <h3 class="mb-6">RENOVAÇÕES FINALIZADOS</h3>
        <v-container>
          <DoubleTable :data="answeredContractsDataset" />
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
      contracts: null,
      statusList,
    }
  },
  computed: {
    createdContractsDataset() {
      return this.datasetByStatus('created')
    },
    paidContractsDataset() {
      return this.datasetByStatus('paid')
    },
    analyzedContractsDataset() {
      return this.datasetByStatus('analyzed')
    },
    answeredContractsDataset() {
      return this.datasetByStatus('answered')
    },
  },
  created() {
    this.loadContracts()
  },
  methods: {
    async create(qtd) {
      const savedContract = await this.$axios.$post('/v1/contracts', {
        contract: this.currentContract._id,
        qtd,
      })
      this.loadContracts()
      if (savedContract) {
        this.$router.push('/renovacoes/' + savedContract._id)
        this.notify('Sua renovação foi solicitado!')
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
    loadContracts() {
      this.$axios.$get('/v1/contracts').then((contracts) => {
        this.contracts = contracts.filter((c) => this.isActive(c.startAt))
      })
    },
    datasetByStatus(status) {
      if (this.contracts) {
        return {
          header: {
            label: 'Quando',
            value: 'Renovação',
          },
          items: this.contracts
            .filter((c) => c.status === status)
            .map((contract, index) => ({
              label: this.$moment(contract.startAt)
                .tz('UTC')
                .format('DD/MM/YYYY'),
              value: contract.user.name,
              description: contract.name,
              data: contract,
              url: `/renovacoes/${contract._id}`,
            })),
        }
      }
    },
  },
}
</script>
