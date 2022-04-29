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
<style lang="scss">
.template-form {
  h3 {
    background-color: rgba(238, 96, 94, 0.8);
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    text-align: center;
  }
  .ccp-options {
    text-align: center;
    margin-bottom: 20px;
    touch-action: none;
  }
  .ccp-option {
    display: inline-block;
    background-color: rgba(238, 96, 94, 0.8);
    color: #fff;
    text-align: center;
    padding: 6px 12px;
    border-radius: 6px;
    margin-left: 3px;
    margin-right: 3px;
    font-weight: bold;
    font-size: 24px;
    cursor: move;
  }
  .months {
    text-align: center;
    h4 {
      background-color: rgba(123, 163, 162, 0.2);
      color: #7ba3a2;
      margin-bottom: 15px;
      padding: 5px;
      text-align: center;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .week {
    p {
      color: #7ba3a2;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .week-input {
      border: 1px solid #a9a9a9;
      border-radius: 8px;
      width: 100%;
      min-height: 50px;
      margin-bottom: 15px;
      padding: 5px;
    }
  }
}
</style>
