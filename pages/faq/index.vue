<template>
  <div>
    <TopNavigation active="Perguntas frequentes" />
    <FaqForm
      v-if="!currentFaq && $auth.user && $auth.user.role === 'admin'"
      @change="load"
    />
    <v-container>
      <v-form @submit.prevent="search">
        <v-text-field
          v-model="filters.search"
          class="mb-3"
          placeholder="Buscar"
          prepend-inner-icon="mdi-magnify"
          outlined
          :hide-details="true"
          dense
          clearable
          @input="search"
        />
      </v-form>
      <v-expansion-panels v-if="faqs" v-model="active" class="mb-6">
        <v-expansion-panel v-for="faq in faqs" :key="faq._id">
          <v-expansion-panel-header>
            <strong>{{ faq.question }}</strong>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ faq.answer }}
            <FaqForm
              v-if="$auth.user && $auth.user.role === 'admin'"
              :faq="faq"
              @change="load"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <div v-if="$auth.user && $auth.user.role !== 'admin'" class="text-center">
        <p>Não encontrou o que estava buscando?</p>
        <v-btn to="/atendimento" large color="secondary">
          <v-icon left>mdi-chat</v-icon>
          Fale com agente!
        </v-btn>
      </div>
    </v-container>
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
      faqs: [],
      active: null,
      currentFaq: null,
      filters: {
        search: null,
      },
    }
  },
  watch: {
    active(index) {
      this.currentFaq = null
      if (index !== null) {
        this.currentFaq = this.faqs[index]
      }
    },
  },
  created() {
    this.load()
  },
  methods: {
    search() {
      if (this.filters.search && this.filters.search.length > 2) {
        this.$axios
          .$get('/v1/faqs/search', { params: this.filters })
          .then((faqs) => {
            this.faqs = faqs
          })
      } else if (!this.filters.search) {
        this.load()
      }
    },
    load() {
      this.$axios.$get('/v1/faqs', { params: this.filters }).then((faqs) => {
        this.faqs = faqs
      })
    },
    remove(faq) {
      this.$axios.$delete('/v1/faqs/' + faq._id).then(() => {
        this.load()
      })
    },
  },
}
</script>
<style scoped lang="sass">
.nuxt-link-exact-active
  border-bottom: 2px solid
</style>
