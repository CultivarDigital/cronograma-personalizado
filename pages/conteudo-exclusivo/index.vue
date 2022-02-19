<template>
  <div>
    <TopNavigation active="Conteúdo exclusivo" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Publicações" />
      </div>
      <PostForm
        v-if="$auth.user && $auth.user.role === 'admin'"
        @change="load"
      />
      <v-row v-if="posts">
        <template v-for="post in posts">
          <v-col :key="post._id" class="py-3" cols="12" lg="3">
            <v-card :to="'/conteudo-exclusivo/' + post.slug">
              <v-img
                v-if="post.pictures && post.pictures.length"
                :src="apiURL + post.pictures[0]"
              />
              <div class="pa-3">
                <div v-if="post.stats" class="" style="color: #5ba092">
                  <small>
                    {{ Math.ceil(post.stats.minutes) }} min (leitura)
                  </small>
                </div>
                <h3
                  class="font-font-weight-medium text-h5 mb-0"
                  style="color: #707070"
                >
                  {{ post.title }}
                </h3>
                <p
                  v-if="post.description"
                  class="mb-2 grey--text text--darken-3 font-weight-light"
                >
                  <small>{{ post.description }}</small>
                </p>
              </div>
            </v-card>
          </v-col>
        </template>
      </v-row>
      <v-skeleton-loader
        v-if="!paginationFinished && !filters.search"
        v-intersect="{
          handler: paginate,
          options: {
            threshold: [1.0],
            rootMargin: '100px',
          },
        }"
        class="mt-6"
        type="card@3"
      />
    </v-container>
  </div>
</template>
<script>
import categories from '@/data/post-categories.json'
export default {
  props: {
    target: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      apiURL: process.env.API_URL,
      categories,
      posts: [],
      tags: [],
      show_filters: false,
      paginationFinished: false,
      loading: true,
      filters: {
        perPage: 6,
        page: 1,
        tag: this.$route.query.tag,
        specie: this.$route.query.specie,
        search: null,
      },
    }
  },
  computed: {
    species() {
      return this.$store.state.species
    },
  },
  watchQuery: ['category', 'tag'],
  created() {
    this.loadTags()
    this.load()
  },
  methods: {
    async loadTags() {
      this.tags = await this.$axios.$get('/v1/posts/tags')
    },
    search() {
      if (this.filters.search && this.filters.search.length > 2) {
        this.$axios
          .$get('/v1/posts/search', { params: this.filters })
          .then((posts) => {
            this.posts = posts
          })
      } else if (!this.filters.search) {
        this.load()
      }
    },
    load(paginate = false) {
      if (!paginate) {
        this.filters.page = 1
      }
      this.loading = true
      this.paginationFinished = false
      this.$axios.$get('/v1/posts', { params: this.filters }).then((posts) => {
        if (this.filters.page === 1) {
          this.posts = posts
        } else {
          this.posts = this.posts.concat(posts)
          if (posts.length < this.filters.perPage) {
            this.paginationFinished = true
          }
        }
        this.loading = false
      })
    },
    filter() {
      this.filters.page = 1
      this.load()
    },
    paginate() {
      if (!this.filters.search && !this.loading) {
        this.filters.page += 1
        this.load(true)
      }
    },
  },
}
</script>
<style scoped lang="sass">
.nuxt-link-exact-active
  border-bottom: 2px solid
</style>
