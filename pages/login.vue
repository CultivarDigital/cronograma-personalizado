<template>
  <v-container class="pt-10 primary--text text-center" style="max-width: 340px">
    <ValidationObserver v-slot="{ validate, invalid }">
      <v-form @submit.prevent="validate().then(login)">
        <img
          src="~/assets/img/logo-login.png"
          alt="Cronograma personalizado"
          class="mb-6"
        />
        <div>
          <h2 class="text-h4 font-weight-bold">Seja bem-vinda!</h2>
          <p class="text-subtitle-1 mb-6">
            Para acessar, basta adicionar seus dados.
          </p>
          <validation-provider
            v-slot="{ errors }"
            name="e-mail"
            rules="required"
          >
            <h4
              class="text-subtitle-1 font-weight-black mb-3"
              style="opacity: 0.6"
            >
              Login
            </h4>
            <v-text-field
              v-model="form.login"
              outlined
              label="Digite seu e-mail"
              :error-messages="errors"
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="senha"
            rules="required"
          >
            <h4
              class="text-subtitle-1 font-weight-black mb-3"
              style="opacity: 0.6"
            >
              Senha
            </h4>
            <v-text-field
              v-model="form.password"
              outlined
              type="password"
              :error-messages="errors"
              label="Digite sua senha"
              hide-details="auto"
            />
          </validation-provider>
          <div class="text-right mb-6 mt-2">
            <v-btn
              color="primary"
              outlined
              small
              to="/esqueci-minha-senha"
              rounded
            >
              Esqueci minha senha
            </v-btn>
          </div>
        </div>
        <Save :invalid="invalid" :loading="loading" label="Entrar" />
        <v-btn
          color="primary"
          block
          class="mb-2"
          rounded
          @click="signInWithGoogle"
        >
          <v-icon left>mdi-google</v-icon> Entrar com o google
        </v-btn>
        <v-btn color="primary" plain to="/cadastro">Cadastre-se</v-btn>
      </v-form>
    </ValidationObserver>
  </v-container>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { getAuth, getIdToken } from 'firebase/auth'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  layout: 'front',
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
    signInWithGoogle(rounded) {
      this.$firebase
        .loginWithGoogle()
        .then((userCredential) => {
          if (userCredential && userCredential.user) {
            this.authenticateApi(userCredential)
          }
        })
        .catch(this.$notifier.firebaseError)
    },
    authenticateApi(userCredential) {
      getIdToken(getAuth().currentUser).then((token) => {
        this.$auth
          .loginWith('local', {
            data: {
              token,
            },
          })
          .then((resp) => {
            this.welcome(userCredential.user)
            this.loading = false
          })
          .catch(this.$notifier.apiError)
      })
    },
    login() {
      this.loading = true
      this.$firebase
        .login(this.form.login, this.form.password)
        .then((userCredential) => {
          this.authenticateApi(userCredential)
        })
        .catch((error) => {
          this.$notifier.firebaseError(error)
          this.loading = false
        })
    },
    welcome(user) {
      this.$router.replace('/dashboard')
      this.$notifier.success('Seja bem vinda!')
    },
  },
}
</script>
