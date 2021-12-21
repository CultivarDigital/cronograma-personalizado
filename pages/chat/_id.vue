<template>
  <div>
    <TopNavigation
      :links="[
        ['Feramentas', '/ferramentas'],
        ['Comunidade', '/chat'],
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
            <h2 class="mb-3">{{ conversation.subject }}</h2>
            <p v-if="conversation.message" class="mb-3">
              {{ conversation.message }}
            </p>
            <div
              v-if="conversation.tags && conversation.tags.length"
              class="mb-2"
            >
              <v-chip
                v-for="tag in conversation.tags"
                :key="tag"
                class="mr-1 mb-1"
                small
                color="primary"
                :to="'/chat?tag=' + tag"
                >{{ tag }}</v-chip
              >
            </div>
            <div
              v-if="conversation.species && conversation.species.length"
              class="mb-3"
            >
              <SpecieChip
                v-for="specie in conversation.species"
                :key="specie"
                :value="specie"
                :to="'/chat?specie=' + specie"
              />
            </div>
            <ConversationForm
              v-if="$auth.user && $auth.user.id === conversation.user._id"
              :conversation="conversation"
              @change="load"
            />
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
