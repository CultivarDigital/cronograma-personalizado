<template>
  <v-list nav dense class="pb-3 pt-0">
    <template v-for="menuSection in Object.keys(menu)">
      <template
        v-if="
          menuSection != 'Plataforma' && (!section || section === menuSection)
        "
      >
        <v-subheader v-if="!section" :key="menuSection + '-subheader'">{{
          menuSection
        }}</v-subheader>
        <v-list-item
          v-for="item in menu[menuSection]"
          :key="item.title"
          :to="item.to"
        >
          <v-list-item-avatar color="primary">
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <div class="text--secondary">
              <small>{{ item.description }}</small>
            </div>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon x-small>
              <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </template>
  </v-list>
</template>
<script>
import menu from '@/data/menu.js'
export default {
  props: {
    section: {
      type: String,
      default: null,
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
