<template>
  <div>
    <TopNavigation active="Atendimento" />
    <v-list style="border-bottom: 1px solid #acacac" class="pt-0">
      <v-list-item class="pb-2">
        <v-list-item-avatar>
          <img :src="require('~/assets/img/atendimento-perfil.png')" />
        </v-list-item-avatar>
        <v-list-item-content style="color: #acacac" class="py-0">
          <h4>Suporte Prijorge</h4>
          <div>
            <small> Atendimento às quartas feiras das 10h às 15h </small>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div style="height: calc(100vh - 280px); overflow-y: auto">
      <v-list v-if="messages" subheader dense>
        <template v-for="message in messages">
          <v-list-item
            v-if="message.admin"
            :key="message._id"
            class="py-2"
            :class="!message.read ? 'grey lighten-3' : ''"
          >
            <v-list-item-avatar>
              <User :user="message.admin" thumb size="40" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-card elevation="1" color="grey" class="pa-3 lighten-2">
                <h6 class="mb-2">
                  {{ message.admin.name }}
                  <small
                    class="font-weight-light"
                    :title="
                      $moment(message.createdAt).format('DD/MM/YYYY h:mm:ss')
                    "
                  >
                    {{ $moment(message.createdAt).fromNow(true) }} atrás
                  </small>
                </h6>
                <div
                  v-linkify
                  class="body-2 subtitle-1"
                  v-text="message.message"
                ></div>
                <div v-if="message.images.length" class="">
                  <Gallery :images="message.images" />
                </div>
              </v-card>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else :key="message._id" class="py-2">
            <v-list-item-content>
              <v-card
                elevation="1"
                color="grey"
                class="pa-3 text-right"
                :class="message.admin && !message.read ? '' : 'lighten-3'"
              >
                <h6 class="mb-2">
                  {{ message.user.name }}
                  <small
                    class="font-weight-light"
                    :title="
                      $moment(message.createdAt).format('DD/MM/YYYY h:mm:ss')
                    "
                  >
                    {{ $moment(message.createdAt).fromNow(true) }} atrás
                  </small>
                </h6>
                <div class="subtitle-1">
                  <div v-linkify>{{ message.message }}</div>
                </div>
                <div v-if="message.images.length" class="">
                  <Gallery :images="message.images" />
                </div>

                <!-- <Remove v-if="!message.admin" @confirm="remove(message)" /> -->
              </v-card>
            </v-list-item-content>
            <v-list-item-avatar>
              <User :user="message.user" thumb size="40" />
            </v-list-item-avatar>
          </v-list-item>
        </template>
      </v-list>
    </div>
    <div style="border-top: 1px solid #acacac">
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
      await this.$axios.$patch('/v1/messages/' + this.$auth.user.id)
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
