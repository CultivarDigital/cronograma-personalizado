<template>
  <ValidationObserver v-slot="{ validate, invalid }">
    <p class="text-center">
      Já possúi uma conta?
      <b-button variant="secondary" size="sm" @click="$emit('login')">
        ENTRE
      </b-button>
    </p>
    <form @submit.prevent="validate().then(register)">
      <b-form-group label="Qual seu email?">
        <validation-provider
          v-slot="{ errors }"
          name="e-mail"
          rules="required|min:4"
        >
          <b-form-input v-model="form.email" />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Vamos criar uma senha pra você?">
        <validation-provider
          v-slot="{ errors }"
          name="senha"
          rules="required|min:4"
        >
          <b-form-input v-model="form.password" type="password" />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Confirme sua senha">
        <validation-provider
          v-slot="{ errors }"
          name="confirmação da senha"
          rules="required"
        >
          <b-form-input v-model="form.password_confirmation" type="password" />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>

      <button
        type="submit"
        class="btn btn-primary btn-lg btn-block"
        :disabled="invalid || loading"
      >
        <b-spinner v-if="loading" />
        <span v-else>CADASTRAR</span>
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
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    async register() {
      this.loading = true
      if (
        this.form.password &&
        this.form.password === this.form.password_confirmation
      ) {
        try {
          await this.$fire.auth.createUserWithEmailAndPassword(
            this.form.email,
            this.form.password
          )
          if (this.$store.state.authUser) {
            this.notify('Seja bem vindo ' + this.user.name)
            this.$emit('registered')
          }
        } catch (error) {
          this.firebaseError(error)
        }
      } else {
        this.notify('As duas senhas devem ser iguais', 'error')
      }
      this.loading = false
    },
  },
}
</script>
