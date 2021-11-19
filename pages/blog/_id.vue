<template>
  <div>
    <TopNavigation :links="[['Blog', '/blog']]" active="Postagem" />
    <div v-if="post">
      <v-container>
        <h1 class="mb-2 text-h4 font-weight-bold">{{ post.title }}</h1>
        <h6
          v-if="post.description"
          class="grey--text text--darken-2 text-h6 font-weight-regular mb-3"
        >
          {{ post.description }}
        </h6>
        <div
          v-if="
            (post.categories && post.categories.length) ||
            (post.tags && post.tags.length)
          "
          class="mb-3"
        >
          <template v-if="post.categories">
            <v-chip
              v-for="category in post.categories"
              :key="category"
              class="mr-1 mb-1"
              small
              :color="categoryColor(category)"
              dark
              :to="'/blog?category=' + category"
            >
              {{ category }}
            </v-chip>
          </template>
          <template v-if="post.tags">
            <v-chip
              v-for="tag in post.tags"
              :key="tag"
              class="mr-1 mb-1"
              small
              color="primary"
              :to="'/blog?tag=' + tag"
              >{{ tag }}</v-chip
            >
          </template>
        </div>
        <p v-if="post.stats" class="grey--text text--darken-4 mb-3">
          <small>
            <strong>{{ $moment(post.createdAt).format('DD/MM/YYYY') }}</strong>
            -
            <strong>
              {{ Math.ceil(post.stats.minutes) }} minuto{{
                Math.ceil(post.stats.minutes) > 1 ? 's' : ''
              }}
            </strong>
            de leitura
          </small>
        </p>
        <EditorContent :content="post.body" />
        <v-card color="grey" class="lighten-3">
          <div class="pa-3 caption">Publicado por:</div>
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
import categories from '@/data/post-categories.json'
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
    categoryColor(categoryTitle) {
      const category = categories.find((c) => c.title === categoryTitle)
      if (category) {
        return category.color
      }
      return 'primary'
    },
    load() {
      this.$axios.$get('/v1/posts/' + this.$route.params.id).then((post) => {
        this.post = post
      })
    },
  },
}
</script>
