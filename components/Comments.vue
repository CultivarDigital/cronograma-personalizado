<template>
  <div>
    <v-divider class="mt-0 mb-3" />
    <v-list subheader dense>
      <v-list-item v-for="comment in comments" :key="comment.id">
        <v-list-item-avatar>
          <User :user="comment.user" thumb size="40" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="comment.user.name" />
          <div class="body-2">{{ comment.message }}</div>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text>
            <small
              class="font-weight-light"
              :title="$moment(comment.createdAt).format('DD/MM/YYYY h:mm:ss')"
            >
              {{ $moment(comment.createdAt).fromNow(true) }}
            </small>
          </v-list-item-action-text>
          <div v-if="$auth.user && comment.user._id === $auth.user.id">
            <Remove @confirm="remove(comment)" />
          </div>
        </v-list-item-action>
      </v-list-item>
      <CommentForm
        :target="target"
        :conversation="conversation"
        @change="commentSaved"
      />
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
    conversation: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      comments: null,
    }
  },
  created() {
    this.loadComments()
  },
  methods: {
    async loadComments() {
      this.comments = await this.$axios.$get('/v1/comments', {
        params: { target: this.target || this.$route.path },
      })
    },
    commentSaved(comment) {
      this.loadComments()
      this.$emit('change', comment)
    },
    remove(comment) {
      this.$axios
        .$delete('/v1/comments/' + comment._id, {
          params: { target: this.target || this.$route.path },
        })
        .then(() => {
          this.loadComments()
          this.$emit('change', comment)
        })
    },
  },
}
</script>
