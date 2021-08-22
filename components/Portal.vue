<template>
  <div>
    <b-modal id="portal-modal" :title="title" hide-footer>
      <div class="pb-4">
        <div v-if="$auth.loggedIn">Você já está logado!</div>
        <div v-else>
          <ForgotPassword
            v-if="tab == 'forgot_password'"
            @cancel="tab = null"
          />
          <Register v-else-if="tab == 'register'" @registered="tab = null" />
          <Login v-else @forgotPassword="tab = 'forgot_password'" />
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
      tab: null,
    }
  },
  computed: {
    title() {
      if (this.tab === 'forgot_password') {
        return 'Esqueci minha senha'
      } else if (this.tab === 'register') {
        return 'Informe seus dados para cadastrar'
      } else {
        return 'Faça o login para continuar'
      }
    },
  },
}
</script>
