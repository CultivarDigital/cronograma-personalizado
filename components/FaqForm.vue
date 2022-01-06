<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{ on, attrs }">
      <v-btn
        v-if="faq"
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
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-toolbar color="primary" dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <span>Adicionar faq</span>
      </v-toolbar>
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div class="mb-6">
              <validation-provider
                v-slot="{ errors }"
                name="pergunta"
                rules="required"
              >
                <v-textarea
                  v-model="form.question"
                  label="Pergunta"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="resposta"
                rules="required"
              >
                <v-textarea
                  v-model="form.answer"
                  label="Resposta"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
            </div>
            <div class="text-right">
              <Save :invalid="invalid" :block="false" label="Salvar" />
            </div>
          </v-form>
        </ValidationObserver>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    faq: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      dialog: false,
      form: {
        question: '',
        answer: '',
      },
    }
  },
  created() {
    if (this.faq) {
      Object.keys(this.form).forEach((key) => {
        if (this.faq[key]) {
          this.form[key] = this.faq[key]
        }
      })
    }
  },
  methods: {
    save() {
      const form = { ...this.form }
      if (this.faq) {
        this.$axios.$patch('/v1/faqs/' + this.faq._id, form).then((faq) => {
          this.$notifier.success('Atualizado!')
          this.$emit('change', faq)
          this.dialog = false
        })
      } else {
        this.$axios.$post('/v1/faqs', form).then((faq) => {
          this.$notifier.success('Salvo!')
          this.dialog = false
          this.$emit('change', faq)
        })
      }
    },
  },
}
</script>
