<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{ on, attrs }">
      <div class="text-center">
        <v-btn dark v-bind="attrs" color="primary" large v-on="on">
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
                label="Qual o tipo dessa conversa?"
                outlined
                multiple
                chips
                hide-details="auto"
                small-chips
              ></v-combobox>
            </div>
            <div class="text-right">
              <Save
                :invalid="invalid"
                :block="false"
                label="Iniciar conversa"
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
  data() {
    return {
      categories,
      dialog: false,
      tags: [],
      form: {
        subject: '',
        tags: [],
        message: '',
      },
    }
  },
  created() {
    this.loadTags()
  },
  methods: {
    async loadTags() {
      this.tags = await this.$axios.$get('/v1/conversations/tags')
    },
    save() {
      this.$axios.$post('/v1/conversations', this.form).then((conversation) => {
        this.$notifier.success('Conversa iniciada!')
        this.$router.replace('/ferramentas/comunidade/' + conversation._id)
        this.$emit('change', conversation)
        this.form.message = null
      })
    },
  },
}
</script>
