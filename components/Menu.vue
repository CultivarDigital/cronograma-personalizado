<template>
  <v-list nav class="mb-8">
    <template v-for="item in menu">
      <v-list-item
        v-if="
          item.to !== '/dashboard' &&
          (!item.role || ($auth.user && $auth.user.role === item.role)) &&
          (!item.required || ($auth.user && $auth.user[item.required]))
        "
        :key="item.title"
        dark
        color="primary"
        class="primary"
        :to="item.to"
      >
        <v-list-item-avatar color="primary">
          <v-icon dark>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-1">
            <strong>{{ item.title }}</strong>
          </v-list-item-title>
          <div v-if="showDescription">
            <small>{{ item.description }}</small>
          </div>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>
<script>
import menu from '@/data/menu.js'
export default {
  props: {
    showDescription: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      url: null,
      menu,
    }
  },
}
</script>
