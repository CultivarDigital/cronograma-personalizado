<template>
  <div>
    <Breadcrumb
      :links="[['Ferramentas', '/ferramentas']]"
      active="Catálogo de espécies"
      description="Veja as espécies mais cultivadas na sua região"
    />
    <v-container fluid>
      <div class="filters">
        <DropdownSelect
          v-model="filters.category"
          :options="filtersOptions.specie_categories"
          label="Categoria"
          no-item="Todas as categorias"
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
          v-model="filters.climate"
          :options="filtersOptions.specie_climate"
          label="Clima"
          no-item="Todos os climas"
          @input="applyFilters"
        />
        <DropdownSelect
          v-model="filters.height"
          :options="filtersOptions.specie_height"
          label="Altura"
          no-item="Todas as alturas"
          @input="applyFilters"
        />
        <DropdownSelect
          v-model="filters.stratum"
          :options="filtersOptions.specie_stratum"
          label="Estrato"
          description="Luminosidade"
          no-item="Todas as luminosidades"
          @input="applyFilters"
        />
        <DropdownSelect
          v-model="filters.cycle"
          :options="filtersOptions.specie_cycle"
          label="Ciclo"
          description="Tempo"
          no-item="Todos os ciclos"
          @input="applyFilters"
        />

        <v-text-field
          v-model="filters.search"
          class="mt-3"
          placeholder="Buscar"
          append-icon="mdi-magnify"
          outlined
          hide-details="true"
          dense
        />
      </div>
    </v-container>
    <v-subheader class="justify-center">
      <span v-if="species.length > 1">
        {{ species.length }} espécies encontradas
      </span>
      <span v-else-if="species.length == 1"> Uma espécie encontrada </span>
      <span v-else>Nenhuma espécie encontrada</span>
    </v-subheader>
    <Species
      :species="paginatedList"
      parent="/ferramentas/catalogo-de-especies"
    />
    <v-skeleton-loader
      v-if="paginatedList.length !== species.length"
      v-intersect="paginate"
      type="list-item-avatar-two-line@3"
    />
  </div>
</template>
<script>
import slugify from 'slugify'
export default {
  data() {
    return {
      filters: {
        category: null,
        origin: null,
        climate: null,
        height: null,
        stratum: null,
        cycle: null,
      },
      per_page: 15,
      page: 1,
    }
  },
  computed: {
    filtersOptions() {
      return this.$store.state.filters
    },
    paginatedList() {
      if (this.$route.query.save_offline) {
        return this.species
      } else {
        return this.species.slice(0, this.page * this.per_page)
      }
    },
    species() {
      let species = this.$store.state.species
      species = species.filter((specie) => {
        const isValid =
          this.includes(specie.categories, 'category') &&
          this.includes(specie.stratum, 'stratum') &&
          this.includes(specie.cycle, 'cycle') &&
          this.includes(specie.climate, 'climate') &&
          this.includes(specie.origin, 'origin') &&
          this.includes(specie.height, 'height')

        if (this.filters.search) {
          const search = slugify(this.filters.search).toLowerCase()
          const text = slugify(
            specie.name + specie.scientific_name + specie.popular_names.join('')
          ).toLowerCase()
          return text.includes(search)
        }
        return isValid
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
    },
    paginate() {
      this.page += 1
    },
  },
}
</script>
