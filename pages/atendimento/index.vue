<template>
  <div>
    <TopNavigation active="Suporte" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Atendimento" />
      </div>
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
              <div class="mb-3">
                <img
                  src="~/assets/img/atendimento-tempo-de-resposta.png"
                  alt="Atendimento - Tempo de resposta"
                />
              </div>
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
