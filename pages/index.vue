<template>
  <div>
    <Breadcrumb active="Cultive alimentos saudáveis em casa!" />
    <Moon />
    <div class="d-lg-none">
      <Menu />
    </div>
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
