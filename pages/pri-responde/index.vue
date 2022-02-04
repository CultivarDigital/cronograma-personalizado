<template>
  <div>
    <TopNavigation active="Atendimento" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Pri Responde" />
      </div>
      <p class="primary--text font-weight-bold">Procurando algo?</p>
      <v-form @submit.prevent="search">
        <v-text-field
          v-model="filters.search"
          class="mb-6"
          placeholder="Buscar"
          prepend-inner-icon="mdi-magnify"
          outlined
          :hide-details="true"
          dense
          clearable
          @input="search"
        />
      </v-form>
    </v-container>

    <FaqForm
      v-if="!currentFaq && $auth.user && $auth.user.role === 'admin'"
      @change="load"
    />
    <div v-if="loading" class="text-center py-6">
      <v-progress-circular color="secondary" indeterminate />
    </div>
    <v-card v-else class="rounded-lg py-6 px-2 mb-6 bg-primary-gradient">
      <v-container>
        <v-expansion-panels
          v-model="active"
          :round="0"
          class="elevation-0 rounded-0"
        >
          <v-expansion-panel
            v-for="(faq, index) in faqs"
            :key="faq._id"
            class="white elevation-0"
          >
            <v-expansion-panel-header class="pa-3">
              <div class="px-1 py-4">
                <h4
                  class="text-h4 font-weight-bold mb-3"
                  style="color: rgba(60, 60, 67, 0.4)"
                >
                  {{ index.toString().padStart(2, '0') }}
                </h4>
                <h5
                  class="text-h5 font-weight-bold"
                  style="color: rgba(123, 163, 162, 1)"
                >
                  {{ faq.question }}
                </h5>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="color: #acacac">
              <h6 class="text-h6">
                {{ faq.answer }}
              </h6>
              <FaqForm
                v-if="$auth.user && $auth.user.role === 'admin'"
                :faq="faq"
                @change="load"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-card>
    <div v-if="$auth.user && $auth.user.role !== 'admin'" class="text-center">
      <p class="primary--text font-weight-bold">
        Não encontrou o que estava buscando?
      </p>
      <v-btn to="/chat" large color="primary">
        <v-icon left>mdi-chat</v-icon>
        Fale com agente!
      </v-btn>
    </div>
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
      loading: false,
      filters: {
        search: this.$route.query.search,
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
    this.search()
  },
  methods: {
    search() {
      this.loading = true
      if (this.filters.search && this.filters.search.length > 2) {
        this.$axios
          .$get('/v1/faqs/search', { params: this.filters })
          .then((faqs) => {
            this.faqs = faqs
            this.loading = false
          })
      } else if (!this.filters.search) {
        this.load()
      }
    },
    load() {
      this.$axios.$get('/v1/faqs', { params: this.filters }).then((faqs) => {
        this.faqs = faqs
        this.loading = false
      })
    },
    remove(faq) {
      this.loading = true
      this.$axios.$delete('/v1/faqs/' + faq._id).then(() => {
        this.load()
        this.loading = false
      })
    },
  },
}
</script>
<style lang="sass">
.nuxt-link-exact-active
  border-bottom: 2px solid
.v-expansion-panel-content__wrap
  padding: 0 16px 16px !important
.v-expansion-panel-header__icon
  background-color: 7BA3A2
  color: #fff
</style>
