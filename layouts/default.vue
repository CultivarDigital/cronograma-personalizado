<template>
  <div>
    <v-app>
      <BottomNavigation />
      <DrawerNavigation />

      <v-main>
        <Welcome v-if="!$store.state.hasBeenGreeted" />
        <Nuxt />
      </v-main>
      <Snackbar />
    </v-app>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
