<template>
  <v-container class="mt-3">
    <v-form @submit.prevent="sendEmail">
      <v-alert v-if="success" type="success">
        Enviamos um e-mail para <strong>{{ email }}</strong
        >. Clique no link enviado para entrar.
      </v-alert>
      <div v-else>
        <v-text-field v-model="email" label="Digite seu e-mail" outlined />
        <Save :loading="loading" label="Receber link para entrar" />
      </div>
      <v-btn block @click="$emit('login')"> Voltar </v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      success: false,
      loading: false,
    }
  },
  computed: {
    baseURL() {
      return process.env.BASE_URL
    },
  },
  methods: {
    sendEmail() {
      this.loading = true
      this.success = false
      this.$firebase
        .generateLoginWithEmail(this.email)
        .then(() => {
          this.loading = false
          this.success = true
        })
        .catch((error) => {
          this.$notifier.firebaseError(error)
          this.loading = false
        })
    },
  },
}
</script>
