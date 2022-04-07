<template>
  <div>
    <TopNavigation active="Clientes" />
    <div v-if="members">
      <v-container class="text-center">
        <strong>{{ members.length }}</strong> clientes encontradas
      </v-container>
      <v-list>
        <template v-for="member in members">
          <v-divider :key="`divider-${member._id}`"></v-divider>
          <v-list-item :key="member._id" click="">
            <v-list-item-avatar color="primary">
              <User :user="member" />
            </v-list-item-avatar>
            <v-list-item-content>
              <div>
                <div>
                  <strong>{{ member.name }}</strong>
                </div>
                <div>
                  <small>
                    {{ member.email }}
                  </small>
                </div>
                <small>{{ member.bio }}</small>
              </div>
            </v-list-item-content>
            <v-list-item-action class="text-center">
              <v-btn :to="'/suporte/' + member._id" icon>
                <v-icon left>mdi-send</v-icon>
              </v-btn>
            </v-list-item-action>
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
