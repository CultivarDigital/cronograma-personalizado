<template>
  <div>
    <div v-if="loading" class="text-center">
      <b-spinner></b-spinner>
    </div>
    <div v-else>
      <div v-if="!recovery_response">
        <form @submit.prevent="recovery">
          <b-form-group label="Digite seu nome de usuário, e-mail ou telefone">
            <b-form-input v-model="login" />
          </b-form-group>
          <b-btn block variant="primary" type="submit" size="lg">
            Recuperar senha
          </b-btn>
          <b-btn block variant="secondary" @click="$emit('cancel')">
            Cancelar
          </b-btn>
        </form>
      </div>
      <div v-else>
        <div v-if="recovery_response.email">
          <p>
            Enviamos um código de recuperação para o email:
            <strong>{{ recovery_response.email }}</strong>
          </p>
          <div v-if="validate_recovery_response === null">
            <p>Insira esse código abaixo para continar</p>
            <b-form-input
              v-model="recovery_code"
              @keyup.prevent.enter="validateRecoveryCode"
            />
            <b-btn
              v-if="recovery_code"
              class="mt-2"
              variant="primary"
              block
              size="lg"
              @click="validateRecoveryCode"
            >
              Validar código
            </b-btn>
          </div>
          <div v-if="validate_recovery_response">
            <div class="alert alert-success m-3">
              Validamos seu código de recuperação com sucesso! Agora é hora de
              criar sua nova senha:
            </div>
            <form @submit.prevent="setPassword">
              <b-form-group label="Digite sua nova senha">
                <b-form-input v-model="password" type="password" />
              </b-form-group>
              <b-form-group label="Confirme sua nova senha">
                <b-form-input v-model="password_confirmation" type="password" />
              </b-form-group>
              <button type="submit" class="btn btn-primary btn-lg btn-block">
                SALVAR SENHA
              </button>
            </form>
          </div>
          <div v-if="validate_recovery_response === false">
            <div class="alert alert-danger">Código inválido</div>
            <b-btn variant="primary" block size="lg" @click="recovery">
              Reenviar código
            </b-btn>
          </div>
        </div>
        <div v-else>
          Enviamos um código de 4 digitos para o email:
          <strong>{{ user.email }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: 'diegomr86@gmail.com',
      recovery_response: null,
      validate_recovery_response: null,
      recovery_code: null,
      password: null,
      password_confirmation: null,
      loading: false,
    }
  },
  created() {
    // this.recovery()
  },
  methods: {
    async recovery() {
      this.loading = true
      this.recovery_code = null
      this.validate_recovery_response = null
      this.recovery_response = await this.$axios
        .$get('/api/users/password_recovery/' + this.login)
        .catch(this.showError)
      this.loading = false
      this.$emit('click')
    },
    async validateRecoveryCode() {
      this.validate_recovery_response = null
      this.validate_recovery_response = await this.$axios
        .$post('/api/users/validate_recovery/' + this.login, {
          code: this.recovery_code,
        })
        .catch(this.showError)
    },
    async setPassword() {
      if (this.password && this.password === this.password_confirmation) {
        const formData = {
          login: this.login,
          password: this.password,
          password_confirmation: this.password_confirmation,
          recovery_code: this.recovery_code,
        }
        const user = await this.$axios
          .$post('/api/users/set_password', formData)
          .catch(this.showError)
        if (user) {
          await this.$auth
            .loginWith('local', {
              data: formData,
            })
            .catch(this.showError)
          if (this.$store.state.user) {
            this.$bvModal.hide('portal-modal')
            this.$notify('Sua senha foi alterada com sucesso! Seja bem vindo')
          }
        }
      } else {
        this.notify('As duas senhas devem ser iguais', 'error')
      }
    },
  },
}
</script>
