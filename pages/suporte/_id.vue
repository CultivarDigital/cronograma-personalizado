<template>
  <div>
    <TopNavigation active="Suporte" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Atendimento" />
      </div>
    </v-container>
    <v-list v-if="messages" subheader dense>
      <template v-for="message in messages">
        <v-list-item
          :key="message._id"
          class="py-2"
          :class="!message.admin & !message.read ? 'grey lighten-3' : ''"
        >
          <v-list-item-avatar>
            <User
              :user="message.admin ? message.admin : message.user"
              thumb
              size="40"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              v-text="message.admin ? message.admin.name : message.user.name"
            />
            <div v-linkify class="body-2 pt-2">{{ message.message }}</div>
            <div v-if="message.images.length" class="pt-2">
              <Gallery :images="message.images" />
            </div>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <small
                class="font-weight-light"
                :title="$moment(message.createdAt).format('DD/MM/YYYY h:mm:ss')"
              >
                {{ $moment(message.createdAt).fromNow(true) }}
              </small>
            </v-list-item-action-text>
            <div v-if="message.admin">
              <Remove @confirm="remove(message)" />
            </div>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'divider-' + message._id" />
      </template>
    </v-list>
    <v-container>
      <v-alert
        v-if="messages && messages.length === 0"
        class="text-center"
        color="grey"
        dark
      >
        Nenhuma mensagem encontrada
      </v-alert>
      <div class="text-right">
        <v-btn v-if="hasUnread" large @click="markAllAsRead">
          <v-icon left>mdi-check-all</v-icon>
          Marcar como lidas
        </v-btn>
      </div>
    </v-container>
    <MessageForm @change="loadMessages" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
      messages: null,
    }
  },
  computed: {
    hasUnread() {
      if (this.messages) {
        return this.messages.find((message) => !message.admin && !message.read)
      }
      return false
    },
  },
  created() {
    this.loadUser()
    this.loadMessages()
  },
  methods: {
    async loadMessages() {
      this.messages = await this.$axios.$get(
        '/v1/messages/' + this.$route.params.id
      )
    },
    async loadUser() {
      this.user = await this.$axios.$get('/v1/users/' + this.$route.params.id)
    },
    async markAllAsRead() {
      await this.$axios.$patch('/v1/messages/' + this.$route.params.id)
      this.loadMessages()
    },
    remove(message) {
      this.$axios.$delete('/v1/messages/' + message._id).then(() => {
        this.loadMessages()
      })
    },
  },
}
</script>
