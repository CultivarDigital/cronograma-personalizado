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
                  class="ccp-option"
                >
                  {{ option.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <TemplateForm v-if="template" :template="template" @change="load" />
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
      template: null,
      members: null,
      possibleMembers: null,
      active: null,
      currentTemplate: null,
      loading: false,
    }
  },
  computed: {
    registerUrl() {
      let url = process.env.BASE_URL
      if (this.template) {
        url += `/${this.template._id}`
      }
      return url
    },
    membersDataset() {
      if (this.members) {
        return {
          header: {
            label: 'Adesão',
            value: 'Clientes da turma',
          },
          items: this.members.map((member) => ({
            label: this.$moment(member.createdAt).format('DD/MM/YYYY'),
            value: member.name,
            url: `/clientes/${member._id}`,
          })),
        }
      }
      return null
    },
    possibleMembersDataset() {
      if (this.possibleMembers) {
        return {
          header: {
            label: 'Adesão',
            value: 'Clientes sem turma',
          },
          items: this.possibleMembers.map((member) => ({
            label: this.$moment(member.createdAt).format('DD/MM/YYYY'),
            value: member.name || member.email,
            url: `/clientes/${member.id}`,
          })),
        }
      }
      return null
    },
  },
  watch: {
    active(index) {
      this.currentTemplate = null
      if (index !== null) {
        this.currentTemplate = this.template[index]
      }
    },
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
      this.members = await this.$axios.$get(
        '/v1/templates/' + this.$route.params.id + '/members'
      )
      this.loading = false
    },
    async copyURL() {
      await navigator.clipboard.writeText(this.registerUrl)
      this.notify('Link copiado!')
    },
  },
}
</script>
