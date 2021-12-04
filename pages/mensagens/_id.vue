<template>
  <div>
    <TopNavigation :active="'Conversa com '" />
    <div v-if="user">
      <v-list v-if="messages && messages.length" subheader dense>
        <v-list-item v-for="message in messages" :key="message._id">
          <v-list-item-avatar v-if="messages.to._id === $auth.user.id">
            <User :user="message.from" thumb size="40" />
          </v-list-item-avatar>
          <v-list-item-content>
            <h2 class="mb-3">{{ messages.subject }}</h2>
            <p v-if="messages.message" class="mb-3">
              {{ messages.message }}
            </p>
            <div v-if="messages.tags && messages.tags.length" class="mb-2">
              <v-chip
                v-for="tag in messages.tags"
                :key="tag"
                class="mr-1 mb-1"
                small
                color="primary"
                :to="'/ferramentas/comunidade?tag=' + tag"
                >{{ tag }}</v-chip
              >
            </div>
            <div
              v-if="messages.species && messages.species.length"
              class="mb-3"
            >
              <SpecieChip
                v-for="specie in messages.species"
                :key="specie"
                :value="specie"
                :to="'/ferramentas/comunidade?specie=' + specie"
              />
            </div>
          </v-list-item-content>
          <v-list-item-avatar v-if="messages.from._id === $auth.user.id">
            <User thumb size="40" />
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <MessageForm :to="user" @change="load" />
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
    this.loadUser()
    this.load()
  },
  methods: {
    loadUser() {
      this.$axios.$get('/v1/users/' + this.$route.params.id).then((user) => {
        this.user = user
      })
    },
    load() {
      this.$axios
        .$get('/v1/messages/' + this.$route.params.id)
        .then((messages) => {
          this.messages = messages
        })
    },
  },
}
</script>
