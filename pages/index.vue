<template>
  <div>
    <TopNavigation active="Cultive alimentos saudáveis em casa!" />
    <a @click="$auth.logout()">{{ $auth.user }} xx</a>
    <Moon />
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
  created() {
    this.$axios.$get('/v1/users').catch(this.$notifier.apiError)
  },
}
</script>
