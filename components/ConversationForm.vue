<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{ on, attrs }">
      <v-btn v-if="conversation" v-bind="attrs" v-on="on">
        <v-icon left dark>mdi-pencil</v-icon> Editar
      </v-btn>
      <div v-else class="text-center">
        <v-btn dark v-bind="attrs" color="success" large v-on="on">
          <v-icon left>mdi-chat-plus</v-icon> Comece uma conversa
        </v-btn>
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
        <span>Comece um novo assunto</span>
      </v-toolbar>
      <v-card-text class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div class="mb-6">
              <validation-provider
                v-slot="{ errors }"
                name="assunto"
                rules="required|max:140"
              >
                <v-text-field
                  v-model="form.subject"
                  name="name"
                  label="Qual o assunto dessa conversa?"
                  outlined
                  counter
                  maxlength="140"
                  :error-messages="errors"
                />
              </validation-provider>
              <validation-provider v-slot="{ errors }" name="detalhe">
                <v-textarea
                  v-model="form.message"
                  name="name"
                  label="Detalhe sua questão"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
              <v-combobox
                v-model="form.tags"
                :items="tags"
                label="Palavras chave (#hashtags)"
                outlined
                multiple
                chips
                small-chips
                deletable-chips
              ></v-combobox>
              <v-combobox
                v-model="form.species"
                :items="species"
                item-text="name"
                label="Espécies relacionadas"
                outlined
                multiple
                chips
                hide-details="auto"
                small-chips
                deletable-chips
              >
                <template #selection="data">
                  <v-chip
                    :key="JSON.stringify(data.item)"
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    :disabled="data.disabled"
                    @click="removeSpecie(data.item.id)"
                  >
                    <v-avatar class="accent white--text" left>
                      <CachedImage
                        v-if="data.item.images"
                        :title="data.item.name"
                        :src="data.item.images[0]"
                        thumb
                      />
                    </v-avatar>
                    {{ data.item.name }}
                  </v-chip>
                </template>
              </v-combobox>
            </div>
            <div class="text-right">
              <Save
                :invalid="invalid"
                :block="false"
                :label="conversation ? 'Salvar conversa' : 'Iniciar conversa'"
              />
            </div>
          </v-form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import categories from '@/data/conversation-categories.json'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    conversation: {
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
        subject: '',
        message: '',
        tags: [],
        species: [],
      },
    }
  },
  computed: {
    species() {
      return this.$store.state.species
    },
  },
  created() {
    if (this.conversation) {
      Object.keys(this.form).forEach((key) => {
        if (this.conversation[key]) {
          if (key === 'species') {
            this.form.species = this.species.filter((specie) =>
              this.conversation[key].includes(specie.id)
            )
          } else {
            this.form[key] = this.conversation[key]
          }
        }
      })
    }
    this.loadTags()
  },
  methods: {
    async loadTags() {
      this.tags = await this.$axios.$get('/v1/conversations/tags')
    },
    save() {
      const form = { ...this.form }
      form.species = this.form.species.map((specie) =>
        typeof specie === 'object' ? specie.id : specie
      )
      if (this.conversation) {
        this.$axios
          .$patch('/v1/conversations/' + this.conversation._id, form)
          .then((conversation) => {
            this.$notifier.success('Conversa salva!')
            this.$emit('change', conversation)
            this.dialog = false
          })
      } else {
        this.$axios.$post('/v1/conversations', form).then((conversation) => {
          this.$notifier.success('Conversa iniciada!')
          this.$router.replace('/ferramentas/comunidade/' + conversation._id)
          this.$emit('change', conversation)
        })
      }
    },
    removeSpecie(specieId) {
      this.form.species = this.form.species.filter(
        (specie) => specie.id !== specieId
      )
    },
  },
}
</script>
