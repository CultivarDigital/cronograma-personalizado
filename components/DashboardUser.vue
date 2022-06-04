<template>
  <div class="primary--text">
    <UserCard />
    <v-container class="px-9">
      <v-row v-if="currentContract">
        <v-col>
          <v-card
            to="/cronograma"
            color="#EE605E"
            dark
            class="pa-4"
            rounded="lg"
          >
            <p style="line-height: 16px" class="mb-3">
              <small>Tratamentos da semana</small>
            </p>
            <div v-if="currentContract.data">
              <div v-if="weekItems && weekItems.length">
                <p
                  v-for="(weekItem, index) in weekItems"
                  :key="index"
                  class="mb-0"
                >
                  <strong>{{ weekItem.description }}</strong>
                </p>
              </div>
              <div v-else>
                <p class="mb-0" style="line-height: 1">
                  <strong><small>Sem tratamentos pendentes </small></strong>
                </p>
              </div>
            </div>
            <div v-else>
              <p class="mb-0" style="line-height: 1">
                <strong><small>Estamos montando seu cronograma</small></strong>
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            to="/cronograma"
            elevation="lg"
            style="background-color: rgba(123, 163, 162, 0.8)"
            dark
            class="font-weight-bold text-center pa-5"
          >
            <p class="mb-0" style="font-size: 14px; line-height: 14px">
              Você está na
            </p>
            <p class="mb-0" style="font-size: 45px">
              {{ currentContract.week * currentContract.month }}ª
            </p>
            <p class="mb-0" style="font-size: 14px; line-height: 14px">
              <strong>Semana</strong>
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      :style="
        'background-image: url(' +
        require('~/assets/img/bg-perfil.png') +
        '); background-position: center; background-repeat: repeat-y'
      "
    >
      <p class="text-subtitle-2">Por aqui</p>
      <v-row class="text-center mb-3">
        <v-col cols="4">
          <v-card class="pa-3 pt-4" to="/conteudo-exclusivo">
            <v-btn
              icon
              style="
                background-color: rgba(238, 96, 94, 0.6);
                width: 43px;
                height: 43px;
              "
              class="white--text mb-3"
              >+</v-btn
            >
            <p
              style="line-height: 13px; font-size: 13px"
              class="caption primary--text"
            >
              Conteúdo Exclusivo
            </p>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-3 pt-4" to="/mini-curso">
            <v-btn
              icon
              style="
                background-color: rgba(238, 96, 94, 0.6);
                width: 43px;
                height: 43px;
              "
              class="white--text mb-3"
              >+</v-btn
            >
            <p
              style="line-height: 13px; font-size: 13px"
              class="caption primary--text"
            >
              Mini Curso
            </p>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-3 pt-4" to="/consultoria-mensal">
            <v-btn
              icon
              style="
                background-color: rgba(238, 96, 94, 0.6);
                width: 43px;
                height: 43px;
              "
              class="white--text mb-3"
              >+</v-btn
            >
            <p
              style="line-height: 13px; font-size: 13px"
              class="caption primary--text"
            >
              Consultoria Mensal
            </p>
          </v-card>
        </v-col>
      </v-row>
      <p class="text-subtitle-1">Precisa de ajuda?</p>
      <v-card
        class="pa-6 d-flex align-center justify-start primary--text mb-3 px-12"
        rounded="lg"
        to="/pri-responde"
      >
        <img class="mr-3" src="~/assets/img/icon-info.png" alt="Ajuda" />
        <span class="text-h6" style="color: rgba(123, 163, 162, 0.6)"
          >Tenho uma dúvida</span
        >
      </v-card>
      <v-card
        class="pa-6 d-flex align-center justify-start primary--text mb-3 px-12"
        rounded="lg"
        to="/atendimento"
      >
        <img class="mr-3" src="~/assets/img/icon-info.png" alt="Ajuda" />
        <span class="text-h6" style="color: rgba(123, 163, 162, 0.6)"
          >Atendimento</span
        >
      </v-card>
      <v-card
        class="pa-6 d-flex align-center justify-start primary--text mb-12 px-12"
        rounded="lg"
        to="/sac/criticas-e-sugestoes"
      >
        <img class="mr-3" src="~/assets/img/icon-info.png" alt="Ajuda" />
        <span class="text-h6" style="color: rgba(123, 163, 162, 0.6)"
          >Críticas e Sugestões</span
        >
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
  computed: {
    currentContract() {
      return this.$store.state.currentContract
    },
    weekItems() {
      if (this.currentContract && this.currentContract.data) {
        return this.currentContract.data[this.currentContract.month - 1][
          this.currentContract.week - 1
        ].filter((item) => !item.checked)
      }
      return []
    },
  },
}
</script>
