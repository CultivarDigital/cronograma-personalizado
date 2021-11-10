<!-- eslint-disable vue/no-v-html -->
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
        <span>Adicionar link</span>
      </v-toolbar>
      <div class="pt-6 px-3">
        <v-text-field
          v-model="url"
          autocomplete="off"
          name="name"
          label="Insira o link"
          placeholder="http://"
          outlined
          hide-details="auto"
          prepend-inner-icon="mdi-magnify"
          @change="loadOEmbed"
        />
      </div>

      <div v-if="loading" class="pa-3 text-center">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
      <div v-else-if="oembed" class="pa-3">
        <Embed :embed="oembed" />
        <v-btn block color="success" large class="mb-3" @click="finish">
          Concluír
        </v-btn>
      </div>
      <div v-else-if="url && url.startsWith('http')" class="pa-3">
        <v-btn block color="success" large class="mb-3" @click="loadOEmbed">
          Buscar
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => null,
    },
    icon: {
      type: String,
      default: () => 'mdi-link-box-variant-outline',
    },
  },
  data() {
    return {
      dialog: false,
      loading: false,
      oembed: null,
      url: null,
    }
  },
  methods: {
    finish(oembed) {
      if (this.oembed) {
        this.$emit('input', this.oembed)
      }
      this.oembed = null
      this.url = null
      this.dialog = false
    },
    loadOEmbed() {
      if (this.url && this.url.startsWith('http')) {
        this.loading = true
        this.$axios
          .$get('/v1/uploads/oembed?url=' + encodeURI(this.url))
          .then((oembed) => {
            this.oembed = oembed
            this.loading = false
          })
          .catch((error) => {
            this.loading = false
            this.$notifier.firebaseError(error)
          })
      }
    },
  },
}
</script>
