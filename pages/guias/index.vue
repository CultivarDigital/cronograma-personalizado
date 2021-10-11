<template>
  <div>
    <TopNavigation
      active="Guias"
      description="Guias básicos de como plantar, como cuidar do jardim e da horta. Como cuidar do lixo da sua casa e ajudar o meio ambiente."
    />
    <v-container class="text-center mb-6 mt-2">
      <v-avatar size="100" color="primary" class="mb-6 mt-3"
        ><v-icon color="white" size="50">mdi-library</v-icon></v-avatar
      >
      <h4 class="mb-0">Guias</h4>
    </v-container>
    <div class="mb-6">
      <Menu section="Guias" />
    </div>
  </div>
</template>
<script>
import TopNavigation from '@/components/TopNavigation.vue'
export default {
  components: {
    TopNavigation,
  },
  data() {
    return {}
  },
  created() {},
}
</script>
