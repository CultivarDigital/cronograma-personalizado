<template>
  <div>
    <v-dialog
      :value="$store.state.showPortal"
      fullscreen
      persistent
      hide-overlay
      transition="dialog-bottom-transition"
      @input="$store.dispatch('hidePortal')"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="$store.dispatch('hidePortal')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span>{{ title }}</span>
          <v-spacer></v-spacer>
          <v-btn v-if="authUser" icon dark @click="logout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-toolbar>
        <div v-if="authUser">
          <Profile />
        </div>
        <div v-else>
          <ForgotPassword v-if="tab == 'forgot_password'" @login="tab = null" />
          <SignInWithEmail
            v-else-if="tab == 'sign_in_with_email'"
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
      </v-card>
    </v-dialog>
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
  methods: {
    logout() {
      this.$store.dispatch('hidePortal')
      this.$store.dispatch('logout')
      this.$fire.auth.signOut()
    },
  },
}
</script>
