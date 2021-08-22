<template>
  <ValidationObserver v-slot="{ validate, invalid }">
    <form @submit.prevent="validate().then(login)">
      <b-form-group label="Digite seu nome de usuário, e-mail ou telefone">
        <validation-provider
          v-slot="{ errors }"
          name="nome de usuário, e-mail ou telefone"
          rules="required"
        >
          <b-form-input v-model="form.login" />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Digite sua senha">
        <validation-provider v-slot="{ errors }" name="senha" rules="required">
          <b-form-input v-model="form.password" type="password" />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <b-button class="mb-2" @click="$emit('forgotPassword')"
        >Esqueci minha senha</b-button
      >
      <button
        type="submit"
        class="btn btn-primary btn-lg btn-block"
        :disabled="invalid"
      >
        ENTRAR
      </button>
    </form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Error from './Error.vue'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    Error,
  },
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
