<template>
  <div v-if="contract">
    <v-dialog :value="true" fullscreen>
      <v-card class="template-form">
        <v-toolbar color="primary" dark>
          <v-btn icon dark @click="contract = null">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span>Detalhes do contrato/renovação</span>
        </v-toolbar>
        <Contract v-model="contract" @close="contract = null" />
      </v-card>
    </v-dialog>
  </div>
  <div v-else>
    <div
      v-if="contracts && contracts.length"
      class="font-weight-bold text-center primary--text py-8"
    >
      Está no
      <div
        class="d-inline-block secondary--text px-6 py-1 rounded"
        style="border: 1px solid #ccc"
      >
        {{ contracts.length }}º
      </div>
      cronograma
    </div>
    <div v-else class="font-weight-bold text-center primary--text py-8">
      Cliente sem contrato
    </div>
    <div v-if="contracts && contracts.length">
      <h3>RENOVAÇÕES</h3>
      <v-container>
        <DoubleTable :data="contractsDataset" clickable @click="openContract" />
      </v-container>
    </div>
    <div v-else>
      <h3>CRIAR PRIMEIRO CONTRATO</h3>
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div>
              <div v-if="openGroups">
                <div v-if="openGroups.length > 0">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Turma"
                    rules="required"
                  >
                    <v-select
                      v-model="form.group"
                      label="Selecione a turma"
                      outlined
                      :items="openGroups"
                      item-text="name"
                      item-value="_id"
                      :error-messages="errors"
                    >
                      <template slot="selection" slot-scope="data">
                        <div class="py-3 primary--text">
                          Turma: <strong>{{ data.item.name }}</strong>
                          <br />
                          <small>
                            Começa em:
                            <strong>
                              {{
                                $moment(data.item.startAt)
                                  .tz('UTC')
                                  .format('DD/MM/YYYY')
                              }}
                            </strong>
                          </small>
                        </div>
                      </template>
                      <template slot="item" slot-scope="data">
                        <div class="py-3 primary--text">
                          Turma: <strong>{{ data.item.name }}</strong>
                          <br />
                          <small>
                            Começa em:
                            <strong>
                              {{
                                $moment(data.item.startAt)
                                  .tz('UTC')
                                  .format('DD/MM/YYYY')
                              }}
                            </strong>
                          </small>
                        </div>
                      </template>
                    </v-select>
                  </validation-provider>
                </div>
                <div v-if="openGroups.length == 0">
                  <v-alert color="error" class="d-flex justify-center" dark>
                    Não existem turmas abertas
                  </v-alert>
                  <v-btn to="/turmas" color="primary" large block>
                    Gerenciar turmas
                  </v-btn>
                </div>
              </div>
            </div>
            <div v-if="form.group" class="text-right">
              <Save :invalid="invalid" :block="false" label="Salvar" />
            </div>
          </v-form>
        </ValidationObserver>
      </v-container>
    </div>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    value: {
      type: Array,
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
      dialog: false,
      openGroups: null,
      contracts: this.value,
      contract: null,
      form: {
        user: this.user.id,
        group: '',
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
            label: this.$moment(contract.startAt)
              .tz('UTC')
              .format('DD/MM/YYYY'),
            value: index === 0 ? '1º Cronograma' : index + 'º Renovação',
            data: contract,
          })),
        }
      }
      return null
    },
  },
  created() {
    if (this.contracts.length === 0) {
      this.loadOpenGroups()
    }
  },
  methods: {
    async loadOpenGroups() {
      this.openGroups = await this.$axios.$get('/v1/groups/open-groups')
    },
    save() {
      const form = { ...this.form }
      this.$axios.$post('/v1/contracts', form).then((contract) => {
        this.$notifier.success('Salvo!')
        this.dialog = false
        this.$emit('input', [contract, ...this.contracts])
      })
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
    openContract(contract) {
      this.contract = contract.data
    },
  },
}
</script>
