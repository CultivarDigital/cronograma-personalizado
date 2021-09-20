<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <v-divider class="mt-0 mb-3" />
    <v-list subheader dense>
      <v-list-item v-for="comment in comments" :key="comment.id">
        <v-list-item-avatar>
          <User :user="comment.user" thumb size="40" />
        </v-list-item-avatar>
        <v-list-item-content>
          <p class="mb-0 text-caption">
            <strong>{{ comment.user.displayName }}</strong>
          </p>
          <p>{{ comment.created_at.toDate() }}</p>
        </v-list-item-content>
        <v-list-item-action
          v-if="
            $store.state.authUser &&
            $store.state.authUser &&
            comment.user.uid === $store.state.authUser.uid
          "
        >
          <v-btn icon @click="remove(comment)">
            <v-icon color="grey lighten-1"> mdi-delete </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <CommentForm :target="target" @change="commentSaved" />
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
      comments: null,
    }
  },
  computed: {
    authUser() {
      return this.$store.state.authUser
    },
  },
  created() {
    this.loadComments()
  },
  methods: {
    async loadComments() {
      const commentsRef = await this.$fire.firestore
        .collection('comments')
        .orderBy('created_at')
        .where('target', '==', this.target || this.$route.path)
        .get()
      this.comments = commentsRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    },
    commentSaved(comment) {
      this.loadComments()
      this.$emit('change', comment)
    },
    remove(comment) {
      this.$bvModal
        .msgBoxConfirm('Tem certeza?', { okTitle: 'Sim', cancelTitle: 'Não' })
        .then(async (value) => {
          if (value) {
            await this.$axios.$delete('/api/comments/' + comment.id)
            this.loadComments()
            this.$emit('change', comment)
          }
        })
    },
  },
}
</script>
