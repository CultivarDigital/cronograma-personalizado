<template>
  <div>
    <TopNavigation active="Blog" description="Conteúdos que inspiram" />
    <div class="d-flex justify-space-around mb-4">
      <div
        v-for="category in categories"
        :key="category.title"
        class="text-center"
      >
        <n-link
          class="text-body-2 text-sm-body-1 text-decoration-none"
          rounded
          :style="'color: ' + category.color"
          dark
          :to="'/blog?category=' + category.title"
        >
          <strong>{{ category.title }}</strong>
        </n-link>
        <v-spacer></v-spacer>
      </div>
    </div>
    <v-divider></v-divider>
    <PostForm v-if="$auth.user && $auth.user.role === 'admin'" @change="load" />
    <!-- <v-container>
      <v-form @submit.prevent="search">
        <v-text-field
          v-model="filters.search"
          class="mt-6"
          placeholder="Buscar"
          prepend-inner-icon="mdi-magnify"
          outlined
          :hide-details="true"
          dense
          clearable
          @input="search"
        />
        <div v-if="filters.tag || filters.specie || show_filters">
          <v-select
            v-model="filters.tag"
            class="mt-6"
            label="Palavras chave (#hashtags)"
            outlined
            :hide-details="true"
            dense
            :items="tags"
            clearable
            @input="filter"
          />
          <v-select
            v-model="filters.specie"
            class="mt-6 mb-3"
            label="Espécie relacionada"
            outlined
            :hide-details="true"
            dense
            :items="species"
            item-text="name"
            item-value="id"
            clearable
            @input="filter"
          />
        </div>
        <div v-else class="pt-6 pb-3 text-center">
          <v-btn small @click="show_filters = true">
            <v-icon left>mdi-tune</v-icon>
            Mais filtros
          </v-btn>
        </div>
      </v-form>
    </v-container> -->
    <v-list v-if="posts">
      <template v-for="(post, index) in posts">
        <v-list-item :key="post._id" class="py-3" :to="'/blog/' + post.slug">
          <v-list-item-content>
            <h3 class="font-font-weight-medium mb-2">
              {{ post.title }}
            </h3>
            <div
              v-if="post.description"
              class="mb-2 grey--text text--darken-3 font-weight-light"
            >
              {{ post.description }}
            </div>
            <div v-if="post.stats" class="caption grey--text text--darken-4">
              <span>
                {{ $moment(post.createdAt).format('DD/MM/YYYY') }}
                -
                <strong>
                  {{ Math.ceil(post.stats.minutes) }} minuto{{
                    Math.ceil(post.stats.minutes) > 1 ? 's' : ''
                  }}
                </strong>
                de leitura
              </span>
            </div>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <TimeAgo :date="post.createdAt" />
            </v-list-item-action-text>
            <v-btn icon small>
              <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="index" />
      </template>
    </v-list>
    <v-skeleton-loader
      v-if="!paginationFinished && !filters.search"
      v-intersect="{
        handler: paginate,
        options: {
          threshold: [1.0],
          rootMargin: '100px',
        },
      }"
      type="list-item-avatar-two-line@3"
    />
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
    remove(post) {
      this.$axios.$delete('/v1/posts/' + post._id).then(() => {
        this.load()
        this.$emit('change', post)
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
