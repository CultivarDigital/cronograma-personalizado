<template>
  <div>
    <form @submit.prevent="recovery">
      <div v-if="success" class="alert alert-info">
        Enviamos um e-mail para <strong>{{ email }}</strong
        >. Clique no link enviado para recuperar sua senha.
      </div>
      <div v-else>
        <b-form-group label="Digite seu e-mail">
          <b-form-input v-model="email" />
        </b-form-group>
        <b-btn
          block
          variant="primary"
          type="submit"
          size="lg"
          :disabled="loading"
          class="mb-3"
        >
          <v-progress-circular
            v-if="loading"
            color="black"
            indeterminate
            size="20"
          />
          <span v-else>Recuperar senha</span>
        </b-btn>
      </div>
      <b-btn block variant="secondary" @click="$emit('login')"> Voltar </b-btn>
    </form>
  </div>
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
      this.$fire.auth.languageCode = 'pt-BR'

      this.$fire.auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.loading = false
          this.success = true
        })
        .catch((error) => {
          this.firebaseError(error)
          this.loading = false
        })
    },
  },
}
</script>
