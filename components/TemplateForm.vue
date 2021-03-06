<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{ on, attrs }">
      <v-btn
        v-if="template"
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
    <v-card class="template-form">
      <v-toolbar color="primary" dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <span>Gerenciar modelos</span>
      </v-toolbar>
      <h3 v-if="template">{{ template.name }}</h3>
      <h3 v-else>CRIAR NOVO</h3>
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div>
              <TemplateEditor v-model="form.data" />
            </div>
            <div>
              <hr class="mb-6" />
              <validation-provider
                v-slot="{ errors }"
                name="Nome do modelo"
                rules="required"
              >
                <v-text-field
                  v-model="form.name"
                  label="Nome do modelo"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
            </div>
            <div class="d-flex justify-space-between align-center">
              <Remove v-if="template" button @confirm="remove" />
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
    template: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    const ccpData = []
    for (const month in [...Array(4)]) {
      ccpData[month] = []
      for (const week in [...Array(4)]) {
        ccpData[month][week] = []
      }
    }

    return {
      active_month: 1,
      ccp_options: [
        {
          value: 'H',
          description: 'Hidratação',
        },
        {
          value: 'N',
          description: 'Nutrição',
        },
        {
          value: 'R',
          description: 'Reconstrução',
        },
        {
          value: 'U',
          description: 'Umectação',
        },
      ],
      dialog: false,
      form: {
        name: '',
        data: ccpData,
      },
    }
  },
  created() {
    if (this.template) {
      Object.keys(this.form).forEach((key) => {
        if (this.template[key]) {
          this.form[key] = this.template[key]
        }
      })
    }
  },
  methods: {
    save() {
      const form = { ...this.form }
      if (this.template) {
        this.$axios
          .$patch('/v1/templates/' + this.template._id, form)
          .then((template) => {
            this.$notifier.success('Atualizado!')
            this.$emit('change', template)
            this.dialog = false
          })
      } else {
        this.$axios.$post('/v1/templates', form).then((template) => {
          this.$notifier.success('Salvo!')
          this.dialog = false
          this.$emit('change', template)
        })
      }
    },
    remove() {
      if (this.template) {
        this.$axios.$delete('/v1/templates/' + this.template._id).then(() => {
          this.$notifier.success('Removido!')
          this.$emit('delete')
          this.dialog = false
        })
      }
    },
    toggleMonth(month) {
      if (this.active_month === month) {
        this.active_month = null
      } else {
        this.active_month = month
      }
    },
    removeItem(month, week, index) {
      this.form.data[month - 1][week - 1].splice(index, 1)
    },
  },
}
</script>
