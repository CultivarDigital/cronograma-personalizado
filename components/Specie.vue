<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="specie">
    <Breadcrumb
      :links="[[parent.title, parent.url]]"
      :active="specie.name"
      :description="specie.description"
      :img="
        'https://www.cultivarbrasil.com' +
        (specie.images && specie.images.length
          ? specie.images[0].url
          : '/cultivar-cover.png')
      "
    />
    <v-container fluid>
      <h3>{{ specie.name }}</h3>
      <p>{{ specie.scientific_name }}</p>
      <p v-if="specie.images && specie.images.length" class="text-center">
        <CachedImage :src="specie.images[0]" raw css-class="rounded" />
      </p>
      <p
        v-if="specie.description"
        class="text-justify"
        v-html="specie.description"
      ></p>
      <div v-if="specie.use">
        <h4>Recomendações de aproveitamento</h4>
        <p class="text-justify">{{ specie.use }}</p>
      </div>
      <v-simple-table>
        <template #default>
          <tbody>
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
                <strong class="text-warning"
                  >Alerta: {{ specie.warning }}</strong
                >
              </th>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div v-if="specie.planting_time">
        <h4>Época e regiões para plantio</h4>
        <v-row class="plantio-table" fluid no-gutters>
          <v-col class="{active: (currentRegion == 'Centro-oeste')}">
            <p>C. Oeste</p>
            <p>{{ specie.planting_time['Centro-oeste'] }}</p>
          </v-col>
          <v-col class="{active: (currentRegion == 'Nordeste')}">
            <p>Nordeste</p>
            <p>{{ specie.planting_time['Nordeste'] }}</p>
          </v-col>
          <v-col class="{active: (currentRegion == 'Norte')}">
            <p>Norte</p>
            <p>{{ specie.planting_time['Norte'] }}</p>
          </v-col>
          <v-col class="{active: (currentRegion == 'Sudeste')}">
            <p>Sudeste</p>
            <p>{{ specie.planting_time['Sudeste'] }}</p>
          </v-col>
          <v-col class="{active: (currentRegion == 'Sul')}">
            <p>Sul</p>
            <p>{{ specie.planting_time['Sul'] }}</p>
          </v-col>
        </v-row>
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
          <span v-for="companion in specie.companion_species" :key="companion">
            <n-link
              v-if="specieByName(companion)"
              class="badge badge-primary"
              :to="parent.url + '/' + specieByName(companion).id"
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
      <br />
      <Comments :target="'specie-' + specie.id" />
    </v-container>
  </div>
</template>
<script>
// import meses from '@/data/meses.json'
export default {
  props: {
    id: {
      type: String,
      default: null,
      required: true,
    },
    parent: {
      type: Object,
      default: null,
      required: true,
    },
  },
  computed: {
    species() {
      return this.$store.state.species
    },
    specie() {
      return this.species.find((specie) => specie.id === this.id)
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
