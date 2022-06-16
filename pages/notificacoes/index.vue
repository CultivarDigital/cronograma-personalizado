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
        <v-list v-if="notifications.length" subheader dense>
          <template v-for="notification in notifications">
            <v-list-item
              v-if="notification.admin"
              :key="notification._id"
              class="py-2"
              :class="!notification.read ? 'grey lighten-3' : ''"
            >
              <v-list-item-icon>
                <v-icon> mdi-bell</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-card elevation="1" color="grey" class="pa-3 lighten-2">
                  <h6 class="mb-2">
                    {{ notification.subject }}
                    <small
                      class="font-weight-light"
                      :title="
                        $moment(notification.createdAt).format(
                          'DD/MM/YYYY h:mm:ss'
                        )
                      "
                    >
                      {{ $moment(notification.createdAt).fromNow(true) }} atrás
                    </small>
                  </h6>
                  <div
                    v-linkify
                    class="body-2 subtitle-1"
                    v-text="notification.body"
                  ></div>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
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
