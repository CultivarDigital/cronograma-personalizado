<template>
  <v-container class="mt-3 text-center">
    <ValidationObserver v-slot="{ validate, invalid }">
      <p class="mb-6">
        <User />
      </p>
      <v-form @submit.prevent="validate().then(register)">
        <h3 class="text-h5 font-weight-bold">Seja bem vinda</h3>
        <p style="color: #ababab" class="mb-8">Vamos começar o seu cadastro?</p>
        <validation-provider v-slot="{ errors }" name="name" rules="required">
          <v-text-field
            v-model="form.name"
            outlined
            label="Qual seu nome?"
            :error-messages="errors"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="e-mail"
          rules="required|min:4"
        >
          <v-text-field
            v-model="form.email"
            outlined
            label="Qual seu email?"
            :error-messages="errors"
          />
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="senha" rules="required">
          <v-text-field
            v-model="form.password"
            outlined
            type="password"
            label="Vamos criar uma senha pra você?"
            :error-messages="errors"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="confirmação da senha"
          rules="required|min:4"
        >
          <v-text-field
            v-model="form.password_confirmation"
            outlined
            type="password"
            label="Confirme sua senha"
            :error-messages="errors"
          />
        </validation-provider>
        <Save :invalid="invalid" :loading="loading" label="Cadastrar" />
        <div class="text-center">
          <v-btn color="primary" plain to="/login">Entre</v-btn>
        </div>
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
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    register() {
      if (
        this.form.password &&
        this.form.password === this.form.password_confirmation
      ) {
        this.loading = true
        this.$firebase
          .register(this.form.email, this.form.password)
          .then((userCredential) => {
            this.authenticateApi(userCredential)
          })
          .catch(this.error)
      } else {
        this.$notifier.error('As senhas devem ser iguais')
      }
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
            const { name } = this.form
            this.$axios
              .$patch('/v1/users/' + this.$auth.user.id, { name })
              .then((user) => {
                this.$auth.setUser(user)
                this.welcome(userCredential.user)
              })
              .catch(this.error)
          })
          .catch(this.error)
      })
    },
    error(error) {
      this.$notifier.firebaseError(error)
      this.loading = false
    },
    welcome(user) {
      this.loading = false
      this.$router.replace('/dashboard')
      this.$notifier.success('Seja bem vinda!')
    },
  },
}
</script>
