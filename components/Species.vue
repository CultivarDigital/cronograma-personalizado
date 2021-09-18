<template>
  <v-list v-if="species && species.length" subheader>
    <v-list-item
      v-for="specie in species"
      :key="specie.id"
      :to="parent + '/' + specie.id"
    >
      <v-list-item-avatar :rounded="false">
        <CachedImage :src="specie.images[0]" thumb />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          {{ specie.name }}
        </v-list-item-title>
        <v-list-item-subtitle v-if="specie.scientific_name">
          {{ specie.scientific_name }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon @click="alert('x')">
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    species: {
      type: Array,
      default: () => null,
      required: true,
    },
    parent: {
      type: String,
      default: null,
      required: true,
    },
  },
}
</script>
