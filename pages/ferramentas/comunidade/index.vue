<template>
  <div>
    <TopNavigation
      :links="[['Ferramentas', '/ferramentas']]"
      active="Comunidade"
      description="Compartilhe suas dúvidas, idéias, sugestões, sentimentos e faça parte
        desta comunidade!"
    />
    <v-container class="text-center">
      <v-icon color="primary" size="100" class="mb-3">mdi-forum</v-icon>
      <p>
        Compartilhe suas dúvidas, idéias, sugestões, sentimentos e faça parte
        desta comunidade!
      </p>
    </v-container>
    <ConversationForm @change="load" />
    <v-subheader class="mt-3">Últimas conversas</v-subheader>
    <v-list v-if="conversations" subheader dense>
      <template v-for="(conversation, index) in conversations">
        <v-divider :key="index" />
        <v-list-item
          :key="conversation._id"
          :to="'/ferramentas/comunidade/' + conversation._id"
        >
          <v-list-item-content>
            <v-list-item-title class="mb-2 text-wrap">
              {{ conversation.subject }}
            </v-list-item-title>
            <div class="body-2">
              <User
                v-for="user in conversation.members"
                :key="user._id"
                :user="user"
                thumb
                size="22"
                class="mr-1"
              />
              <v-chip
                v-for="tag in conversation.tags"
                :key="tag"
                class="mr-1"
                x-small
                color="primary"
                >{{ tag }}</v-chip
              >
              <small v-if="conversation.comments_counter"
                >{{ conversation.comments_counter }} resposta{{
                  conversation.comments_counter > 1 ? 's' : ''
                }}</small
              >
              <TimeAgo :date="conversation.createdAt" />
            </div>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon x-small>
              <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>
<script>
export default {
  props: {
    target: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      conversations: null,
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$axios.$get('/v1/conversations').then((conversations) => {
        this.conversations = conversations
      })
    },
    remove(conversation) {
      this.$axios.$delete('/v1/conversations/' + conversation._id).then(() => {
        this.load()
        this.$emit('change', conversation)
      })
      this.removeConversation = null
    },
  },
}
</script>
