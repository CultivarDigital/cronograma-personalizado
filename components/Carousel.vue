<template>
  <div v-if="items && items.length">
    <v-carousel
      v-model="active"
      class="mb-3"
      style="height: auto"
      height="auto"
      hide-delimiter-background
      :hide-delimiters="items.length === 1"
      :show-arrows="items.length > 1"
    >
      <v-carousel-item
        v-for="(picture, i) in items"
        :key="i"
        class="text-center"
      >
        <img :src="apiURL + picture" alt="" max-width="100%" />
      </v-carousel-item>
    </v-carousel>
    <div v-if="showRemove" class="text-center mb-6">
      <Remove @confirm="remove" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    showRemove: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: 0,
      apiURL: process.env.API_URL,
    }
  },
  methods: {
    remove() {
      this.$emit('remove', this.active)
    },
  },
}
</script>
<style scoped lang="scss">
.v-image .v-responsive .v-carousel__item .theme--light {
  height: auto !important;
  .v-responsive__content {
    justify-content: center;
  }
}
</style>
