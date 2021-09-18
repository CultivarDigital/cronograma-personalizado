<template>
  <div>
    <Breadcrumb
      active="Ferramentas"
      description="Ferramentas que vão auxiliar no cuidado com os seus cultivos"
    />
    <v-container fluid>
      <b-button
        block
        variant="primary"
        to="/ferramentas/o-que-plantar-esse-mes"
      >
        O que plantar esse mês?
      </b-button>
      <br />
      <b-button block variant="primary" to="/ferramentas/catalogo-de-especies">
        Catálogo de espécies
      </b-button>
      <br />
    </v-container>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {}
  },
  created() {},
}
</script>
