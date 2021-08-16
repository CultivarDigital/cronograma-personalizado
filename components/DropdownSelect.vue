<template>
  <div class="mb-2 d-inline-block">
    <b-dropdown v-if="options && options.length" variant="primary">
      <template #button-content>
        <span v-if="value">
          <small>{{ label }}:</small> <strong>{{ value }}</strong>
        </span>
        <span v-else>
          {{ noItem }}
        </span>
      </template>
      <b-dropdown-item :active="!value" @click="$emit('input', null)">
        {{ noItem }}
      </b-dropdown-item>
      <b-dropdown-item
        v-for="option in options"
        :key="option"
        :active="value === option"
        @click="$emit('input', option)"
      >
        {{ option }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
    label: {
      type: String,
      default: null,
      required: true,
    },
    noItem: {
      type: String,
      default: null,
      required: true,
    },
  },
}
</script>
