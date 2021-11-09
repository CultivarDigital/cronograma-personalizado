<template>
  <div>
    <span>Aceito os</span>
    <v-dialog v-model="terms_dialog" fullscreen>
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" small v-on="on"> Termos de uso </v-btn>
      </template>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-btn icon dark @click="terms_dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span>Termos de uso</span>
        </v-toolbar>
        <v-card-text class="pt-6">
          <TermsOfUse />
        </v-card-text>
      </v-card>
    </v-dialog>
    <span>e a</span>
    <v-dialog v-model="privacy_dialog" fullscreen>
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" small v-on="on"> Política de privacidade </v-btn>
      </template>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-btn icon dark @click="privacy_dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span>Política de privacidade</span>
        </v-toolbar>
        <v-card-text class="pt-6">
          <PrivacyPolicy />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      terms_dialog: false,
      privacy_dialog: false,
    }
  },
}
</script>

<style scoped lang="sass">
h1, h2, h3, h4, ul
	margin-bottom: 15px
</style>
