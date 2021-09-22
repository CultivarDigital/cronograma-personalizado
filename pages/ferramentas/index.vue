<template>
  <div>
    <Breadcrumb
      active="Ferramentas"
      description="Ferramentas que vão te ajudar a cuidar da sua horta de forma mais organizada"
    />
    <v-container fluid>
      <div class="text-center">
        <v-icon size="64" color="primary">mdi-toolbox</v-icon>
        <p class="pt-3 mb-0">
          Ferramentas que vão te ajudar a cuidar da sua horta de forma mais
          organizada
        </p>
      </div>
    </v-container>
    <Menu section="Ferramentas" />
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
