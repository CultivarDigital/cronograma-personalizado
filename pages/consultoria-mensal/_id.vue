<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Consultoria Mensal" back-to="/consultoria-mensal" />
      </div>
      <div class="text-center">
        <h3 class="text-h5 font-weight-bold mb-3" style="color: #acacac">
          Vamos realizar nosso Acompanhamento Mensal?
        </h3>
        <p class="mb-0" style="color: #78746d">
          <small>
            A consultoria mensal é indispensável para o melhor acompanhamento do
            seu Cronograma Capilar Personalizado.
          </small>
        </p>
      </div>
    </v-container>
    <v-container v-if="consultation" class="px-6">
      <v-alert color="info" dark class="text-center mb-10">
        {{ statusList[consultation.status].label }}
      </v-alert>
      <ConsultationInfoForm
        v-model="consultation"
        @input="$router.replace('/consultoria-mensal')"
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
      statusList,
    }
  },
  created() {
    this.loadConsultation()
  },
  methods: {
    async loadConsultation() {
      this.consultation = await this.$axios.$get(
        '/v1/consultations/' + this.$route.params.id
      )
    },
  },
}
</script>
<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>
