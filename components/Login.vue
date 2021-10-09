<template>
  <v-container class="mt-3">
    <ValidationObserver v-slot="{ validate, invalid }">
      <p class="text-center mb-6">
        <span class="d-inline-block mb-3">Ainda não possúi uma conta?</span>
        <v-btn color="primary" @click="$emit('register')"> CADASTRE-SE </v-btn>
      </p>
      <div class="mb-3 text-center">
        <v-btn color="primary" block class="mb-2" @click="signInWithGoogle">
          <v-icon left>mdi-google</v-icon> Entrar com o google
        </v-btn>
        <v-btn block @click="$emit('signInWithEmail')">
          <v-icon left>mdi-email</v-icon> Entrar com e-mail
        </v-btn>
      </div>
      <p class="text-caption text-center pt-3 pb-2">
        Ou informe seus dados abaixo:
      </p>
      <v-form @submit.prevent="validate().then(login)">
        <validation-provider v-slot="{ errors }" name="e-mail" rules="required">
          <v-text-field
            v-model="form.login"
            outlined
            label="Digite seu e-mail"
            :error-messages="errors"
          />
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="senha" rules="required">
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
          <v-btn small @click="$emit('forgotPassword')">
            Esqueci minha senha
          </v-btn>
        </div>
        <v-btn
          type="submit"
          color="success"
          block
          large
          :disabled="invalid || loading"
        >
          <v-progress-circular
            v-if="loading"
            color="black"
            indeterminate
            size="20"
          />
          <span v-else>ENTRAR</span>
        </v-btn>
      </v-form>
    </ValidationObserver>
  </v-container>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
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
    signInWithGoogle() {
      this.$firebase
        .loginWithGoogle()
        .then((userCredential) => {
          if (userCredential && userCredential.user) {
            this.welcome(userCredential.user)
          }
        })
        .catch(this.$notifier.dbError)
    },
    login() {
      this.loading = true
      this.$firebase
        .login(this.form.login, this.form.password)
        .then((userCredential) => {
          this.welcome(userCredential.user)
          this.loading = false
        })
        .catch((error) => {
          this.$notifier.dbError(error)
          this.loading = false
        })
    },
    welcome(user) {
      this.setUser(user)
      this.$store.dispatch('hidePortal')
      this.$notifier.success('Seja bem vindo!')
    },
  },
}
</script>
