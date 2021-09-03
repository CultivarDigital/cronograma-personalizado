<template>
  <div>
    <b-modal id="portal-modal" :title="title" size="lg" hide-footer>
      <div>
        <div v-if="$store.state.authUser">
          <Profile />
        </div>
        <div v-else>
          <ForgotPassword v-if="tab == 'forgot_password'" @login="tab = null" />
          <SignInWithEmail
            v-if="tab == 'sign_in_with_email'"
            @login="tab = null"
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
            @signInWithEmail="tab = 'sign_in_with_email'"
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
      tab: 'login',
    }
  },
  computed: {
    authUser() {
      return this.$store.state.authUser
    },
    title() {
      if (this.authUser) {
        if (this.authUser.email) {
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
