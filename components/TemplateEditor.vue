<template>
  <div>
    <v-select
      v-if="templates"
      outlined
      label="Carregar template"
      :items="templates"
      item-text="name"
      item-value="data"
      clearable
      class="mb-3"
      @input="applyTemplate"
    />
    <div class="ccp-options">
      <draggable
        :list="ccp_options"
        :group="{ name: 'cc-options', pull: 'clone', put: false }"
      >
        <div
          v-for="option in ccp_options"
          :key="option.value"
          class="ccp-option"
          :class="option.value"
        >
          {{ option.value }}
        </div>
      </draggable>
    </div>
    <div class="months">
      <div v-for="month in 4" :key="'month-' + month">
        <h4 @click="toggleMonth(month)">Mês {{ month }}</h4>
        <div
          v-for="week in 4"
          v-show="active_month === month"
          :key="'week-' + week"
          class="week"
        >
          <p>Semana {{ week }}</p>
          <div>
            <draggable
              :list="form[month - 1][week - 1]"
              group="cc-options"
              class="week-input drop-zone"
              @change="changed"
            >
              <div
                v-for="(option, index) in form[month - 1][week - 1]"
                :key="option.value + index"
                :class="option.value"
                class="ccp-option"
                @click="removeItem(month, week, index)"
              >
                {{ option.value }}
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => null,
    },
  },
  data() {
    const ccpData = []
    for (const month in [...Array(4)]) {
      ccpData[month] = []
      for (const week in [...Array(4)]) {
        ccpData[month][week] = []
      }
    }

    return {
      templates: null,
      active_month: 1,
      ccp_options: [
        {
          value: 'H',
          description: 'Hidratação',
        },
        {
          value: 'N',
          description: 'Nutrição',
        },
        {
          value: 'R',
          description: 'Reconstrução',
        },
        {
          value: 'U',
          description: 'Umectação',
        },
      ],
      dialog: false,
      form: this.value || ccpData,
    }
  },
  created() {
    this.loadTemplates()
  },
  methods: {
    async loadTemplates() {
      this.templates = await this.$axios.$get('/v1/templates')
    },
    changed() {
      this.$emit('input', this.form)
    },
    applyTemplate(template) {
      console.log(this.form)
      console.log(template)
      this.form = template
    },
    toggleMonth(month) {
      if (this.active_month === month) {
        this.active_month = null
      } else {
        this.active_month = month
      }
    },
    removeItem(month, week, index) {
      this.form[month - 1][week - 1].splice(index, 1)
    },
  },
}
</script>
