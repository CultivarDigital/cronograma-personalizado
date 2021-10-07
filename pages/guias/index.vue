<template>
  <div>
    <Breadcrumb
      active="Guias"
      description="Guias básicos de como plantar, como cuidar do jardim e da horta. Como cuidar do lixo da sua casa e ajudar o meio ambiente."
    />
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
