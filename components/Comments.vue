<template>
  <div>
    <v-divider class="my-2" />
    <v-list subheader dense>
      <template v-for="comment in comments">
        <v-list-item :key="comment.id">
          <v-list-item-avatar>
            <User :user="comment.user" thumb size="40" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="comment.user.name" />
            <div v-linkify class="body-2 pt-2">{{ comment.message }}</div>
            <div v-if="comment.images.length" class="pt-2">
              <Gallery :images="comment.images" />
            </div>
            <div v-if="comment.members.length" class="pt-2">
              <User
                v-for="member in comment.members"
                :key="member.id"
                :user="member"
                thumb
                size="32"
                class="mr-1 mb-1"
                icon-color="white"
              />
            </div>
            <div v-if="comment.species.length" class="pt-2">
              <SpecieChip
                v-for="specie in comment.species"
                :key="specie"
                :value="specie"
              />
            </div>
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
        <v-divider :key="'divider-' + comment._id" class="my-2" />
      </template>
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
