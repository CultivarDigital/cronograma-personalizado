<template>
  <div>
    <v-list v-if="feedbacks">
      <v-list-item
        v-for="feedback in feedbacks"
        :key="feedback._id"
        :class="feedback.read ? '' : 'secondary'"
        :dark="!feedback.read"
        class="mb-1 pt-1"
        :to="'/sac/criticas-e-sugestoes/' + feedback._id"
      >
        <v-list-item-avatar>
          <User thumb size="40" :user="feedback.user" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ feedback.user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ feedback.subject }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text>
            <small
              class="font-weight-light"
              :title="$moment(feedback.createdAt).format('DD/MM/YYYY h:mm:ss')"
            >
              {{ $moment(feedback.createdAt).fromNow(true) }}
            </small>
          </v-list-item-action-text>

          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-skeleton-loader
      v-else
      class="mt-6"
      type="list-item-avatar-three-line@3"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      feedbacks: null,
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$axios
        .$get('/v1/feedbacks')
        .then((feedbacks) => {
          this.success(feedbacks)
        })
        .catch(this.error)
    },
    error(error) {
      this.$notifier.firebaseError(error)
      this.loading = false
    },
    success(feedbacks) {
      this.loading = false
      this.feedbacks = feedbacks
    },
  },
}
</script>
