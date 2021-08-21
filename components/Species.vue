<template>
  <div v-if="species && species.length">
    <b-media
      v-for="specie in species"
      :key="specie._id"
      class="border-top py-2"
    >
      <template #aside>
        <n-link :to="'/catalogo-de-especies/' + specie.slug">
          <CachedImage :value="specie.images[0]" thumb width="64" />
        </n-link>
      </template>
      <h5 class="mb-1">
        <n-link :to="'/catalogo-de-especies/' + specie.slug">{{
          specie.name
        }}</n-link>
      </h5>
      <p v-if="specie.scientific_name" class="mb-0">
        {{ specie.scientific_name }}
      </p>
    </b-media>
  </div>
</template>

<script>
export default {
  props: {
    species: {
      type: Array,
      default: () => null,
    },
  },
}
</script>
