<template>
  <div>
    <div class="primary--text">
      <v-container class="px-6">
        <AdminCard />
        <v-card
          to="/turmas"
          color="rgba(238, 96, 94, .6)"
          dark
          class="pa-3 mb-3 text-center"
          rounded="md"
        >
          <p class="mb-0"><strong>Vamos abrir uma nova turma?</strong></p>
        </v-card>
        <v-row>
          <v-col cols="6">
            <v-card
              elevation="lg"
              color="rgba(238, 96, 94, .8)"
              dark
              class="font-weight-bold text-center pa-5"
              to="/renovacoes"
            >
              <p class="mb-0" style="font-size: 14px; line-height: 14px">
                Temos
              </p>
              <p class="mb-0" style="font-size: 45px">
                {{ summary.contracts }}
              </p>
              <p class="mb-0" style="font-size: 14px; line-height: 14px">
                <strong>Renovações</strong>
              </p>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              elevation="lg"
              color="rgba(238, 96, 94, .8)"
              dark
              class="font-weight-bold text-center pa-5"
              to="/acompanhamentos"
            >
              <p class="mb-0" style="font-size: 14px; line-height: 14px">
                Temos
              </p>
              <p class="mb-0" style="font-size: 45px">
                {{ summary.consultations }}
              </p>
              <p class="mb-0" style="font-size: 14px; line-height: 14px">
                <strong>Acomp. Mensais</strong>
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div>
        <div
          style="
            background-color: rgba(123, 163, 162, 0.5);
            background-size: 20px;
            height: 120px;
            margin-bottom: -75px;
          "
          class="pt-3"
        >
          <h3 class="white--text text-center mb-3">Cronograma personalizado</h3>
        </div>
        <v-container>
          <v-row class="text-center mb-3">
            <v-col cols="4">
              <v-card class="pa-3 pt-4" to="/turmas">
                <v-btn
                  icon
                  style="background-color: #7ba3a2; width: 43px; height: 43px"
                  class="white--text mb-3"
                  >+</v-btn
                >
                <p
                  style="line-height: 13px; font-size: 13px"
                  class="caption primary--text mb-1"
                >
                  Ver turmas
                </p>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="pa-3 pt-4" to="/modelos">
                <v-btn
                  icon
                  style="background-color: #7ba3a2; width: 43px; height: 43px"
                  class="white--text mb-3"
                  >+</v-btn
                >
                <p
                  style="line-height: 13px; font-size: 13px"
                  class="caption primary--text mb-1"
                >
                  Gerenciar modelos
                </p>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="pa-3 pt-4" to="/suporte" color="#7ba3a2">
                <p
                  style="line-height: 13px; font-size: 13px"
                  class="caption white--text"
                >
                  Temos
                </p>
                <v-btn
                  icon
                  style="background-color: #fff; width: 43px; height: 43px"
                  class="primary--text mb-3"
                  >{{ summary.messages }}</v-btn
                >
                <p
                  style="line-height: 13px; font-size: 13px"
                  class="caption white--text mb-1"
                >
                  Mensagens para responder
                </p>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-col cols="6">
              <v-card
                to="/conteudo-exclusivo"
                elevation="lg"
                color="rgba(238, 96, 94, .8)"
                dark
                class="font-weight-normal text-uppercase text-center pa-5"
              >
                <p class="mb-0" style="font-size: 18px; line-height: 18px">
                  Conteúdo Exclusivo
                </p>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card
                to="/pri-responde"
                elevation="lg"
                color="primary-8"
                dark
                class="font-weight-normal text-uppercase text-center pa-3 mb-3"
              >
                <p class="mb-0" style="font-size: 18px; line-height: 18px">
                  Editar FAQ
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-container
        :style="
          'background-image: url(' +
          require('~/assets/img/bg-dashboard-admin.png') +
          '); background-position: center; background-repeat: repeat-y'
        "
      >
        <p class="text-subtitle-1">Outras funções</p>
        <v-card
          class="pa-6 d-flex align-center justify-start primary--text mb-3"
          rounded="lg"
          to="/clientes"
        >
          <div class="text-h6" style="color: rgba(123, 163, 162, 0.6)">
            <v-icon left color="rgba(123, 163, 162, 0.6)"
              >mdi-face-woman-shimmer-outline</v-icon
            >
            Todas as clientes
          </div>
        </v-card>
        <v-card
          class="pa-6 d-flex align-center justify-start primary--text mb-3"
          rounded="lg"
          to="/suporte"
        >
          <div class="text-h6" style="color: rgba(123, 163, 162, 0.6)">
            <v-icon left color="rgba(123, 163, 162, 0.6)">mdi-forum</v-icon>
            Chat
          </div>
        </v-card>
        <v-card
          class="pa-6 d-flex align-center justify-start primary--text mb-3"
          rounded="lg"
          to="/suporte"
        >
          <div class="text-h6" style="color: rgba(123, 163, 162, 0.6)">
            <v-icon left color="rgba(123, 163, 162, 0.6)"
              >mdi-chat-alert</v-icon
            >
            Críticas e sugestões
          </div>
        </v-card>
      </v-container>
    </div>
    <!-- <Menu /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      summary: {
        messages: 0,
        consultations: 0,
        contracts: 0,
      },
      value: 0,
    }
  },
  async created() {
    const summary = await this.$axios.$get('/v1/dashboard/admin/summary')
    if (summary) {
      this.summary = summary
    }
  },
}
</script>
