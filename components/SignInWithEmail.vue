<template>
  <div>
    <form @submit.prevent="sendEmail">
      <div v-if="success" class="alert alert-info">
        Enviamos um e-mail para <strong>{{ email }}</strong
        >. Clique no link enviado para entrar.
      </div>
      <div v-else>
        <b-form-group label="Digite seu e-mail">
          <b-form-input v-model="email" />
        </b-form-group>
        <b-btn
          block
          variant="primary"
          type="submit"
          size="lg"
          :disabled="loading"
          class="mb-3"
        >
          <v-progress-circular
            v-if="loading"
            color="black"
            indeterminate
            size="20"
          />
          <span v-else>Receber link para entrar</span>
        </b-btn>
      </div>
      <b-btn block variant="secondary" @click="$emit('login')"> Voltar </b-btn>
    </form>
  </div>
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
      console.log(actionCodeSettings)
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
