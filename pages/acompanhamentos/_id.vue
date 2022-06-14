<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Acompanhamento mensal" back-to="/acompanhamentos" />
      </div>
    </v-container>
    <div class="mb-6">
      <ProfileHeader v-if="user" :user="user" />
    </div>
    <v-container v-if="consultation" class="px-6">
      <div class="mb-10">
        <v-alert
          :color="consultation.status === 'answered' ? 'info' : 'warning'"
          dark
          class="text-center"
        >
          {{ statusList[consultation.status].label }}
        </v-alert>
        <v-btn
          v-if="consultation.status === 'created'"
          color="success"
          block
          large
          @click="setStatus('paid')"
        >
          {{
            consultation.type === 'pack'
              ? 'Confirmar pagamento do pack'
              : 'Confirmar pagamento'
          }}
        </v-btn>
        <v-btn
          v-if="consultation.status === 'paid'"
          color="success"
          block
          large
          @click="setStatus('analyzed')"
        >
          Marcar como analisado
        </v-btn>
        <v-btn
          v-if="consultation.status === 'analyzed'"
          color="success"
          block
          large
          @click="setStatus('answered')"
        >
          Marcar como respondido
        </v-btn>
      </div>
      <ConsultationInfoForm
        v-model="consultation"
        disabled
        @input="$router.replace('/acompanhamentos')"
      />
    </v-container>
  </div>
</template>
<script>
import statusList from '@/data/status-list'
export default {
  data() {
    return {
      consultation: null,
      user: null,
      statusList,
    }
  },
  async created() {
    await this.loadConsultation()
    await this.loadUser()
  },
  methods: {
    async loadConsultation() {
      this.consultation = await this.$axios.$get(
        '/v1/consultations/' + this.$route.params.id
      )
    },
    async loadUser() {
      this.user = await this.$axios.$get('/v1/users/' + this.consultation.user)
    },
    async setStatus(status) {
      this.consultation = await this.$axios.$patch(
        '/v1/consultations/' + this.$route.params.id,
        { status }
      )
      this.notify(
        'Status alterado para ' + statusList[this.consultation.status].label
      )
      this.$router.replace('/acompanhamentos')
    },
  },
}
</script>
<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>
