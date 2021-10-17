<template>
  <v-container class="mt-3">
    <v-form @submit.prevent="recovery">
      <v-alert v-if="success" type="success">
        Enviamos um e-mail para
        <strong>{{ email }}</strong
        >. Clique no link enviado para recuperar sua senha.
      </v-alert>
      <div v-else>
        <v-text-field v-model="email" label="Digite seu e-mail" outlined />
        <Save :loading="loading" label="Recuperar senha" />
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
