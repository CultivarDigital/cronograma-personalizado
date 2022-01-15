<template>
  <v-container class="mt-3">
    <h3 class="mb-3">Esqueceu sua senha?</h3>
    <v-form @submit.prevent="recovery">
      <v-alert v-if="success" type="success">
        Enviamos um e-mail para
        <strong>{{ email }}</strong
        >. Clique no link enviado para recuperar sua senha.
      </v-alert>
      <div v-else>
        <v-text-field
          v-model="email"
          label="Digite seu e-mail"
          outlined
          hide-details="auto"
        />
        <Save :loading="loading" label="Recuperar senha" />
      </div>
      <v-btn block to="/login"> Voltar </v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  layout: 'front',
  data() {
    return {
      email: '',
      success: false,
      loading: false,
    }
  },
  methods: {
    recovery() {
      this.loading = true
      this.success = false
      this.$firebase
        .resetPassword(this.email)
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
