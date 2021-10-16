<template>
  <div v-if="$nuxt.isOnline && false">
    <v-divider class="mt-0 mb-3" />
    <v-list subheader dense>
      <v-list-item v-for="comment in comments" :key="comment.id">
        <v-list-item-avatar>
          <User :user="comment.user" thumb size="40" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="comment.user.displayName" />
          <div class="body-2">{{ comment.message }}</div>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text>
            <small
              class="font-weight-light"
              :title="
                $moment(comment.created_at.toDate()).format(
                  'DD/MM/YYYY h:mm:ss'
                )
              "
            >
              {{ $moment(comment.created_at.toDate()).fromNow(true) }}
            </small>
          </v-list-item-action-text>
          <div v-if="$auth.user && comment.user._id === $auth.user._id">
            <v-btn icon x-small @click="removeComment = comment.id">
              <v-icon color="grey lighten-1"> mdi-delete </v-icon>
            </v-btn>
            <v-dialog
              :value="comment.id === removeComment"
              max-width="290"
              @click:outside="removeComment = null"
            >
              <v-card>
                <v-card-title class="text-h5">
                  Tem certeza que deseja excluír?
                </v-card-title>
                <v-card-text>
                  Esta alteração não pode ser desfeita
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" text @click="removeComment = null">
                    Não
                  </v-btn>
                  <v-btn color="green" text @click="remove(comment)">
                    Sim
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
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
      removeComment: null,
    }
  },
  created() {
    // this.loadComments()
  },
  methods: {
    async loadComments() {
      this.comments = await this.$firebase.runQuery(
        'comments',
        [['target', '==', this.target || this.$route.path]],
        'created_at'
      )
    },
    commentSaved(comment) {
      this.loadComments()
      this.$emit('change', comment)
    },
    remove(comment) {
      this.$firebase
        .remove('comments', comment.id)
        .then(() => {
          this.loadComments()
          this.$emit('change', comment)
        })
        .catch(this.$notifier.firebaseError)
      this.removeComment = null
    },
  },
}
</script>
