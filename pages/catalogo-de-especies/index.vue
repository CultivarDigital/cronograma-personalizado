<template>
  <div>
    <breadcrumb
      :links="[['Ferramentas', '/ferramentas']]"
      active="Catálogo de espécies"
      description="Veja as espécies mais cultivadas na sua região"
    />
    <b-container fluid>
      <div class="text-center">
        <p>
          Espécies mais cultivadas no
          <strong>{{ currentRegion || 'Brasil' }}</strong>
        </p>
      </div>
      <div class="mb-3">
        <SpecieCategoriesFilter v-model="filters.category" />
      </div>
      <div>
        <small>{{ species.length }} espécies encontradas</small>
      </div>
      <ul class="list-unstyled">
        <b-media
          v-for="specie in species"
          :key="specie._id"
          tag="li"
          class="border-top py-2"
        >
          <template #aside>
            <n-link :to="'/catalogo-de-species/' + specie.slug">
              <CachedImage :value="specie.images[0]" thumb />
            </n-link>
          </template>
          <h5 class="mb-1">
            <n-link :to="'/catalogo-de-species/' + specie.slug">{{
              specie.name
            }}</n-link>
          </h5>
          <p v-if="specie.scientific_name" class="mb-0">
            {{ specie.scientific_name }}
          </p>
        </b-media>
      </ul>
      <!-- <ul class="list-unstyled">
        <b-media
          v-for="especie in especies"
          :key="especie.id"
          tag="li"
          class="border-top pt-3"
        >
          <template #aside>
            <n-link :to="'/catalogo-de-especies/' + especie.slug">
              <b-img
                :src="require('~/assets/img/plants/' + especie.slug + '.png')"
                width="64"
                alt="placeholder"
              />
            </n-link>
          </template>
          <h5 class="mb-1">
            <n-link :to="'/catalogo-de-especies/' + especie.slug">{{
              especie.nome
            }}</n-link>
          </h5>
          <p>
            {{ especie.nome_cientifico }}
          </p>
        </b-media>
      </ul> -->
    </b-container>
  </div>
</template>
<script>
import especies from '@/data/especies.json'
export default {
  data() {
    return {
      filters: {
        category: null,
      },
    }
  },
  computed: {
    especies() {
      return especies.filter(
        (especie) => especie.plantio[this.currentRegion] !== '*'
      )
    },
    species() {
      let species = this.$store.state.species
      if (this.filters.category) {
        species = species.filter(
          (specie) =>
            specie.category && specie.category.includes(this.filters.category)
        )
      }
      return species
    },
  },
}
</script>
