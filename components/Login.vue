<template>
  <ValidationObserver v-slot="{ validate, invalid }">
    <p class="text-center">
      Ainda não possúi uma conta?
      <b-button variant="secondary" size="sm" @click="$emit('register')">
        CADASTRE-SE
      </b-button>
    </p>
    <hr />
    <b-button @click="signInWithGoogle">Login com o google</b-button>
    {{ isLoggedIn }}
    {{ currentUser }}
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
      <b-form-group label="Digite sua senha" class="mb-0">
        <validation-provider v-slot="{ errors }" name="senha" rules="required">
          <b-form-input v-model="form.password" type="password" />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <div class="text-right mb-3">
        <b-btn variant="link" class="btn-link" @click="$emit('forgotPassword')">
          Esqueci minha senha
        </b-btn>
      </div>
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
    async signInWithGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      // You can add or remove more scopes here provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      await this.$fire.auth.signInWithPopup(provider)
    },
    async login() {
      await this.$auth
        .loginWith('local', {
          data: this.form,
        })
        .catch(this.showError)
      if (this.$store.state.user) {
        this.$bvModal.hide('portal-modal')
        this.$notify('Seja bem vindo ' + this.currentUser.name)
      }
    },
  },
}
</script>
