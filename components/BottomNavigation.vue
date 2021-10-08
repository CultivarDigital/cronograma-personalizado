<template>
  <v-bottom-navigation
    v-model="value"
    fixed
    background-color="primary"
    dark
    grow
    app
    hide-on-scroll
    class="d-lg-none"
  >
    <v-btn to="/" dark>
      <span>Início</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="/ferramentas">
      <span>Ferramentas</span>
      <v-icon>mdi-rake</v-icon>
    </v-btn>
    <v-btn to="/guias">
      <span>Guias</span>
      <v-icon>mdi-library</v-icon>
    </v-btn>
    <v-btn to="lojinha">
      <span>Lojinha</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
}
</script>
