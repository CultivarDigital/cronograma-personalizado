<template>
  <v-navigation-drawer :value="showDrawer" app @input="toggleDrawer">
    <v-toolbar color="primary" dark>
      <img
        title="Cultivar"
        :src="
          require('~/assets/img/cultivar-logo-verde-fundo-redondo-branco.png')
        "
        class="mr-4"
        width="32"
      />
      <strong>Cultivar </strong>
    </v-toolbar>
    <SidebarMenu />
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    showDrawer() {
      return this.$store.state.showDrawer
    },
  },
  methods: {
    showPortal() {
      this.$store.dispatch('showPortal')
    },
    toggleDrawer(status) {
      this.$store.dispatch('toggleDrawer', status)
    },
  },
}
</script>
