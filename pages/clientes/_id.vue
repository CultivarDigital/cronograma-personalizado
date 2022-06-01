<template>
  <div>
    <TopNavigation active="Montar cronograma" />
    <div v-if="loading" class="pa-3 text-center pt-12">
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <div v-else-if="user" class="template-form">
      <v-container>
        <div>
          <Subtitle label="Editar cliente" back-to="/clientes" />
        </div>
      </v-container>
      <div class="text-center mb-6">
        <div
          style="
            height: 80px;
            background-color: rgba(123, 163, 162, 0.4);
            margin-bottom: -40px;
          "
        ></div>
        <div class="mb-3 pa-1 rounded-circle white d-inline-block">
          <User size="80" :user="user" />
        </div>
        <br />
        {{ user.name }}
      </div>
      <v-tabs v-model="tab">
        <v-tab style="font-size: 13px; color: #262626">
          <v-chip small class="mr-3 rounded-lg">1</v-chip> CCP
        </v-tab>
        <v-tab style="font-size: 13px; color: #262626">
          <v-chip small class="mr-3 rounded-lg">2</v-chip> Histórico
        </v-tab>
        <v-tab style="font-size: 13px; color: #262626">
          <v-chip small class="mr-3 rounded-lg">3</v-chip> Perfil
        </v-tab>
      </v-tabs>
      <div v-if="tab === 0">
        <div v-if="active_contract">
          <Contract v-model="active_contract" />
        </div>
        <div v-else-if="waiting_contract">
          <Contract v-model="waiting_contract" />
        </div>
        <v-container v-else class="text-center">
          <v-alert color="error" dark class="mb-6">
            Esta cliente não tem contrato ativo ou para começar
          </v-alert>
          <v-btn color="primary" @click="tab = 1">Ver histórico</v-btn>
        </v-container>
      </div>
      <div v-if="tab === 1">
        <Contracts
          v-if="contracts && user"
          v-model="contracts"
          :user="user"
          @input="loadContracts"
        />
        <div class="pt-3">
          <h3>RENOVAÇÕES</h3>
          <v-container>
            <ConsultationCard
              v-for="consultation in consultations"
              :key="consultation._id"
              :consultation="consultation"
            />
          </v-container>
        </div>
      </div>
      <div v-if="tab === 2">
        <ProfileForm :value="user" @input="updateUser" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0,
      user: null,
      contracts: null,
      consultations: null,
      active_contract: null,
      waiting_contract: null,
      loading: true,
    }
  },
  computed: {
    consultationsDataset() {
      if (this.consultations) {
        return {
          header: {
            label: 'Quando',
            value: 'Acompanhamento',
          },
          items: this.consultations.map((consultation, index) => ({
            label: this.$moment(consultation.startAt)
              .tz('UTC')
              .format('DD/MM/YYYY'),
            value: consultation.name,
            data: consultation,
            url: `/acompanhamentos/${consultation._id}`,
          })),
        }
      }
      return null
    },
  },
  async created() {
    this.user = await this.$axios.$get('/v1/users/' + this.$route.params.id)
    await this.loadContracts()
    await this.loadConsultations()
    this.loading = false
  },
  methods: {
    updateUser(user) {
      this.loading = true
      this.user = user
      this.loading = false
    },
    async loadContracts() {
      this.contracts = await this.$axios.$get('/v1/contracts', {
        params: { user: this.$route.params.id },
      })
      if (this.contracts && this.contracts.length) {
        this.active_contract = this.contracts.find(
          (contract) => contract.status === 'active'
        )
        this.waiting_contract = this.contracts.find(
          (contract) => contract.status === 'waiting'
        )
      }
    },
    async loadConsultations() {
      this.consultations = await this.$axios.$get('/v1/consultations', {
        params: { user: this.$route.params.id },
      })
    },
  },
}
</script>
