<template>
  <div>
    <TopNavigation active="Comentários" />
    <div v-if="comments">
      <v-container>
        <strong>{{ comments.length }}</strong> comentários
      </v-container>
      <v-list>
        <template v-for="comment in comments">
          <v-divider :key="`divider-${comment.id}`"></v-divider>
          <v-list-item :key="comment.id">
            <v-list-item-avatar color="primary">
              <User :user="comment.user" />
            </v-list-item-avatar>
            <v-list-item-content>
              <div>
                <div>
                  <strong>{{ comment.user.name }}</strong>
                </div>
                <div v-if="comment.target">
                  <small>
                    <strong>{{ comment.target }}</strong>
                  </small>
                </div>
                <small>{{ comment.message }}</small>
              </div>
            </v-list-item-content>
            <v-list-item-action-text>
              <small
                class="font-weight-light"
                :title="$moment(comment.createdAt).format('DD/MM/YYYY h:mm:ss')"
              >
                {{ $moment(comment.createdAt).fromNow(true) }}
              </small>
            </v-list-item-action-text>
          </v-list-item>
        </template>
      </v-list>
    </div>
    <div v-else class="text-center py-6">
      <v-progress-circular color="primary" indeterminate size="20" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: null,
    }
  },
  async created() {
    this.comments = await this.$axios.$get('/v1/comments/all')
  },
}
</script>
