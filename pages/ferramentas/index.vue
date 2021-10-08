<template>
  <div>
    <TopNavigation
      active="Ferramentas"
      description="Ferramentas que vão te ajudar a cuidar da sua horta de forma mais organizada"
    />
    <div class="text-center mb-6 mt-6">
      <v-icon size="64">mdi-rake</v-icon>
    </div>
    <Menu section="Ferramentas" />
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
