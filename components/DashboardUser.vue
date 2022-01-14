<template>
  <div>
    <User v-if="$auth.user" size="25" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
}
</script>
