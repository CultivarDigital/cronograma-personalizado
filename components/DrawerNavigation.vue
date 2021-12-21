<template>
  <v-navigation-drawer
    :value="showDrawer"
    app
    width="280"
    @input="toggleDrawer"
  >
    <v-toolbar color="primary" dark>
      <strong>Cronograma Personalizado</strong>
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
