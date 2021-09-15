<template>
  <div>
    <Breadcrumb
      active="Guia"
      description="Guias básicos de como plantar, como cuidar do jardim e da horta. Como cuidar do lixo da sua casa e ajudar o meio ambiente."
    />
    <b-container fluid>
      <b-button block variant="primary" to="/guias/guia-de-cultivo">
        Guia de cultivo
      </b-button>
      <br />
      <b-button block variant="primary" to="/guias/guia-de-compostagem">
        Guia de compostagem
      </b-button>
      <br />
    </b-container>
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
