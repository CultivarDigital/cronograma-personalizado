<template>
  <div class="d-flex align-center justify-center">
    <v-btn
      left
      :to="backTo"
      icon
      outlined
      color="primary"
      class="ml-1"
      style="position: absolute; left: 15px"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <h2
      class="text-h5"
      style="color: rgba(123, 163, 162, 0.8); font-size: 22px !important"
    >
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
