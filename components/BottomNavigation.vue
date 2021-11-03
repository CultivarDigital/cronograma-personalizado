<template>
  <v-bottom-navigation
    v-model="value"
    fixed
    grow
    app
    hide-on-scroll
    background-color="primary"
    dark
    class="d-lg-none"
  >
    <v-btn to="/guias">
      <v-icon>mdi-library</v-icon>
    </v-btn>
    <v-btn to="/ferramentas">
      <v-icon>mdi-tools</v-icon>
    </v-btn>
    <v-btn to="/">
      <v-icon dark>mdi-home-outline</v-icon>
    </v-btn>
    <v-btn to="/lojinha">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn to="/sobre">
      <v-icon>mdi-information-outline</v-icon>
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
