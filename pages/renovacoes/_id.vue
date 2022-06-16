<template>
  <div>
    <TopNavigation active="Atendimento" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Renovação" back-to="/renovacoes" />
      </div>
    </v-container>
    <div class="mb-6">
      <ProfileHeader v-if="user" :user="user" />
    </div>
    <v-container v-if="contract" class="px-6">
      <div class="mb-10">
        <v-alert
          :color="contract.status === 'answered' ? 'info' : 'warning'"
          dark
          class="text-center"
        >
          {{ statusList[contract.status].label }}
        </v-alert>
        <v-btn
          v-if="contract.status === 'created'"
          color="success"
          block
          large
          @click="setStatus('paid')"
        >
          {{
            contract.type === 'pack'
              ? 'Confirmar pagamento do pack'
              : 'Confirmar pagamento'
          }}
        </v-btn>
        <v-btn
          v-if="contract.status === 'paid'"
          color="success"
          block
          large
          @click="setStatus('analyzed')"
        >
          Marcar como analisado
        </v-btn>
        <v-btn
          v-if="contract.status === 'analyzed'"
          color="success"
          block
          large
          @click="setStatus('answered')"
        >
          Marcar como respondido
        </v-btn>
      </div>
      <contractInfoForm
        v-model="contract"
        disabled
        @input="$router.replace('/renovacoes')"
      />
    </v-container>
  </div>
</template>
<script>
import statusList from '@/data/status-list'
export default {
  data() {
    return {
      contract: null,
      user: null,
      statusList,
    }
  },
  async created() {
    await this.loadcontract()
    await this.loadUser()
  },
  methods: {
    async loadcontract() {
      this.contract = await this.$axios.$get(
        '/v1/contracts/' + this.$route.params.id
      )
    },
    async loadUser() {
      this.user = await this.$axios.$get('/v1/users/' + this.contract.user)
    },
    async setStatus(status) {
      this.contract = await this.$axios.$patch(
        '/v1/contracts/' + this.$route.params.id,
        { status }
      )
      this.notify(
        'Status alterado para ' + statusList[this.contract.status].label
      )
      this.$router.replace('/renovacoes')
    },
  },
}
</script>
<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>
