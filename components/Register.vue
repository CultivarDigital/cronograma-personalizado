<template>
  <ValidationObserver v-slot="{ validate, invalid }">
    <form @submit.prevent="validate().then(register)">
      <b-form-group label="Qual seu nome?">
        <validation-provider v-slot="{ errors }" name="nome" rules="required">
          <b-form-input v-model="form.name" />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Vamos criar nome de usuário pra você?">
        <validation-provider
          v-slot="{ errors }"
          name="nome de usuário"
          rules="required|min:4"
        >
          <b-input-group prepend="@">
            <b-form-input v-model="form.username" @input="validateUsername" />
          </b-input-group>
          <small v-if="form.username && usernameIsValid">
            Seu nome de usuário será
            <strong>@{{ form.username }}</strong>
          </small>
          <Error
            v-if="!usernameIsValid"
            :errors="['Este nome de usuário já está sendo usado']"
          />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Crie uma senha">
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
        :disabled="invalid || !usernameIsValid"
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
      usernameIsValid: true,
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
    async validateUsername() {
      this.usernameIsValid = true
      if (this.form.username && this.form.username.length > 3) {
        this.usernameIsValid = await this.$axios
          .$get('/api/users/available/' + this.form.username, this.form)
          .catch(this.showError)
      }
    },
  },
}
</script>
