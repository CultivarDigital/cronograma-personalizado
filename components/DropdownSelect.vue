<template>
  <div class="mb-2 mr-1 d-inline-block">
    <v-menu>
      <template #activator="{ on, attrs }">
        <v-btn
          :color="value ? 'primary darken-1' : 'primary'"
          dark
          small
          v-bind="attrs"
          v-on="on"
        >
          <span v-if="value">
            <small>{{ label }}:</small> <strong>{{ value }}</strong>
          </span>
          <span v-else>
            {{ label }} <small v-if="description">({{ description }})</small>
          </span>
          <v-icon right> mdi-chevron-down </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="$emit('input', null)">
          {{ noItem }}
        </v-list-item>
        <v-list-item
          v-for="option in options"
          :key="option"
          @click="$emit('input', option)"
        >
          <v-list-item-title>{{ option }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
    description: {
      type: String,
      default: null,
    },
    noItem: {
      type: String,
      default: null,
      required: true,
    },
  },
}
</script>
