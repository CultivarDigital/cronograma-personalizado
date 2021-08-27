<template>
  <div>
    <b-modal id="portal-modal" :title="title" size="lg" hide-footer>
      <div>
        <div v-if="$auth.loggedIn">
          <Profile />
        </div>
        <div v-else>
          <ForgotPassword
            v-if="tab == 'forgot_password'"
            @cancel="tab = null"
          />
          <Register
            v-else-if="tab == 'register'"
            @registered="tab = null"
            @login="tab = null"
          />
          <Login
            v-else
            @forgotPassword="tab = 'forgot_password'"
            @register="tab = 'register'"
          />
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import ForgotPassword from './ForgotPassword.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import Profile from './Profile.vue'
export default {
  components: { Login, ForgotPassword, Register, Profile },
  data() {
    return {
      tab: null,
    }
  },
  computed: {
    title() {
      if (this.$auth.loggedIn) {
        if (this.$auth.user.email) {
          return 'Editar perfil'
        } else {
          return 'Complete seu cadastro'
        }
      } else if (this.tab === 'forgot_password') {
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
