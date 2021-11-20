<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{ on, attrs }">
      <v-btn
        v-if="post"
        v-bind="attrs"
        small
        fab
        bottom
        right
        fixed
        dark
        color="primary"
        v-on="on"
      >
        <v-icon dark>mdi-pencil</v-icon>
      </v-btn>
      <div v-else class="text-center">
        <v-btn
          fab
          bottom
          right
          fixed
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>mdi-chat-plus</v-icon>
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-toolbar color="primary" dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <span>Nova postagem</span>
      </v-toolbar>
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div class="mb-6">
              <div class="mb-6">
                <v-checkbox
                  v-for="category in categories"
                  :key="category.title"
                  v-model="form.categories"
                  :label="category.title"
                  :color="category.color"
                  :value="category.title"
                  hide-details
                  class="d-inline-block mr-3 mt-0"
                >
                  <template #label>
                    <span :style="'color: ' + category.color">{{
                      category.title
                    }}</span>
                  </template>
                </v-checkbox>
              </div>
              <validation-provider
                v-slot="{ errors }"
                name="título"
                rules="required"
              >
                <v-text-field
                  v-model="form.title"
                  label="Título"
                  outlined
                  counter
                  :error-messages="errors"
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Descrição curta"
                rules="required"
              >
                <v-textarea
                  v-model="form.description"
                  label="Descrição curta"
                  counter
                  outlined
                  :rows="2"
                  :error-messages="errors"
                />
              </validation-provider>
              <editor v-model="form.body" @input="calcStats" />
              <div v-if="form.stats" class="mb-6 mt-n3 text-right">
                <small
                  ><strong
                    >{{ Math.ceil(form.stats.minutes) }} minuto{{
                      Math.ceil(form.stats.minutes) > 1 ? 's' : ''
                    }}</strong
                  >
                  de leitura</small
                >
              </div>
              <v-combobox
                v-model="form.tags"
                :items="tags"
                label="Palavras chave"
                outlined
                multiple
                chips
                small-chips
                deletable-chips
                hide-details="auto"
              ></v-combobox>
              <div class="mb-3">
                <v-checkbox
                  v-model="form.published"
                  label="Publicado?"
                  hide-details="auto"
                  class="d-inline-block mr-3"
                />
                <v-checkbox
                  v-model="form.highlighted"
                  label="Em destaque?"
                  hide-details="auto"
                  class="d-inline-block mr-3"
                />
              </div>
            </div>
            <div class="text-right">
              <Save
                :invalid="invalid"
                :block="false"
                :label="post ? 'Salvar postagem' : 'Publicar postagem'"
              />
            </div>
          </v-form>
        </ValidationObserver>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
// import { Researcher, Paper } from 'yoastseo'
// import slugify from 'slugify'
import readingTime from 'reading-time'
import categories from '@/data/post-categories.json'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    post: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      categories,
      dialog: false,
      tags: [],
      form: {
        title: '',
        description: '',
        body: '',
        tags: [],
        categories: [],
        published: false,
        highlighted: false,
        stats: null,
      },
    }
  },
  created() {
    if (this.post) {
      Object.keys(this.form).forEach((key) => {
        if (this.post[key]) {
          this.form[key] = this.post[key]
        }
      })
    }
    this.loadTags()
  },
  methods: {
    async loadTags() {
      this.tags = await this.$axios.$get('/v1/posts/tags')
    },
    calcStats() {
      this.form.stats = readingTime(this.form.body)
    },
    save() {
      const form = { ...this.form }
      if (this.post) {
        this.$axios.$patch('/v1/posts/' + this.post._id, form).then((post) => {
          this.$notifier.success('Conversa salva!')
          this.$emit('change', post)
          this.dialog = false
        })
      } else {
        this.$axios.$post('/v1/posts', form).then((post) => {
          this.$notifier.success('Conversa iniciada!')
          this.dialog = false
          this.$router.replace('/blog/' + post.slug)
          this.$emit('change', post)
        })
      }
    },
  },
}
</script>
