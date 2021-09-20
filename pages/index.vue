<template>
  <div class="pt-3">
    <Breadcrumb active="Cultive alimentos saudáveis em casa!" />
    <Moon />
    <v-divider></v-divider>
    <v-container>
      <Menu />
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
