<template>
  <div>
    <TopNavigation active="Cultive alimentos saudáveis em casa!" />
    <Moon />
    <v-divider class="mb-2" />
    <Menu />
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
