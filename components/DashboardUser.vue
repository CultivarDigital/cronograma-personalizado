<template>
  <div class="primary--text">
    <div
      class="d-flex justify-center align-center mb-8 pointer"
      @click="$router.push('/perfil')"
    >
      <div
        class="d-flex justify-center align-center mr-3"
        :style="
          'width: 67px; height: 67px; background-position: center; background: url(' +
          require('~/assets/img/bg-user.png') +
          ')'
        "
      >
        <User size="53px" />
      </div>

      <div v-if="$auth.user.name" class="primary--text" style="font-size: 24px">
        <p
          v-for="n in $auth.user.name
            .split(' ')
            .filter((name) => name.length > 3)
            .slice(0, 2)"
          :key="n"
          class="mb-0"
          style="line-height: 26px"
        >
          {{ n }}
        </p>
      </div>
    </div>
    <v-container class="px-9">
      <v-row>
        <v-col>
          <v-card color="#EE605E" dark class="pa-4" rounded="lg">
            <p style="line-height: 16px" class="mb-6">
              <small>Tratamentos da semana</small>
            </p>
            <p class="mb-0"><strong>Hidratação</strong></p>
            <p class="mb-0"><strong>Nutrição</strong></p>
            <p class="mb-0"><strong>Umectação</strong></p>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            elevation="lg"
            style="background-color: rgba(123, 163, 162, 0.4)"
            dark
            class="font-weight-bold text-center pa-5"
          >
            <p class="mb-0" style="font-size: 14px; line-height: 14px">
              Você está na
            </p>
            <p class="mb-0" style="font-size: 45px">12ª</p>
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
          <v-card class="pa-3 pt-4">
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
          <v-card class="pa-3 pt-4">
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
              Mini <br />
              Curso
            </p>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="pa-3 pt-4">
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
        class="pa-6 d-flex align-center justify-center primary--text mb-3"
        rounded="lg"
      >
        <img class="mr-3" src="~/assets/img/icon-info.png" alt="Ajuda" />
        <span class="text-h6" style="rgba(123, 163, 162, 0.6)"
          >Tenho uma dúvida</span
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
}
</script>
