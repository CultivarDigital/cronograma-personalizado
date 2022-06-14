<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle
          label="Acompanhamento mensal"
          back-to="/acompanhamento-mensal"
        />
      </div>
      <div class="text-center">
        <h3 class="text-h5 font-weight-bold mb-3" style="color: #acacac">
          Vamos realizar nosso Acompanhamento Mensal?
        </h3>
        <p class="mb-0" style="color: #78746d">
          <small>
            O acompanhamento mensal é indispensável para o melhor acompanhamento
            do seu Cronograma Capilar Personalizado.
          </small>
        </p>
      </div>
    </v-container>
    <v-container v-if="consultation" class="px-6">
      <div class="mb-10">
        <v-alert color="info" dark class="text-center">
          {{ statusList[consultation.status].label }}
        </v-alert>
        <div v-if="consultation.status === 'created'">
          <v-btn
            v-if="consultation.type === 'pack'"
            target="_blank"
            block
            x-large
            color="success"
            href="https://prijorge.com/produto/acompanhamento-mensal-pack"
          >
            Realizar pagamento
          </v-btn>
          <v-btn
            v-else
            target="_blank"
            block
            x-large
            color="success"
            href="https://prijorge.com/produto/acompanhamento-mensal"
          >
            Realizar pagamento
          </v-btn>
        </div>
      </div>

      <ConsultationInfoForm
        v-model="consultation"
        :disabled="consultation.status !== 'created'"
        @input="$router.replace('/acompanhamento-mensal')"
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
