<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="specie">
    <breadcrumb
      :links="[['Catálogo de espécies', '/catalogo-de-especies']]"
      :active="specie.name"
      :description="specie.description"
      :img="
        'https://www.cultivarbrasil.com' +
        (specie.images && specie.images.length
          ? specie.images[0].url
          : '/cultivar-cover.png')
      "
    />
    <b-container fluid>
      <div class="item">
        <h3>{{ specie.name }}</h3>
        <p>{{ specie.scientific_name }}</p>
      </div>
      <div class="item item-body">
        <div v-if="specie.images && specie.images.length" class="img-wrapper">
          <CachedImage :value="specie.images[0]" />
        </div>
        <p
          v-if="specie.description"
          class="text-justify"
          v-html="specie.description"
        ></p>
        <div v-if="specie.use">
          <h4>Recomendações de aproveitamento</h4>
          <p class="text-justify">{{ specie.use }}</p>
        </div>
        <table class="table description-table">
          <tr v-if="specie.scientific_name">
            <td>Nome científico:</td>
            <th>{{ specie.scientific_name }}</th>
          </tr>
          <tr v-if="specie.popular_names">
            <td>Nomes populares:</td>
            <th>{{ specie.popular_names.join(', ') }}</th>
          </tr>
          <tr v-if="specie.family">
            <td>Família:</td>
            <th>{{ specie.family }}</th>
          </tr>
          <tr v-if="specie.synonymy && specie.synonymy.length">
            <td>Sinonímia:</td>
            <th>{{ specie.synonymy.join(', ') }}</th>
          </tr>
          <tr v-if="specie.categories && specie.categories.length">
            <td>Categoria:</td>
            <th>{{ specie.categories.join(', ') }}</th>
          </tr>
          <tr v-if="specie.climate && specie.climate.length">
            <td>Clima:</td>
            <th>{{ specie.climate.join(', ') }}</th>
          </tr>
          <tr v-if="specie.origin && specie.origin.length">
            <td>Origem:</td>
            <th>{{ specie.origin.join(', ') }}</th>
          </tr>
          <tr v-if="specie.height && specie.height.length">
            <td>Altura:</td>
            <th>{{ specie.height.join(', ') }}</th>
          </tr>
          <tr v-if="specie.cycle && specie.cycle.length">
            <td>Ciclo:</td>
            <th>{{ specie.cycle.join(', ') }}</th>
          </tr>
          <tr v-if="specie.luminosity && specie.luminosity.length">
            <td>Luminosidade:</td>
            <th>{{ specie.luminosity.join(', ') }}</th>
          </tr>
          <tr v-if="specie.harvest_time">
            <td>Tempo de colheita:</td>
            <th>{{ specie.harvest_time }}</th>
          </tr>
          <tr v-if="specie.spacing">
            <td>Espaçamento:</td>
            <th>{{ specie.spacing }}</th>
          </tr>
          <template v-for="additional_field in specie.additional_fields">
            <tr v-if="additional_field.content" :key="additional_field.name">
              <td>{{ additional_field.name }}:</td>
              <th>{{ additional_field.content }}</th>
            </tr>
          </template>
          <template
            v-if="
              specie.medicinal &&
              (specie.medicinal.indications ||
                specie.medicinal.properties ||
                specie.medicinal.parts_used)
            "
          >
            <tr v-if="specie.medicinal.indications">
              <td>Indicações:</td>
              <th>{{ specie.medicinal.indications.join(', ') }}</th>
            </tr>
            <tr v-if="specie.medicinal.properties">
              <td>Propriedades:</td>
              <th>{{ specie.medicinal.properties.join(', ') }}</th>
            </tr>
            <tr v-if="specie.medicinal.parts_used">
              <td>Partes utilizadas:</td>
              <th>{{ specie.medicinal.parts_used.join(', ') }}</th>
            </tr>
          </template>
          <tr v-if="specie.warning">
            <th>
              <strong class="text-warning">Alerta: {{ specie.warning }}</strong>
            </th>
          </tr>
        </table>
        <div v-if="specie.planting_time">
          <h4>Época e regiões para plantio</h4>
          <b-row class="plantio-table" fluid no-gutters>
            <b-col class="{active: (currentRegion == 'Centro-oeste')}">
              <p>C. Oeste</p>
              <p>{{ specie.planting_time['Centro-oeste'] }}</p>
            </b-col>
            <b-col class="{active: (currentRegion == 'Nordeste')}">
              <p>Nordeste</p>
              <p>{{ specie.planting_time['Nordeste'] }}</p>
            </b-col>
            <b-col class="{active: (currentRegion == 'Norte')}">
              <p>Norte</p>
              <p>{{ specie.planting_time['Norte'] }}</p>
            </b-col>
            <b-col class="{active: (currentRegion == 'Sudeste')}">
              <p>Sudeste</p>
              <p>{{ specie.planting_time['Sudeste'] }}</p>
            </b-col>
            <b-col class="{active: (currentRegion == 'Sul')}">
              <p>Sul</p>
              <p>{{ specie.planting_time['Sul'] }}</p>
            </b-col>
          </b-row>
          <p
            v-if="
              specie.planting_time &&
              Object.values(specie.planting_time).includes('*')
            "
            class="text-right table-legend"
          >
            <small>* Cultivo não recomendado.</small>
          </p>
          <br />
          <p class="text-justify">{{ specie.planting_time_description }}</p>
        </div>
        <div v-if="specie.companion_species && specie.companion_species.length">
          <h4>Plantas companheiras:</h4>
          <p>
            <span
              v-for="companion in specie.companion_species"
              :key="companion"
            >
              <n-link
                v-if="specieByName(companion)"
                class="badge badge-primary"
                :to="'/catalogo-de-especies/' + specieByName(companion).slug"
                >{{ specieByName(companion).name }}</n-link
              >
              <span v-else class="badge badge-default">{{ companion }}</span>
            </span>
          </p>
        </div>
        <div v-if="specie.images && specie.images.length">
          <h4>Fotos:</h4>
          <Gallery :images="specie.images" />
        </div>
      </div>
      <br />
      <comments :target="'/catalogo-de-especies/' + specie.slug" />
    </b-container>
  </div>
</template>
<script>
// import meses from '@/data/meses.json'
export default {
  computed: {
    species() {
      return this.$store.state.species
    },
    specie() {
      return this.species.find(
        (specie) => specie.slug === this.$route.params.id
      )
    },
  },
  methods: {
    specieByName(name) {
      return this.species.find((specie) => {
        return specie.name.toLowerCase() === name.toLowerCase()
      })
    },
  },
}
</script>
