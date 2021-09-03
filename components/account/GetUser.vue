<template>
  <div>
    <form @submit.prevent="getUser">
      <b-form-group label="Digite seu nome de usuário, e-mail ou telefone">
        <b-form-input v-model="login" />
      </b-form-group>
      <button
        v-if="login"
        type="submit"
        class="btn btn-primary btn-lg btn-block"
      >
        CONTINUAR
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: 'diegomr86@gmail.com',
    }
  },
  computed: {
    authUser() {
      return this.$store.state.authUser
    },
  },
  created() {
    if (this.authUser) {
      this.$emit('change', this.authUser)
    }
  },
  methods: {
    async getUser() {
      if (this.login) {
        const user = await this.$axios
          .$get('/api/users/' + this.login + '/find_or_create')
          .catch(this.showError)
        this.$emit('change', user)
        this.populateForm()
        this.forgot_password = null
      }
    },
  },
}
</script>
