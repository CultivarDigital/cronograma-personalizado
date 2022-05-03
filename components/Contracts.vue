<template>
  <v-dialog v-model="dialog" fullscreen>
    <template #activator="{ on, attrs }">
      <v-btn color="rgba(123, 163, 162, 1)" dark v-bind="attrs" v-on="on">
        {{
          contracts && contracts.length
            ? contracts.length + ' Contratos'
            : 'Cliente sem contrato'
        }}
      </v-btn>
    </template>
    <v-card class="template-form">
      <v-toolbar color="primary" dark>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <span>Gerenciar contratos</span>
      </v-toolbar>
      <div class="text-center mb-6">
        <div
          style="
            height: 80px;
            background-color: rgba(123, 163, 162, 0.4);
            margin-bottom: -40px;
          "
        ></div>
        <div class="mb-3 pa-1 rounded-circle white d-inline-block">
          <User size="80" :user="user" />
        </div>
        <br />
        {{ user.name }}
      </div>
      <v-divider color="#fefefe" />
      <div class="font-weight-bold text-center primary--text py-6">
        {{
          contracts && contracts.length
            ? 'Está no ' + contracts.length + 'º cronograma'
            : 'Cliente sem contrato'
        }}
      </div>
      <div v-if="contracts && contracts.length">
        <h3>CONTRATO/RENOVAÇÕES</h3>
        <DoubleTable :data="contractsDataset" />
      </div>
      <div v-else>
        <h3>CRIAR PRIMEIRO CONTRATO</h3>
        <v-container class="pt-6">
          <ValidationObserver v-slot="{ validate, invalid }">
            <v-form @submit.prevent="validate().then(save)">
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
              <div class="text-right">
                <Save :invalid="invalid" :block="false" label="Salvar" />
              </div>
            </v-form>
          </ValidationObserver>
        </v-container>
      </div>
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
    user: {
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
      dialog: true,
      form: {
        user: '',
        group: '',
        type: '',
        startAt: {
          type: Date,
          required: true,
        },
        status: '',
        data: {
          type: Object,
        },
      },
    }
  },
  computed: {
    contractsDataset() {
      if (this.contracts) {
        return {
          header: {
            label: 'Quando',
            value: 'Contrato',
          },
          items: this.contracts.map((contract, index) => ({
            label: this.$moment(contract.startAt).format('DD/MM/YYYY'),
            value: index === 0 ? '1º Contrato' : index + 'º Renovação',
          })),
        }
      }
      return null
    },
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
