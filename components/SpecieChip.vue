<!-- eslint-disable vue/no-v-html -->
<template>
  <v-chip
    v-if="specie"
    :to="to"
    class="mr-1 mb-1 pl-2"
    small
    @click="$emit('click', specie)"
  >
    <v-avatar v-if="specie.images" class="accent white--text" left>
      <CachedImage :title="specie.name" :src="specie.images[0]" thumb />
    </v-avatar>
    {{ specie.name }}
  </v-chip>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
      required: true,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    species() {
      return this.$store.state.species
    },
    specie() {
      return this.$store.state.species.find(
        (specie) => specie.id === this.value
      )
    },
  },
}
</script>
