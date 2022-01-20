<template>
  <div
    class="home-wrapper d-flex align-end white--text"
    :style="
      'background-image: url(' + require('~/assets/img/bg-home.png') + ')'
    "
  >
    <v-container style="max-width: 340px">
      <h1 style="font-size: 100px; line-height: 80px" class="mb-0">Olá</h1>
      <p style="font-size: 20px" class="font-weight-light">
        Seja muito bem vinda ao nosso
      </p>
      <div class="text-center">
        <img src="~/assets/img/logo.png" alt="Cronograma personalizado" />
        <br />
        <v-btn
          color="#EFD5B9"
          elevation="0"
          class="primary--text px-10 rounded mb-6"
          to="/login"
        >
          Entrar
        </v-btn>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: 'front',
}
</script>
<style scoped>
.home-wrapper {
  height: 100vh;
  background-size: auto 100%;
  background-position-x: center;
}
</style>
