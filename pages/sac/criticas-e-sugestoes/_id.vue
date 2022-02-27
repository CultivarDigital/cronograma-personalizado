<template>
  <div>
    <TopNavigation active="SAC" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle
          label="Críticas e sugestões"
          back-to="/sac/criticas-e-sugestoes"
        />
      </div>
    </v-container>
    <div v-if="feedback">
      <v-list>
        <v-list-item class="mb-1 pt-1">
          <v-list-item-avatar>
            <User thumb size="40" :user="feedback.user" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ feedback.user.name }}</v-list-item-title>
            <v-list-item-subtitle>
              <small
                class="font-weight-light"
                :title="
                  $moment(feedback.createdAt).format('DD/MM/YYYY h:mm:ss')
                "
              >
                {{ $moment(feedback.createdAt).fromNow(true) }}
              </small>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <Remove />
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-container class="px-6">
        <h3>{{ feedback.subject }}</h3>
        <p>{{ feedback.message }}</p>
        <v-btn v-if="!feedback.read" class="mb-3" dark @click="markAsRead">
          <v-icon left>mdi-check-all</v-icon> Marcar como lido
        </v-btn>
        <v-btn :to="'/suporte/' + feedback.user._id">
          <v-icon left>mdi-chat</v-icon>
          Falar com a cliente
        </v-btn>
      </v-container>
    </div>
    <v-container v-else>
      <v-skeleton-loader class="mt-6" type="list-item-avatar" />
      <v-skeleton-loader class="mt-6" type="article" />
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      feedback: null,
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$axios
        .$get('/v1/feedbacks/' + this.$route.params.id)
        .then((feedback) => {
          this.success(feedback)
        })
        .catch(this.error)
    },
    markAsRead() {
      this.$axios
        .$patch('/v1/feedbacks/' + this.$route.params.id)
        .then((feedback) => {
          this.feedback = feedback
        })
        .catch(this.error)
    },
    error(error) {
      this.$notifier.firebaseError(error)
      this.loading = false
    },
    success(feedback) {
      this.loading = false
      this.feedback = feedback
    },
  },
}
</script>
