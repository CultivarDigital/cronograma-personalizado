<template>
  <v-list nav class="primary--text">
    <template v-for="item in menu">
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
    <v-list-item v-if="$auth.user" @click="$auth.logout()">
      <v-list-item-icon>
        <v-icon>mdi-logout</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Sair</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
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
