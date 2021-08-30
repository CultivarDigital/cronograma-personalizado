<template>
  <ValidationObserver v-slot="{ validate, invalid }">
    <form @submit.prevent="validate().then(register)">
      <Upload
        v-model="form.avatar"
        type="images"
        avatar
        label="Sua foto"
        prefix="avatar"
      />
      <b-form-group label="Seu nome">
        <validation-provider v-slot="{ errors }" name="nome" rules="required">
          <b-form-input v-model="form.name" />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Seu email">
        <validation-provider
          v-slot="{ errors }"
          name="e-mail"
          rules="required|email"
        >
          <b-form-input v-model="form.email" @input="validateEmail" />
          <Error
            v-if="!emailIsValid"
            :list="['Este e-mail já está sendo usado']"
          />

          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <b-form-group label="Seu telefone">
        <b-form-input
          v-model="form.phone"
          v-mask="['(##) ####-####', '(##) #####-####']"
        />
      </b-form-group>
      <b-form-group label="Qual sua região?">
        <b-form-select
          v-model="form.region"
          :options="['Centro-oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul']"
        />
      </b-form-group>
      <b-form-group label="Conte um pouco sobre você">
        <b-form-textarea v-model="form.bio" />
      </b-form-group>
      <b-form-group label="Nome de usuário" class="mb-0">
        <validation-provider
          v-slot="{ errors }"
          name="nome de usuário"
          rules="required|min:4"
        >
          <b-input-group prepend="@">
            <b-form-input v-model="form.username" @input="validateUsername" />
          </b-input-group>
          <Error
            v-if="!usernameIsValid"
            :list="['Este nome de usuário já está sendo usado']"
          />
          <Error :list="errors" />
        </validation-provider>
      </b-form-group>
      <div v-if="change_password" class="mt-4">
        <b-form-group label="Crie uma nova senha">
          <validation-provider
            v-slot="{ errors }"
            name="senha"
            rules="required|min:4"
          >
            <b-form-input v-model="form.password" type="password" />
            <Error :list="errors" />
          </validation-provider>
        </b-form-group>
        <b-form-group label="Confirme sua nova senha" class="mb-0">
          <validation-provider
            v-slot="{ errors }"
            name="confirmação da senha"
            rules="required"
          >
            <b-form-input
              v-model="form.password_confirmation"
              type="password"
            />
            <Error :list="errors" />
          </validation-provider>
        </b-form-group>
      </div>
      <div class="text-right mb-3">
        <a @click="change_password = !change_password">Alterar a senha</a>
      </div>
      <button
        type="submit"
        class="btn btn-primary btn-lg btn-block"
        :disabled="invalid || !usernameIsValid || !emailIsValid"
      >
        SALVAR MEUS DADOS
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
      emailIsValid: true,
      change_password: false,
      form: {
        avatar: null,
        name: '',
        username: '',
        email: '',
        phone: '',
        region: null,
        bio: '',
      },
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.user
    },
  },
  created() {
    Object.keys(this.form).forEach((key) => {
      this.form[key] = this.currentUser[key]
    })
  },
  methods: {
    async register() {
      if (this.form.password === this.form.password_confirmation) {
        this.user = await this.$axios
          .$put('/api/users/profile', this.form)
          .catch(this.showError)
        if (this.user) {
          this.$auth.fetchUser()
          this.notify('Seu perfil foi atualizado com sucesso!')
          this.$bvModal.hide('portal-modal')
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
    async validateEmail() {
      this.emailIsValid = true
      if (
        this.form.email &&
        this.form.email.includes('@') &&
        this.form.email.includes('.')
      ) {
        this.emailIsValid = await this.$axios
          .$get('/api/users/available/' + this.form.email, this.form)
          .catch(this.showError)
      }
    },
  },
}
</script>
