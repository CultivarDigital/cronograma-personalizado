<template>
  <div class="double-table mb-6">
    <div v-if="data && data.items.length" class="double-table-header">
      <v-row v-if="data.header" no-gutters class="mb-6">
        <v-col cols="4">
          <h6 class="subtitle-1 text-center">{{ data.header.label }}</h6>
        </v-col>
        <v-col cols="8">
          <h6 class="subtitle-1">{{ data.header.value }}</h6>
        </v-col>
      </v-row>
      <v-row
        v-for="item in data.items"
        :key="item._id"
        no-gutters
        class="text-center item pa-0 mb-3"
        :class="{ pointer: item.url || clickable }"
        @click="clicked(item)"
      >
        <v-col
          cols="4"
          style="
            border-right: 1px solid rgba(215, 215, 215, 0.4);
            color: rgba(145, 145, 145, 0.5);
          "
        >
          {{ item.label }}
        </v-col>
        <v-col
          cols="8"
          class="text-left"
          style="color: #939393; font-weight: 500"
        >
          <div>
            {{ item.value }}
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => null,
      required: true,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clicked(item) {
      this.$emit('click', item)
      if (item.url) {
        this.$router.push(item.url)
      }
    },
  },
}
</script>
<style lang="scss">
.double-table {
  .double-table-header {
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
