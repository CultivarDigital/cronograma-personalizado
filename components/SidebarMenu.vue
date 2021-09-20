<template>
  <v-list nav dense>
    <template v-for="section in Object.keys(menu)">
      <v-subheader :key="section + '-subheader'">{{ section }}</v-subheader>
      <v-list-item
        v-for="item in menu[section]"
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
