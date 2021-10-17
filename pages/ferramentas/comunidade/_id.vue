<template>
  <div>
    <TopNavigation
      :links="[
        ['Feramentas', '/ferramentas'],
        ['Comunidade', '/ferramentas/comunidade'],
      ]"
      active="Conversa"
    />
    <v-container v-if="conversation">
      <h3 class="mb-3">{{ conversation.data().title }}</h3>
      <div v-if="conversation.data().categories">
        <v-chip
          v-for="category in conversation.data().categories"
          :key="category"
          class="mr-1"
          small
          color="primary"
          >{{ category }}</v-chip
        >
      </div>
    </v-container>
    <v-list subheader dense>
      <v-list-item v-for="message in messages" :key="message.id">
        <v-list-item-avatar>
          <User :user="message.data().user" thumb size="40" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ message.data().user.name }}
            <TimeAgo :date="message.data().timestamp" />
          </v-list-item-title>
          <div class="body-2">{{ message.data().message }}</div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from '@firebase/firestore'
export default {
  data() {
    return {
      conversation: null,
      messages: null,
    }
  },
  created() {
    getDoc(doc(getFirestore(), 'conversations', this.$route.params.id)).then(
      (conversation) => {
        this.conversation = conversation
      }
    )
    getDocs(
      collection(
        getFirestore(),
        'conversations',
        this.$route.params.id,
        'messages'
      )
    ).then((messages) => {
      this.messages = messages.docs
    })
  },
}
</script>
