<template>
  <div>
    <div v-if="specie && specie.id">
      <Specie
        :specie="specie"
        :parent="{
          title: 'Catálogo de espécies',
          url: '/ferramentas/catalogo-de-especies',
        }"
      />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    species() {
      return this.$store.state.species
    },
    specie() {
      return this.species.find((specie) => specie.id === this.$route.params.id)
    },
  },
}
</script>
