<template>
  <div>
    <TopNavigation active="Conteúdo exclusivo" />
    <v-container class="pt-0 px-6">
      <div class="mb-3">
        <Subtitle label="Leitura" back-to="/conteudo-exclusivo" />
      </div>
    </v-container>
    <div v-if="post">
      <v-container>
        <div class="text-center mb-3" style="color: #acacac">
          <h5 class="mb-2 text-h5 font-weight-bold" style="color: #acacac">
            {{ post.title }}
            <Remove
              v-if="$auth.user && $auth.user.role === 'admin'"
              @confirm="remove(post)"
            />
          </h5>
          <p v-if="post.description" class="mb-3">
            <strong>
              <small>{{ post.description }}</small>
            </strong>
          </p>
          <v-btn-toggle rounded>
            <v-btn
              small
              style="
                color: rgba(123, 163, 162, 0.6);
                background-color: rgba(238, 212, 185, 0.4);
                border: 0;
              "
              class="py-5 px-5 mr-1"
            >
              Anterior
            </v-btn>
            <v-btn
              small
              style="
                color: rgba(123, 163, 162, 0.6);
                background-color: rgba(238, 212, 185, 0.4);
                border: 0;
                width: 80px;
              "
              class="py-5 px-5"
            >
            </v-btn>
            <v-btn
              small
              style="
                color: rgba(123, 163, 162, 0.6);
                background-color: rgba(238, 212, 185, 0.4);
                border: 0;
              "
              class="py-5 px-5 ml-1"
            >
              Próximo
            </v-btn>
          </v-btn-toggle>
        </div>
        <Carousel :items="post.pictures" />
        <div v-if="post.tags && post.tags.length" class="mb-3 text-center">
          <template v-if="post.tags">
            <v-chip
              v-for="tag in post.tags"
              :key="tag"
              class="mr-1 mb-1"
              small
              color="primary"
              :to="'/conteudo-exclusivo?tag=' + tag"
              >{{ tag }}</v-chip
            >
          </template>
        </div>
        <v-container class="px-3" style="font-size: 14px">
          <EditorContent :content="post.body" />
        </v-container>
        <!-- <v-card color="grey" class="lighten-3">
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
        </v-card> -->
      </v-container>

      <!-- <Comments :target="'post-' + post._id" :post="post._id" /> -->
      <PostForm
        v-if="$auth.user && $auth.user.role === 'admin'"
        :post="post"
        @change="load"
      />
    </div>
    <v-container v-else>
      <v-skeleton-loader class="mt-6" type="image" />
      <v-skeleton-loader class="mt-6" type="paragraph@3" />
    </v-container>
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
      this.$axios.$get('/v1/posts/' + this.$route.params.slug).then((post) => {
        this.post = post
      })
    },
    remove(post) {
      this.$axios.$delete('/v1/posts/' + post._id).then(() => {
        this.$router.replace('/conteudo-exclusivo')
      })
    },
  },
}
</script>
