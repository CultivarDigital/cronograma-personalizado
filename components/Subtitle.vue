<template>
  <div class="d-flex align-center justify-center">
    <v-btn left fixed :to="backTo" icon outlined color="primary" class="ml-1">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <h2 class="text-h5" style="color: rgba(123, 163, 162, 0.8)">
      {{ label }}
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    backTo: {
      type: String,
      default: '/dashboard',
    },
  },
}
</script>
