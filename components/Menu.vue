<template>
  <v-list nav dense>
    <v-subheader>Ferramentas</v-subheader>
    <v-list-item to="/ferramentas/o-que-plantar-esse-mes">
      <v-list-item-icon>
        <v-icon>mdi-calendar</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>O que plantar esse mês?</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/ferramentas/catalogo-de-especies">
      <v-list-item-icon>
        <v-icon>mdi-view-list</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Catálogo de espécies</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-subheader>Guias</v-subheader>
    <v-list-item to="/guias/guia-de-cultivo">
      <v-list-item-icon>
        <v-icon>mdi-sprout-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Aprenda a cultivar</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/guias/guia-de-compostagem">
      <v-list-item-icon>
        <v-icon>mdi-recycle</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Aprenda a compostar</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-subheader>Plataforma</v-subheader>
    <v-list-item to="/colabore">
      <v-list-item-icon>
        <v-icon>mdi-hand-heart</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Colabore</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/sobre">
      <v-list-item-icon>
        <v-icon>mdi-information</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Sobre</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
