<template>
  <div>
    <TopNavigation active="Montar Cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-3">
        <Subtitle label="Modelo" back-to="/modelos" />
      </div>
    </v-container>
    <div v-if="template && template.data" class="template-form">
      <h3>{{ template.name }}</h3>
      <v-container class="months">
        <div v-for="month in 4" :key="'month-' + month">
          <h4>Mês {{ month }}</h4>
          <div v-for="week in 4" :key="'week-' + week" class="week">
            <p>Semana {{ week }}</p>
            <div>
              <div
                :list="template.data[month - 1][week - 1]"
                group="cc-options"
                class="week-input drop-zone"
              >
                <div
                  v-for="(option, index) in template.data[month - 1][week - 1]"
                  :key="option.value + index"
                  :class="option.value"
                  class="ccp-option"
                  style="cursor: auto"
                >
                  {{ option.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <TemplateForm
      v-if="template"
      :template="template"
      @change="load"
      @delete="deleted"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      template: null,
      loading: false,
    }
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      this.loading = true
      this.template = await this.$axios.$get(
        '/v1/templates/' + this.$route.params.id
      )
      this.loading = false
    },
    deleted() {
      this.$router.push('/modelos')
    },
  },
}
</script>
