<template>
  <div>
    <breadcrumb
      :links="[['Ferramentas', '/ferramentas']]"
      active="Catálogo de espécies"
      description="Veja as espécies mais cultivadas na sua região"
    />
    <b-container fluid>
      <div class="mb-3">
        <DropdownSelect
          v-model="filters.category"
          :options="filtersOptions.specie_categories"
          label="Categoria"
          no-item="Todas as categorias"
          @input="applyFilters"
        />
        <DropdownSelect
          v-model="filters.luminosity"
          :options="filtersOptions.specie_luminosity"
          label="Luminosidade"
          no-item="Todas as luminosidades"
          @input="applyFilters"
        />
        <DropdownSelect
          v-model="filters.cycle"
          :options="filtersOptions.specie_cycle"
          label="Cíclo"
          no-item="Todos os cíclos"
          @input="applyFilters"
        />
        <DropdownSelect
          v-model="filters.climate"
          :options="filtersOptions.specie_climate"
          label="Clima"
          no-item="Todos os climas"
          @input="applyFilters"
        />
        <DropdownSelect
          v-model="filters.origin"
          :options="filtersOptions.specie_origin"
          label="Origem"
          no-item="Todas as origens"
          @input="applyFilters"
        />
        <DropdownSelect
          v-model="filters.height"
          :options="filtersOptions.specie_height"
          label="Altura"
          no-item="Todas as alturas"
          @input="applyFilters"
        />
      </div>
      <div class="text-center mb-3">
        <small v-if="species.length > 1">
          {{ species.length }} espécies encontradas
        </small>
        <small v-else-if="species.length == 1"> Uma espécie encontrada </small>
        <small v-else>Nenhuma espécie encontrada</small>
      </div>
      <div>
        <b-media
          v-for="specie in paginatedList"
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
      <client-only>
        <infinite-loading :identifier="infiniteId" @infinite="paginate">
          <div slot="spinner">Carregando...</div>
          <div slot="no-more"></div>
          <div slot="no-results"></div>
        </infinite-loading>
      </client-only>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filters: {
        category: null,
      },
      per_page: 15,
      page: 1,
      total: 0,
      infiniteId: +new Date(),
    }
  },
  computed: {
    filtersOptions() {
      return this.$store.state.filters
    },
    paginatedList() {
      return this.species.slice(0, this.page * this.per_page)
    },
    species() {
      let species = this.$store.state.species
      species = species.filter((specie) => {
        return (
          this.includes(specie.categories, 'category') &&
          this.includes(specie.luminosity, 'luminosity') &&
          this.includes(specie.cycle, 'cycle') &&
          this.includes(specie.climate, 'climate') &&
          this.includes(specie.origin, 'origin') &&
          this.includes(specie.height, 'height')
        )
      })
      return species
    },
  },
  methods: {
    includes(list, filter) {
      if (this.filters[filter]) {
        return list && list.includes(this.filters[filter])
      }
      return true
    },
    applyFilters() {
      this.page = 1
      this.infiniteId += 1
    },
    paginate($state) {
      this.page += 1
      if (this.per_page * this.page < this.species.length) {
        $state.loaded()
      } else {
        $state.complete()
      }
    },
  },
}
</script>
