<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{ on, attrs }">
      <v-card
        v-if="group"
        v-bind="attrs"
        style="background-color: rgba(123, 163, 162, 0.4); border-radius: 4px"
        class="px-3 py-6 primary--text text-center mb-3"
        elevation="0"
        v-on="on"
      >
        <h3>EDITAR TURMA</h3>
      </v-card>
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
        <span>Adicionar turma</span>
      </v-toolbar>
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div class="mb-6">
              <validation-provider
                v-slot="{ errors }"
                name="Nome da turma"
                rules="required"
              >
                <v-text-field
                  v-model="form.name"
                  label="Nome da turma"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
              <validation-provider
                v-if="!group"
                v-slot="{ errors }"
                name="Data de Início"
                rules="required"
              >
                <div class="text-center">
                  <h4 class="mb-3">Data de início da turma</h4>
                  <v-date-picker
                    v-model="form.startAt"
                    locale="pt-br"
                    label="Início"
                    :error-messages="errors"
                  />
                </div>
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
    group: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      dialog: false,
      form: {
        name: '',
        startAt: new Date().toISOString().substr(0, 7),
      },
    }
  },
  created() {
    if (this.group) {
      Object.keys(this.form).forEach((key) => {
        if (this.group[key]) {
          this.form[key] = this.group[key]
        }
      })
    }

    if (!this.form.name) {
      this.form.name = this.$moment(new Date()).tz('UTC').format('MMM-YYYY')
    }
  },
  methods: {
    save() {
      const form = { ...this.form }
      if (this.group) {
        this.$axios
          .$patch('/v1/groups/' + this.group._id, form)
          .then((group) => {
            this.$notifier.success('Atualizado!')
            this.$emit('change', group)
            this.dialog = false
          })
      } else {
        this.$axios.$post('/v1/groups', form).then((group) => {
          this.$notifier.success('Salvo!')
          this.dialog = false
          this.$emit('change', group)
        })
      }
    },
  },
}
</script>
