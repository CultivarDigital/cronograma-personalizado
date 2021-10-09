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
          :key="conversation.id"
          :to="'/ferramentas/comunidade/' + conversation.id"
        >
          <v-list-item-content>
            <v-list-item-title class="mb-2 text-wrap">
              {{ conversation.data().title }}
            </v-list-item-title>
            <div class="body-2">
              <User
                :user="conversation.data().user"
                thumb
                size="22"
                class="mr-1"
              />
              <v-chip
                v-for="category in conversation.data().categories"
                :key="category"
                class="mr-1"
                x-small
                color="primary"
                >{{ category }}</v-chip
              >
              <TimeAgo :date="conversation.data().timestamp" />
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
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
} from 'firebase/firestore'
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
      removeConversation: null,
    }
  },
  computed: {
    authUser() {
      return this.$store.state.authUser
    },
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      getDocs(
        query(
          collection(getFirestore(), 'conversations'),
          orderBy('timestamp', 'desc')
        )
      )
        .then((conversations) => {
          this.conversations = conversations.docs
        })
        .catch(this.$notifier.dbError)
    },
    remove(conversation) {
      this.$firebase
        .remove('conversations', conversation.id)
        .then(() => {
          this.load()
          this.$emit('change', conversation)
        })
        .catch(this.$notifier.dbError)
      this.removeConversation = null
    },
  },
}
</script>
