<template>
  <v-navigation-drawer
    :value="showDrawer"
    app
    width="280"
    @input="toggleDrawer"
  >
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
    toggleDrawer(status) {
      this.$store.dispatch('toggleDrawer', status)
    },
  },
}
</script>
