<template>
  <ValidationObserver v-slot="{ validate, invalid }">
    <p class="text-center">
      Ainda não possúi uma conta?
      <b-button variant="secondary" size="sm" @click="$emit('register')">
        CADASTRE-SE
      </b-button>
    </p>
    <hr />
    <div class="mb-3 text-center">
      <b-button block @click="signInWithGoogle">
        <b-icon-google /> &nbsp; Entrar com o google
      </b-button>
      <b-button block @click="$emit('signInWithEmail')">
        <b-icon-envelope-fill /> &nbsp; Entrar com e-mail
      </b-button>
    </div>
    <form @submit.prevent="validate().then(login)">
      <b-form-group label="Digite seu e-mail">
        <validation-provider v-slot="{ errors }" name="e-mail" rules="required">
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
      <div class="text-right mb-2">
        <b-btn variant="link" class="btn-link" @click="$emit('forgotPassword')">
          Esqueci minha senha
        </b-btn>
      </div>
      <button
        type="submit"
        class="btn btn-primary btn-lg btn-block"
        :disabled="invalid || loading"
      >
        <b-spinner v-if="loading" small />
        <span v-else>ENTRAR</span>
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
      loading: false,
      form: {
        login: '',
        password: '',
      },
    }
  },
  methods: {
    async signIn(provider) {
      const userCredential = await this.$fire.auth
        .signInWithPopup(provider)
        .catch(this.firebaseError)
      if (userCredential && userCredential.user) {
        this.welcome(userCredential.user)
      }
    },
    async signInWithGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      await this.signIn(provider)
      // You can add or remove more scopes here provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    },
    login() {
      this.loading = true
      this.$fire.auth
        .signInWithEmailAndPassword(this.form.login, this.form.password)
        .then((userCredential) => {
          this.welcome(userCredential.user)
          this.loading = false
        })
        .catch((error) => {
          this.firebaseError(error)
          this.loading = false
        })
    },
    welcome(user) {
      this.setUser(user)
      this.$bvModal.hide('portal-modal')
      this.notify('Seja bem vindo!')
    },
  },
}
</script>
