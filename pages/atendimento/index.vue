<template>
  <div>
    <TopNavigation active="Atendimento" />
    <v-list v-if="messages" subheader dense>
      <template v-for="message in messages">
        <v-list-item
          :key="message._id"
          class="py-2"
          :class="message.admin && !message.read ? 'grey lighten-3' : ''"
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
            <div v-if="!message.admin">
              <Remove @confirm="remove(message)" />
            </div>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'divider-' + message._id" />
      </template>
    </v-list>
    <div>
      <MessageForm id="message-form" @change="load" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: null,
    }
  },
  created() {
    this.load()
    setTimeout(() => {
      this.$vuetify.goTo('#message-form', {})
    }, 300)
  },
  methods: {
    async load() {
      this.messages = await this.$axios.$get('/v1/messages')

      if (
        this.messages &&
        this.messages.find((message) => message.admin && !message.read)
      ) {
        setTimeout(() => {
          this.markAllAsRead()
        }, 3000)
      }
    },
    async markAllAsRead() {
      await this.$axios.$patch('/v1/messages/' + this.$route.params.id)
      this.messages = await this.$axios.$get('/v1/messages')
    },
    remove(message) {
      this.$axios.$delete('/v1/messages/' + message._id).then(() => {
        this.load()
      })
    },
  },
}
</script>
