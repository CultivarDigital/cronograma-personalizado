<template>
  <div>
    <TopNavigation active="Meu cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Consultoria Mensal" />
      </div>
      <div class="d-flex justify-space-between align-center mb-6">
        <div class="d-flex justify-center align-center">
          <div style="font-size: 42px" class="primary--text font-weight-bold">
            24
          </div>
          <div class="ml-3">
            <div
              style="
                color: rgba(123, 163, 162, 0.6);
                font-size: 18px;
                line-height: 20px;
              "
            >
              Qua
            </div>
            <div
              style="
                color: rgba(123, 163, 162, 0.4);
                font-size: 16px;
                line-height: 18px;
              "
            >
              Fev 2022
            </div>
          </div>
        </div>
        <div class="d-flex justify-center align-center">
          <v-btn
            style="
              background-color: rgba(123, 163, 162, 0.4);
              text-transform: none;
            "
            class="primary--text rounded-1 px-6"
            elevation="0"
            >Esta semana</v-btn
          >
        </div>
      </div>
      <div class="d-flex justify-center align-center text-center">
        <div class="week">
          <div>M1</div>
          <h3>S1</h3>
        </div>
        <div class="week">
          <div>M1</div>
          <h3>S2</h3>
        </div>
        <div class="week">
          <div>M1</div>
          <h3>S3</h3>
        </div>
        <div class="week active">
          <div>M1</div>
          <h3>S4</h3>
        </div>
        <div class="week">
          <div>M2</div>
          <h3>S1</h3>
        </div>
        <div class="week">
          <div>M2</div>
          <h3>S2</h3>
        </div>
        <div class="week">
          <div>M2</div>
          <h3>S3</h3>
        </div>
      </div>
      <v-row></v-row>
    </v-container>
    <v-card class="rounded-lg py-3 px-3 pb-0 mb-0 bg-primary-gradient">
      <v-container class="white--text pb-16">
        <img src="~/assets/img/chat.png" alt="Atendimento" />
        <div class="px-6">
          <h4 class="text-h4">
            Olá,
            {{ $auth.user.name ? $auth.user.name.split(' ')[0] : 'Cliente' }} 👋
          </h4>
          <p>Se você precisa de ajuda, estamos aqui para isso!</p>
        </div>
      </v-container>
    </v-card>
    <v-container class="mt-n16 px-6">
      <v-card color="#F7F7F7" class="pt-8" rounded="0" to="/chat">
        <div class="px-6 mb-10">
          <h6 class="text-h6 primary--text mb-3">Fale com o suporte</h6>
          <div class="d-flex justify-center">
            <div>
              <!-- <div class="mb-3">
                <img
                  src="~/assets/img/atendimento-tempo-de-resposta.png"
                  alt="Atendimento - Tempo de resposta"
                />
              </div> -->
              <v-btn color="primary" rounded class="px-6">
                <v-icon left>mdi-send</v-icon> Abrir chat
              </v-btn>
            </div>
          </div>
        </div>
        <v-divider></v-divider>
        <div class="px-6 py-6 primary--text">Veja o histórico de conversas</div>
      </v-card>
    </v-container>
    <v-container class="px-6">
      <div class="px-6">
        <p class="font-weight-bold" style="color: rgba(0, 0, 0, 0.53)">
          Procurar uma resposta rápida
        </p>
        <v-form @submit.prevent="search">
          <div class="d-flex justify-center">
            <v-text-field
              v-model="filters.search"
              class="mb-6 rounded-0"
              placeholder="Pesquise no Pri Responde"
              outlined
              :hide-details="true"
              dense
            >
            </v-text-field>
            <v-btn
              type="submit"
              color="primary"
              class="rounded-0 elevation-0"
              style="height: 40px; margin-left: -1px"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filters: {
        search: null,
      },
    }
  },
  methods: {
    search() {
      if (this.filters.search) {
        this.$router.push('/pri-responde?search=' + this.filters.search)
      } else {
        this.$router.push('/pri-responde')
      }
    },
  },
}
</script>
<style scoped lang="sass">
.week
  color: #919191
  padding: 10px 10px
  h3
    color: rgba(123, 163, 162, 0.6)
  &.active
    background-color: rgba(123, 163, 162, 0.4)
    border-radius: 10px
    h3
      color: #fff
</style>
