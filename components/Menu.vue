<template>
  <div class="text-center">
    <template v-for="section in Object.keys(menu)">
      <div v-if="section != 'Plataforma'" :key="section + '-subheader'">
        <v-subheader class="justify-center">{{ section }}</v-subheader>
        <div v-for="item in menu[section]" :key="item.title">
          <v-btn
            :to="item.to"
            color="primary"
            class="mb-3 mr-2 font-weight-regular"
            block
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-btn>
        </div>
      </div>
    </template>
  </div>
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
