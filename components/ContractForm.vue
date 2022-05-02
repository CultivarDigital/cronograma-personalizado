<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{ on, attrs }">
      <v-btn color="rgba(123, 163, 162, 1)" dark v-bind="attrs" v-on="on">
        Contratos
      </v-btn>
    </template>
    <v-card class="template-form">
      <v-toolbar color="primary" dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <span>Gerenciar contratos</span>
      </v-toolbar>
      <h3>Renovações</h3>
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div>
              <div class="ccp-options">
                <draggable
                  :list="ccp_options"
                  :group="{ name: 'cc-options', pull: 'clone', put: false }"
                >
                  <div
                    v-for="option in ccp_options"
                    :key="option.value"
                    class="ccp-option"
                  >
                    {{ option.value }}
                  </div>
                </draggable>
              </div>
              <div class="months">
                <div v-for="month in 4" :key="'month-' + month">
                  <h4 @click="toggleMonth(month)">Mês {{ month }}</h4>
                  <div
                    v-for="week in 4"
                    v-show="active_month === month"
                    :key="'week-' + week"
                    class="week"
                  >
                    <p>Semana {{ week }}</p>
                    <div>
                      <draggable
                        :list="form.data[month - 1][week - 1]"
                        group="cc-options"
                        class="week-input drop-zone"
                      >
                        <div
                          v-for="(option, index) in form.data[month - 1][
                            week - 1
                          ]"
                          :key="option.value + index"
                          class="ccp-option"
                          @click="removeItem(month, week, index)"
                        >
                          {{ option.value }}
                        </div>
                      </draggable>
                    </div>
                  </div>
                </div>
              </div>
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
    contract: {
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
        data: ccpData,
      },
    }
  },
  created() {
    if (this.contract) {
      Object.keys(this.form).forEach((key) => {
        if (this.contract[key]) {
          this.form[key] = this.contract[key]
        }
      })
    }
  },
  methods: {
    save() {
      const form = { ...this.form }
      if (this.contract) {
        this.$axios
          .$patch('/v1/contracts/' + this.contract._id, form)
          .then((contract) => {
            this.$notifier.success('Atualizado!')
            this.$emit('change', contract)
            this.dialog = false
          })
      } else {
        this.$axios.$post('/v1/contracts', form).then((contract) => {
          this.$notifier.success('Salvo!')
          this.dialog = false
          this.$emit('change', contract)
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
