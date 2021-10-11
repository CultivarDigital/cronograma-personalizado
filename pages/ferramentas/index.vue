<template>
  <div>
    <TopNavigation
      active="Ferramentas"
      description="Ferramentas que vão te ajudar a cuidar da sua horta de forma mais organizada"
    />
    <v-container class="text-center mb-6 mt-2">
      <v-avatar size="100" color="primary" class="mb-8 mt-3"
        ><v-icon color="white" size="50">mdi-rake</v-icon></v-avatar
      >
      <h3 class="mb-0">Ferramentas de cultivo</h3>
    </v-container>
    <div class="mb-6">
      <Menu section="Ferramentas" show-description />
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
