<template>
  <div>
    <TopNavigation active="Chat" />
    <v-list v-if="summary" subheader dense>
      <template v-for="item in summary">
        <v-list-item
          :key="item.latest._id"
          :to="'/chat/' + item.latest.user._id"
          class="py-2"
          :class="item.unread > 0 ? 'grey lighten-3' : ''"
        >
          <v-list-item-avatar>
            <User :user="item.latest.user" thumb size="40" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.latest.user.name" />
            <v-list-item-subtitle class="body-2 pt-2">
              {{ item.latest.message }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-badge
              bordered
              color="error"
              icon="mdi-lock"
              overlap
              :content="item.unread"
              :value="item.unread > 0"
            >
              <v-btn rounded color="primary">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-badge>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'divider-' + item.latest._id" />
      </template>
    </v-list>
    <div v-if="summary && summary.length === 0" class="text-center">
      <p>Nenhuma conversa encontrada!</p>
    </div>
    <div class="text-center mb-6">
      <v-btn to="/clientes" large color="secondary">
        <v-icon left>mdi-account-multiple</v-icon>
        Ver lista de clientes
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      summary: null,
    }
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      this.summary = await this.$axios.$get('/v1/messages/summary')
    },
  },
}
</script>
