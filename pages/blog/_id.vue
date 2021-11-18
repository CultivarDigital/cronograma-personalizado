<template>
  <div>
    <TopNavigation :links="[['Blog', '/blog']]" active="Postagem" />
    <div v-if="post">
      <v-container>
        <h1 class="mb-2">{{ post.title }}</h1>
        <p v-if="post.description" class="text--secondary mb-3">
          {{ post.description }}
        </p>
        <EditorContent :content="post.body" />
        <div v-if="post.tags && post.tags.length" class="mb-2">
          <v-chip
            v-for="tag in post.tags"
            :key="tag"
            class="mr-1 mb-1"
            small
            color="primary"
            :to="'/blog?tag=' + tag"
            >{{ tag }}</v-chip
          >
        </div>
        <v-card color="grey" class="lighten-3">
          <div class="pa-3 caption">
            Publicado em
            <strong>{{ $moment(post.createdAt).format('DD/MM/YYYY') }}</strong>
            por:
          </div>
          <v-list subheader dense color="grey" class="lighten-4">
            <v-list-item>
              <v-list-item-avatar>
                <User :user="post.author" thumb size="40" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ post.author.name }}
                </v-list-item-title>
                <div>
                  <small>{{ post.author.bio }}</small>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-container>

      <Comments :target="'post-' + post._id" :post="post._id" />
      <PostForm
        v-if="$auth.user && $auth.user.id === post.author._id"
        :post="post"
        @change="load"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: null,
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$axios.$get('/v1/posts/' + this.$route.params.id).then((post) => {
        this.post = post
      })
    },
  },
}
</script>
