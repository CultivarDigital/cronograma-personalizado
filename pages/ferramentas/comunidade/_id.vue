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
      <h3 class="mb-3">{{ conversation.subject }}</h3>
      <div v-if="conversation.tags">
        <v-chip
          v-for="tag in conversation.tags"
          :key="tag"
          class="mr-1"
          small
          color="primary"
          >{{ tag }}</v-chip
        >
      </div>
      <Comments
        :target="'conversation-' + conversation._id"
        :conversation="conversation._id"
      />
    </v-container>
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
