<!-- eslint-disable vue/no-v-html -->
<template>
  <v-card class="pa-6 text-center" color="primary" dark>
    <v-icon size="64" class="mb-3">mdi-wifi-strength-off-outline</v-icon>
    <p>Você precisa estar conectado para acessar este recurso</p>
    <v-btn icon @click="$router.go(-1)">
      <v-icon color="white"> mdi-arrow-left </v-icon>
    </v-btn>
  </v-card>
</template>
