<template>
  <div>
    <Breadcrumb
      active="Guias"
      description="Guias básicos de como plantar, como cuidar do jardim e da horta. Como cuidar do lixo da sua casa e ajudar o meio ambiente."
    />
    <v-container fluid>
      <div class="text-center">
        <v-icon size="64" color="primary">mdi-library</v-icon>
        <p class="pt-3 mb-0">
          Guias básicos que vão te ajudar a cuidar melhor da sua hortinha e do
          lixo orgânico
        </p>
      </div>
    </v-container>
    <Menu section="Guias" />
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
