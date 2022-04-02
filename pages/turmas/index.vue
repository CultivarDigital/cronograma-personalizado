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
    <v-container v-else class="px-4">
      <DoubleTable :data="dataset" clickable />
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
    dataset() {
      return {
        header: {
          label: 'Início',
          value: 'Nome da turma',
        },
        items: this.groups.map((group) => ({
          label: this.$moment(group.startAt).format('DD/MM/YYYY'),
          value: group.name,
          url: `/turmas/${group._id}`,
        })),
      }
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
