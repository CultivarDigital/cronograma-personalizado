<template>
  <div>
    <Breadcrumb
      active="Ferramentas"
      description="Ferramentas que vão te ajudar a cuidar da sua horta de forma mais organizada"
    />
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
