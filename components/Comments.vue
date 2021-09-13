<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="pt-3 pb-3">
    <hr class="mt-0 mb-3" />
    <b-media v-for="comment in comments" :key="comment.id" class="pt-2">
      <template #aside>
        <User :user="comment.user" thumb size="40px" />
      </template>
      <div>
        <small
          ><strong>{{ comment.user.displayName }}</strong></small
        >
        <br />
        {{ comment.message }}
        <a
          v-if="
            $store.state.authUser &&
            $store.state.authUser &&
            comment.user.uid === $store.state.authUser.uid
          "
          @click="remove(comment)"
        >
          <small class="text-muted ml-1"><i class="fas fa-trash"></i></small>
        </a>
      </div>
    </b-media>
    <CommentForm :target="target" @change="commentSaved" />
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
