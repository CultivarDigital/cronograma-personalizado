<template>
  <div>
    <b-modal id="portal-modal" :title="title" hide-footer>
      <div class="pb-4">
        <div v-if="$auth.loggedIn">Você já está logado!</div>
        <div v-else>
          <ForgotPassword v-if="forgot_password" />
          <Register v-else-if="register" @registered="register = false" />
          <Login v-else @forgotPassword="forgot_password = true" />
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import ForgotPassword from './ForgotPassword.vue'
import Login from './Login.vue'
import Register from './Register.vue'
export default {
  components: { Login, ForgotPassword, Register },
  data() {
    return {
      forgot_password: false,
      register: true,
    }
  },
  computed: {
    title() {
      if (this.forgot_password) {
        return 'Esqueci minha senha'
      } else {
        return 'Faça o login para continuar'
      }
    },
  },
}
</script>
