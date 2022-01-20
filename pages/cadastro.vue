<template>
  <v-container class="mt-3 text-center">
    <ValidationObserver v-slot="{ validate, invalid }">
      <p class="mb-6">
        <User />
      </p>
      <v-form @submit.prevent="validate().then(register)">
        <h3 class="text-h5 font-weight-bold">Seja bem vinda</h3>
        <p style="color: #ababab" class="mb-8">Vamos começar o seu cadastro?</p>
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
        <validation-provider
          v-slot="{ errors }"
          name="senha"
          rules="required|min:4"
        >
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
          rules="required"
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
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    register() {
      this.loading = true
      if (
        this.form.password &&
        this.form.password === this.form.password_confirmation
      ) {
        this.$firebase
          .register(this.form.email, this.form.password)
          .then(() => {
            this.$notifier.success('Seja bem vinda!')
            this.$emit('registered')
          })
          .catch(this.$notifier.firebaseError)
      } else {
        this.$notifier.error('As senhas devem ser iguais')
      }
      this.loading = false
    },
  },
}
</script>
