<template>
  <v-dialog v-model="dialog" fullscreen @input="$emit('change')">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" icon v-bind="attrs" v-on="on">
        <v-icon dark>mdi-sprout-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="primary" dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <span>Selecionar espécies</span>
      </v-toolbar>
      <div class="pt-6 px-3">
        <v-text-field
          v-model="search"
          autocomplete="off"
          name="name"
          placeholder="Buscar espécie"
          outlined
          hide-details="auto"
          prepend-inner-icon="mdi-magnify"
        />
      </div>
      <v-list>
        <v-list-item-group
          v-model="options"
          multiple
          @change="$emit('input', options)"
        >
          <template v-for="item in filteredItems">
            <v-divider v-if="!item" :key="`divider-${item.id}`"></v-divider>
            <v-list-item :key="item.id" :value="item.id">
              <template #default="{ active }">
                <v-list-item-avatar>
                  <CachedImage
                    v-if="item.images && item.images.length"
                    :title="item.name"
                    :src="item.images[0]"
                    thumb
                  />
                  <v-icon v-else dark>mdi-sprout</v-icon>
                </v-list-item-avatar>
                <v-list-item-title> {{ item.name }} </v-list-item-title>
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
      let data = this.items
      if (this.search) {
        data = this.items.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return data.slice(0, 7)
    },
  },
}
</script>
