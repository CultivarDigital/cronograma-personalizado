<template>
  <ValidationObserver v-slot="{ validate, invalid }">
    <form @submit.prevent="validate().then(register)">
      <b-form-group label="Qual seu nome?">
        <validation-provider v-slot="{ errors }" name="nome" rules="required">
          <b-form-input v-model="form.name" />
          <Error :errors="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Vamos criar nome de usuário pra você?">
        <validation-provider
          v-slot="{ errors }"
          name="nome de usuário"
          rules="required"
        >
          <b-input-group prepend="@">
            <b-form-input v-model="form.username" />
          </b-input-group>
          <small v-if="form.username">
            Seu nome de usuário será
            <strong>@{{ form.username }}</strong>
          </small>
          <Error :errors="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Crie uma senha">
        <validation-provider v-slot="{ errors }" name="senha" rules="required">
          <b-form-input v-model="form.password" type="password" />
          <Error :errors="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Confirme sua senha">
        <validation-provider
          v-slot="{ errors }"
          name="confirmação da senha"
          rules="required"
        >
          <b-form-input v-model="form.password_confirmation" type="password" />
          <Error :errors="errors" />
        </validation-provider>
      </b-form-group>
      <button
        type="submit"
        class="btn btn-primary btn-lg btn-block"
        :disabled="invalid"
      >
        CADASTRAR
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
        name: '',
        username: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    async register() {
      if (
        this.form.password &&
        this.form.password === this.form.password_confirmation
      ) {
        this.user = await this.$axios
          .$post('/api/users/register', this.form)
          .catch(this.showError)
        if (this.user) {
          await this.$auth
            .loginWith('local', {
              data: { login: this.form.username, password: this.form.password },
            })
            .catch(this.showError)
          if (this.$auth.loggedIn) {
            this.notify('Seja bem vindo ' + this.user.name)
            this.$emit('registered')
          }
        }
      } else {
        this.notify('As duas senhas devem ser iguais', 'error')
      }
    },
  },
}
</script>
