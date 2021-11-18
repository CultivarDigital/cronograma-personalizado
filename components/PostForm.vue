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
      <v-container class="pt-10">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div class="mb-6">
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
                  :error-messages="errors"
                />
              </validation-provider>
              <editor v-model="form.body" />
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
              <v-checkbox
                v-model="form.published"
                label="Publicado?"
                hide-details="auto"
              />
              <v-checkbox
                v-model="form.highlighted"
                label="Em destaque?"
                hide-details="auto"
              />
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
      dialog: true,
      tags: [],
      form: {
        title: '',
        description: '',
        body: '',
        tags: [],
        published: false,
        highlighted: false,
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
          this.$router.replace('/blog/' + post._id)
          this.$emit('change', post)
        })
      }
    },
  },
}
</script>
