<template>
  <div>
    <v-app>
      <BottomNavigation />
      <DrawerNavigation />
      <v-main>
        <Anamnese
          v-if="
            ($auth.user.role === 'user' && !$auth.user.status) ||
            $auth.user.status === 'created'
          "
        />
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
