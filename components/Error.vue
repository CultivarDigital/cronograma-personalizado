<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="errors && errors.length">
    <span v-for="error in errors" :key="error" class="text-danger">
      {{ error }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    errors: {
      type: Array,
      default: () => null,
    },
  },
}
</script>
