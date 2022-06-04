<template>
  <div>
    <TopNavigation active="Montar Cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Turmas" />
      </div>
    </v-container>
    <GroupForm @change="load" />
    <div v-if="loading" class="text-center py-6">
      <v-skeleton-loader type="list-item@5" />
    </div>
    <div v-else-if="groups && groups.length" class="template-form pt-3">
      <div v-if="openGroups && openGroups.items.length">
        <h3>Turmas abertas</h3>
        <v-container>
          <DoubleTable :data="openGroups" clickable />
        </v-container>
      </div>
      <div v-if="closedGroups.items.length">
        <h3>Turmas fechadas</h3>
        <v-container>
          <DoubleTable :data="closedGroups" clickable />
        </v-container>
      </div>
    </div>
    <v-container v-else>
      <v-alert class="text-center" color="grey" dark>
        Nenhuma turma encontrada
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
      groups: [],
      active: null,
      currentGroup: null,
      loading: false,
    }
  },
  computed: {
    openGroups() {
      return this.toDataset(
        this.groups.filter((group) => this.dateDiff(group.startAt) >= 0)
      )
    },
    closedGroups() {
      return this.toDataset(
        this.groups.filter((group) => this.dateDiff(group.startAt) < 0)
      )
    },
  },
  watch: {
    active(index) {
      this.currentGroup = null
      if (index !== null) {
        this.currentGroup = this.groups[index]
      }
    },
  },
  created() {
    this.load()
  },
  methods: {
    toDataset(groups) {
      return {
        header: {
          label: 'Início',
          value: 'Nome da turma',
        },
        items: groups.map((group) => ({
          label: this.$moment(group.startAt).tz('UTC').format('DD/MM/YYYY'),
          value: group.name,
          url: `/turmas/${group._id}`,
        })),
      }
    },
    dateDiff(date) {
      const today = new Date()
      return this.$moment(date)
        .tz('UTC')
        .diff(
          this.$moment(
            Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
          ).tz('UTC'),
          'days'
        )
    },
    load() {
      this.loading = true
      this.$axios.$get('/v1/groups').then((groups) => {
        this.groups = groups
        this.loading = false
      })
    },
    remove(group) {
      this.loading = true
      this.$axios.$delete('/v1/groups/' + group._id).then(() => {
        this.load()
        this.loading = false
      })
    },
  },
}
</script>
