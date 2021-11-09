<!-- eslint-disable vue/no-v-html -->
<template>
  <v-chip
    v-if="specie"
    :to="to || link"
    class="mr-1 mb-1"
    color="primary"
    @click="$emit('click', specie)"
  >
    <v-avatar v-if="specie && specie.images" class="accent white--text" left>
      <CachedImage :title="specie.name" :src="specie.images[0]" thumb />
    </v-avatar>
    {{ specie.name || specie }}
  </v-chip>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Object],
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
    link() {
      if (this.specie && this.specie.id)
        return '/ferramentas/catalogo-de-especies/' + this.specie.id
      else return null
    },
    specie() {
      return (
        this.$store.state.species.find(
          (specie) => specie.id === this.value || specie.name === this.value
        ) || this.value
      )
    },
  },
}
</script>
