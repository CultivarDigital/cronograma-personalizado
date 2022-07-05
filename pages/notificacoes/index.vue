<template>
  <div>
    <TopNavigation active="Minha conta" />
    <v-container>
      <div class="mb-8">
        <Subtitle label="Notificações" />
      </div>
    </v-container>
    <div style="height: calc(100vh - 280px); overflow-y: auto">
      <div v-if="notifications">
        <v-container v-if="notifications.length" subheader dense>
          <template v-for="notification in notifications">
            <v-card
              :key="notification._id"
              :href="notification.link"
              class="mb-3"
              outlined
              :style="notification.read ? '' : 'border-color: red'"
            >
              <v-card-title class="mb-2 primary--text">
                {{ notification.subject }}
              </v-card-title>
              <v-card-subtitle
                class="font-weight-light"
                :title="
                  $moment(notification.createdAt).format('DD/MM/YYYY h:mm:ss')
                "
              >
                {{ $moment(notification.createdAt).fromNow(true) }} atrás
              </v-card-subtitle>
              <v-card-text v-linkify v-text="notification.body"></v-card-text>
              <v-card-actions v-if="notification.link">
                <v-btn color="primary" block>
                  <v-icon>mdi-chevron-right</v-icon> Abrir
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-container>
        <v-container v-else class="text-center">
          <v-alert class="text-center" color="grey" dark>
            Você não tem notificações
          </v-alert>
        </v-container>
      </div>
      <div v-else class="text-center">
        <v-progress-circular color="secondary" indeterminate size="20" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notifications: null,
    }
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      this.notifications = await this.$axios.$get('/v1/notifications')

      if (
        this.notifications &&
        this.notifications.find((notification) => !notification.read)
      ) {
        setTimeout(() => {
          this.markAllAsRead()
        }, 3000)
      }
    },
    async markAllAsRead() {
      this.notifications = await this.$axios.$post(
        '/v1/notifications/mark-as-read'
      )
    },
    remove(notification) {
      this.$axios.$delete('/v1/notifications/' + notification._id).then(() => {
        this.load()
      })
    },
  },
}
</script>
