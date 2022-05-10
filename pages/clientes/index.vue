<template>
  <div>
    <TopNavigation active="Montar cronograma" />
    <v-container v-if="membersDataset">
      <div class="mb-8">
        <Subtitle label="Todas as clientes" />
      </div>
      <v-text-field
        v-model="search"
        type="search"
        clearable
        outlined
        label="Buscar cliente"
        append-icon="mdi-magnify"
      />
      <DoubleTable :data="membersDataset" clickable />
    </v-container>
    <div v-else class="text-center py-6">
      <v-progress-circular color="primary" indeterminate size="20" />
    </div>
  </div>
</template>
<script>
import slugify from 'slugify'
export default {
  data() {
    return {
      members: null,
      search: '',
    }
  },
  computed: {
    membersDataset() {
      if (this.members) {
        let filteredMembers = this.members

        if (this.search) {
          filteredMembers = filteredMembers.filter((member) => {
            return (
              member.name &&
              slugify(member.name.toLowerCase()).includes(
                slugify(this.search.toLowerCase())
              )
            )
          })
        }
        return {
          header: {
            label: 'Adesão',
            value: 'Cliente',
          },
          items: filteredMembers.map((member) => ({
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
