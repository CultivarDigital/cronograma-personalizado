<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Renovar" back-to="/renovacao" />
      </div>
      <div class="text-center">
        <img
          class="mb-3"
          src="~/assets/img/renovar.png"
          alt="Acompanhamento mensal"
          style="max-width: 100%"
        />
        <h3 class="text-h5 font-weight-bold mb-3">
          Você continua no nosso time!
        </h3>
        <p class="mb-8" style="color: #78746d">
          <small>
            Estamos felizes pela confiança e principalmente pelos resultados que
            você alcançou.Para seguir com a renovação, basta preencher o
            formulário abaixo.
          </small>
        </p>
      </div>
    </v-container>
    <v-tabs v-model="tab">
      <v-tab
        style="font-size: 13px; color: #262626"
        class="text-transform-none"
      >
        <v-chip small class="mr-3 rounded-lg">1</v-chip> Informações gerais
      </v-tab>
      <v-tab
        style="font-size: 13px; color: #262626"
        class="text-transform-none"
      >
        <v-chip small class="mr-3 rounded-lg">2</v-chip> Cronograma
      </v-tab>
    </v-tabs>
    <v-container class="px-6 mb-6">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-checkbox
            v-for="i in 4"
            :key="i"
            :label="'Opção ' + i"
            color="primary"
            hide-details
            class="d-inline-block mr-6"
          ></v-checkbox>
        </v-tab-item>
        <v-tab-item>
          <v-card flat> Formulário sobre o cronograma </v-card>
        </v-tab-item>
      </v-tabs-items>
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
