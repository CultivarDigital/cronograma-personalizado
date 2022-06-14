<template>
  <div>
    <TopNavigation active="Meus dados" />
    <v-container>
      <div>
        <Subtitle label="Meu perfil" back-to="/dashboard" />
      </div>
    </v-container>
    <div class="text-center">
      <v-btn small to="/dados-de-acesso">Editar dados de acesso</v-btn>
    </div>
    <ProfileForm />
  </div>
</template>
