<template>
  <div>
    <TopNavigation
      :links="[
        ['Feramentas', '/ferramentas'],
        ['Comunidade', '/ferramentas/comunidade'],
      ]"
      active="Conversa"
    />
    <div v-if="conversation">
      <v-list subheader dense>
        <v-list-item>
          <v-list-item-avatar>
            <User :user="conversation.user" thumb size="40" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-wrap mb-3">
              <h2>{{ conversation.subject }}</h2>
            </v-list-item-title>
            <p v-if="conversation.message" class="mb-3">
              {{ conversation.message }}
            </p>
            <div v-if="conversation.tags">
              <v-chip
                v-for="tag in conversation.tags"
                :key="tag"
                class="mr-1"
                small
                color="primary"
                :to="'/ferramentas/comunidade?tag=' + tag"
                >{{ tag }}</v-chip
              >
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <Comments
        :target="'conversation-' + conversation._id"
        :conversation="conversation._id"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      conversation: null,
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$axios
        .$get('/v1/conversations/' + this.$route.params.id)
        .then((conversation) => {
          this.conversation = conversation
        })
    },
  },
}
</script>
