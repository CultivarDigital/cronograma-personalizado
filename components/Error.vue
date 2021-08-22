<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="list && list.length">
    <span v-for="error in list" :key="error" class="text-danger">
      {{ error }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => null,
    },
  },
}
</script>
