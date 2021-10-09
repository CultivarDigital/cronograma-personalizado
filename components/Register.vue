<template>
  <v-container class="mt-3">
    <ValidationObserver v-slot="{ validate, invalid }">
      <p class="text-center mb-6">
        Já possúi uma conta?
        <v-btn color="primary" @click="$emit('login')"> ENTRE </v-btn>
      </p>
      <v-form @submit.prevent="validate().then(register)">
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
          <span v-else>CADASTRAR</span>
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
            this.$notifier.success('Seja bem vindo!')
            this.$emit('registered')
          })
          .catch(this.$notifier.dbError)
      } else {
        this.$notifier.error('As senhas devem ser iguais')
      }
      this.loading = false
    },
  },
}
</script>
