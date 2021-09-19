<template>
  <v-container class="mt-3">
    <v-form @submit.prevent="sendEmail">
      <v-alert v-if="success" type="success">
        Enviamos um e-mail para <strong>{{ email }}</strong
        >. Clique no link enviado para entrar.
      </v-alert>
      <div v-else>
        <v-text-field v-model="email" label="Digite seu e-mail" outlined />
        <v-btn
          type="submit"
          color="success"
          block
          large
          :disabled="loading"
          class="mb-2"
        >
          <v-progress-circular
            v-if="loading"
            color="black"
            indeterminate
            size="20"
          />
          <span v-else>Receber link para entrar</span>
        </v-btn>
      </div>
      <v-btn block @click="$emit('login')"> Voltar </v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: 'diegomr86@gmail.com',
      success: false,
      loading: false,
    }
  },
  computed: {
    baseURL() {
      return process.env.baseURL
    },
  },
  methods: {
    sendEmail() {
      this.loading = true
      this.success = false

      const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: this.baseURL + '?email_login=true',
        // This must be true.
        handleCodeInApp: true,
        android: {
          packageName: 'com.ionicframework.plantai563575',
          installApp: true,
          minimumVersion: '12',
        },
        dynamicLinkDomain: 'cultivarbrasil.page.link',
      }
      this.$fire.auth.languageCode = 'pt-BR'
      this.$fire.auth
        .sendSignInLinkToEmail(this.email, actionCodeSettings)
        .then(() => {
          this.setLocalItem('emailForSignIn', this.email)
          this.loading = false
          this.success = true
        })
        .catch((error) => {
          this.firebaseError(error)
          this.loading = false
        })
    },
  },
}
</script>
