<template>
  <div>
    <TopNavigation active="Cronograma personalizado" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Gerenciar modelos" />
      </div>
    </v-container>
    <TemplateForm @change="load" />
    <div v-if="loading" class="text-center py-6">
      <v-skeleton-loader type="list-item@5" />
    </div>
    <v-container v-else class="px-4">
      <SimpleList
        v-if="items && items.length"
        :items="items"
        label="Modelos existentes"
        clickable
      />
      <v-alert v-else class="text-center" color="grey" dark>
        Nenhum modelo encontrado
      </v-alert>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    target: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      templates: [],
      active: null,
      currentTemplate: null,
      loading: false,
    }
  },
  computed: {
    items() {
      return this.templates.map((template) => ({
        label: template.name,
        url: `/modelos/${template._id}`,
      }))
    },
  },
  watch: {
    active(index) {
      this.currentTemplate = null
      if (index !== null) {
        this.currentTemplate = this.templates[index]
      }
    },
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      this.$axios.$get('/v1/templates').then((templates) => {
        this.templates = templates
        this.loading = false
      })
    },
    remove(template) {
      this.loading = true
      this.$axios.$delete('/v1/templates/' + template._id).then(() => {
        this.load()
        this.loading = false
      })
    },
  },
}
</script>
