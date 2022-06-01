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
        <p class="mb-8" style="color: #78746d">
          <small>
            A consultoria mensal é indispensável para o melhor acompanhamento do
            seu Cronograma Capilar Personalizado.
          </small>
        </p>
      </div>
    </v-container>
    <v-container class="px-6 mb-6">
      <ConsultationForm />
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 4,
    }
  },
}
</script>
<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>
