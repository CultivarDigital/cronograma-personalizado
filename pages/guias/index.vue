<template>
  <div>
    <Breadcrumb
      active="Guias"
      description="Guias básicos de como plantar, como cuidar do jardim e da horta. Como cuidar do lixo da sua casa e ajudar o meio ambiente."
    />
    <v-container fluid>
      <v-btn block color="primary" to="/guias/guia-de-cultivo">
        Guia de cultivo
      </v-btn>
      <br />
      <v-btn block color="primary" to="/guias/guia-de-compostagem">
        Guia de compostagem
      </v-btn>
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
