<template>
  <div>
    <TopNavigation active="Montar cronograma" />
    <v-container v-if="membersDataset">
      <div class="mb-8">
        <Subtitle label="Todas as clientes" />
      </div>

      <DoubleTable :data="membersDataset" clickable />
    </v-container>
    <div v-else class="text-center py-6">
      <v-progress-circular color="primary" indeterminate size="20" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: null,
    }
  },
  computed: {
    membersDataset() {
      if (this.members) {
        return {
          header: {
            label: 'Adesão',
            value: 'Cliente',
          },
          items: this.members.map((member) => ({
            label: this.$moment(member.createdAt).format('DD/MM/YYYY'),
            value: member.name || member.email,
            url: `/clientes/${member._id}`,
          })),
        }
      }
      return null
    },
  },
  async created() {
    this.members = await this.$axios.$get('/v1/users/members')
  },
}
</script>
