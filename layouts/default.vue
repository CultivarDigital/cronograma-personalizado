<template>
  <div>
    <v-app>
      <BottomNavigation />
      <DrawerNavigation />

      <v-main class="mb-4">
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
