<template>
  <form @submit.prevent="login">
    <b-form-group label="Digite seu nome de usuário, e-mail ou telefone">
      <b-form-input v-model="form.login" />
    </b-form-group>
    <b-form-group label="Digite sua senha">
      <b-form-input v-model="form.password" type="password" />
    </b-form-group>
    <b-button @click="$emit('forgotPassword')">Esqueci minha senha</b-button>
    <button type="submit" class="btn btn-primary btn-lg btn-block">
      ENTRAR
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        login: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      await this.$auth
        .loginWith('local', {
          data: this.form,
        })
        .catch(this.showError)
      if (this.$auth.loggedIn) {
        this.$bvModal.hide('portal-modal')
        this.$notify('Seja bem vindo ' + this.currentUser.name)
      }
    },
  },
}
</script>
