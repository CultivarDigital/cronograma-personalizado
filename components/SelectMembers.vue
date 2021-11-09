<template>
  <v-dialog v-model="dialog" fullscreen @input="$emit('change')">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" icon v-bind="attrs" v-on="on">
        <v-icon dark>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="primary" dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <span>{{ title }}</span>
      </v-toolbar>
      <div class="pt-6 px-3">
        <v-text-field
          v-model="search"
          autocomplete="off"
          name="name"
          placeholder="Buscar"
          outlined
          hide-details="auto"
          prepend-inner-icon="mdi-magnify"
        />
      </div>
      <v-list v-if="search">
        <v-list-item-group
          v-model="options"
          multiple
          @change="$emit('input', options)"
        >
          <template v-for="item in filteredItems">
            <v-divider
              v-if="!item"
              :key="`divider-${item[itemValue]}`"
            ></v-divider>
            <v-list-item :key="item[itemValue]" :value="item[itemValue]">
              <template #default="{ active }">
                <v-list-item-avatar color="primary">
                  <v-img v-if="item[itemAvatar]" :src="item[itemAvatar]" />
                  <v-icon v-else dark>{{ itemIcon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-title> {{ item[itemText] }} </v-list-item-title>
                <v-list-item-action>
                  <v-checkbox
                    :input-value="active"
                    color="deep-purple accent-4"
                  ></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
      <p v-else class="text-center pt-2">
        <small>Busque pelo nome acima</small>
      </p>
      <div v-if="options.length" class="pa-3">
        <v-btn block color="success" large class="mb-3" @click="dialog = false">
          Concluír
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
import categories from '@/data/conversation-categories.json'
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    itemText: {
      type: String,
      default: 'text',
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    itemAvatar: {
      type: String,
      default: 'picture',
    },
    itemIcon: {
      type: String,
      default: 'mdi-account',
    },
    icon: {
      type: String,
      default: 'mdi-account-plus-outline',
    },
    title: {
      type: String,
      default: 'Selecionar',
    },
  },
  data() {
    return {
      categories,
      dialog: false,
      options: [],
      search: '',
    }
  },
  computed: {
    filteredItems() {
      let data = []
      if (this.search) {
        data = this.items.filter((item) =>
          item[this.itemText].toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return data.slice(0, 7)
    },
  },
}
</script>
