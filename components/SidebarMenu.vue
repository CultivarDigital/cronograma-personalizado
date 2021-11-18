<template>
  <v-list nav dense>
    <template v-for="section in Object.keys(menu)">
      <v-subheader :key="section + '-subheader'">{{ section }}</v-subheader>
      <template v-for="item in menu[section]">
        <v-list-item
          v-if="!item.role || ($auth.user && $auth.user.role === item.role)"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </template>
  </v-list>
</template>
<script>
import menu from '@/data/menu.js'
export default {
  data() {
    return {
      url: null,
      menu,
    }
  },
}
</script>
