<template>
  <div>
    <TopNavigation
      :links="[['Ferramentas', '/ferramentas']]"
      active="Comunidade"
      description="Compartilhe suas dúvidas, idéias, sugestões, sentimentos e faça parte
        desta comunidade!"
    />
    <v-container class="text-center">
      <v-icon color="primary" size="100" class="mb-3 darken-2"
        >mdi-forum</v-icon
      >
      <p>
        Compartilhe suas dúvidas, idéias, sugestões, sentimentos e faça parte
        desta comunidade!
      </p>
    </v-container>
    <ConversationForm @change="load" />
    <v-container>
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
    </v-container>
    <v-subheader v-if="!filters.search && filters.tag">
      Últimas conversas
    </v-subheader>
    <v-list v-if="conversations" subheader dense>
      <template v-for="(conversation, index) in conversations">
        <v-divider :key="index" />
        <v-list-item
          :key="conversation._id"
          class="py-1"
          :to="'/chat/' + conversation._id"
        >
          <v-list-item-content>
            <v-list-item-title class="mb-2 text-wrap">
              <h3>
                {{ conversation.subject }}
              </h3>
            </v-list-item-title>
            <div
              v-if="conversation.tags && conversation.tags.length"
              class="mb-1"
            >
              <v-chip
                v-for="tag in conversation.tags"
                :key="tag"
                class="mr-1 mb-1"
                small
                color="primary"
                >{{ tag }}</v-chip
              >
            </div>
            <div class="body-2">
              <User
                v-for="user in conversation.members"
                :key="user._id"
                :user="user"
                thumb
                size="22"
                class="mr-1"
              />

              <small v-if="conversation.comments_counter"
                >{{ conversation.comments_counter }} resposta{{
                  conversation.comments_counter > 1 ? 's' : ''
                }}</small
              >
            </div>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <TimeAgo :date="conversation.createdAt" />
            </v-list-item-action-text>
            <v-btn icon small>
              <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
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
export default {
  props: {
    target: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      conversations: [],
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
  created() {
    this.loadTags()
    this.load()
  },
  methods: {
    async loadTags() {
      this.tags = await this.$axios.$get('/v1/conversations/tags')
    },
    search() {
      if (this.filters.search && this.filters.search.length > 2) {
        this.$axios
          .$get('/v1/conversations/search', { params: this.filters })
          .then((conversations) => {
            this.conversations = conversations
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
      this.$axios
        .$get('/v1/conversations', { params: this.filters })
        .then((conversations) => {
          if (this.filters.page === 1) {
            this.conversations = conversations
          } else {
            this.conversations = this.conversations.concat(conversations)
            if (conversations.length < this.filters.perPage) {
              this.paginationFinished = true
            }
          }
          this.loading = false
        })
    },
    remove(conversation) {
      this.$axios.$delete('/v1/conversations/' + conversation._id).then(() => {
        this.load()
        this.$emit('change', conversation)
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
