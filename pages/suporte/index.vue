<template>
  <div>
    <TopNavigation active="Suporte" />
    <v-list v-if="summary" subheader dense>
      <template v-for="item in summary">
        <v-list-item
          :key="item.latest._id"
          :to="'/suporte/' + item.latest.user._id"
          class="py-2"
          :dark="item.unread > 0"
          :class="item.unread > 0 ? 'secondary' : ''"
        >
          <v-list-item-avatar>
            <User :user="item.latest.user" thumb size="40" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.latest.user.name" />
            <v-list-item-subtitle>
              {{ item.latest.message }}
            </v-list-item-subtitle>
            <div>
              <v-chip v-if="item.unread > 0" x-small>
                {{ item.unread }} mensagens não lidas
              </v-chip>
            </div>
          </v-list-item-content>
          <v-list-item-action class="d-flex justify-center">
            <v-btn rounded :color="item.unread > 0 ? 'white' : 'primary'" icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
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
