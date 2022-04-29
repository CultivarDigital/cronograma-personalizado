<template>
  <div class="simple-list mb-6">
    <div v-if="items && items.length" class="simple-list-label">
      <h6 v-if="label" class="subtitle-1 mb-3">{{ label }}</h6>
      <v-row
        v-for="(item, index) in items"
        :key="index"
        no-gutters
        class="item pa-0 mb-3"
        :class="{ pointer: item.url }"
        @click="clicked(item)"
      >
        <v-col
          cols="12"
          style="
            border-right: 1px solid rgba(215, 215, 215, 0.4);
            color: rgb(147, 147, 147);
            font-weight: 500;
          "
        >
          {{ item.label }}
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: () => null,
      required: true,
    },
  },
  methods: {
    clicked(item) {
      if (item.url) {
        this.$emit('click', item)
        this.$router.push(item.url)
      }
    },
  },
}
</script>
<style lang="scss">
.simple-list {
  .simple-list-label {
    .subtitle-1 {
      color: #939393;
      font-weight: 600;
    }
  }
  .item {
    background-color: rgba(123, 163, 162, 0.2);
    border-radius: 4px;
    font-weight: medium;
    color: #939393;
  }
  .row {
    .col {
      padding: 5px 15px;
    }
  }
}
</style>
