<template>
  <div>
    <TopNavigation active="Clientes da rede" />
    <div v-if="members">
      <v-container>
        <div>
          <strong>{{ members.length }}</strong> clientes
        </div>
        <div>
          <strong>{{ membersWithCity }}</strong> clientes com localização
        </div>
      </v-container>
      <v-list>
        <template v-for="member in members">
          <v-divider :key="`divider-${member.id}`"></v-divider>
          <v-list-item :key="member.id">
            <v-list-item-avatar color="primary">
              <User :user="member" />
            </v-list-item-avatar>
            <v-list-item-content>
              <div>
                <div>
                  <strong>{{ member.name }}</strong>
                </div>
                <div v-if="member.city && member.uf">
                  <small
                    ><strong>{{ member.city }} - {{ member.uf }}</strong></small
                  >
                </div>
                <small>{{ member.bio }}</small>
              </div>
            </v-list-item-content>
            <v-list-item-action-text>
              <small
                class="font-weight-light"
                :title="$moment(member.createdAt).format('DD/MM/YYYY h:mm:ss')"
              >
                {{ $moment(member.createdAt).fromNow(true) }}
              </small>
            </v-list-item-action-text>
          </v-list-item>
        </template>
      </v-list>
    </div>
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
    membersWithCity() {
      if (this.members) {
        return this.members.filter((member) => member.city && member.uf).length
      }
      return 0
    },
  },
  async created() {
    const members = await this.$axios.$get('/v1/users/members')
    this.members = members.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
  },
}
</script>
