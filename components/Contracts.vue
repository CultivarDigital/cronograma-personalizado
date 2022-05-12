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
      <div v-if="contract">
        <h3>EDITAR CRONOGRAMA</h3>
        <v-container>
          <Contract v-model="contract" @close="contract = null" />
          <v-btn
            color="primary"
            x-large
            block
            class="mb-6"
            @click="saveContract"
          >
            Salvar
          </v-btn>
        </v-container>
      </div>
      <div v-else>
        <div class="font-weight-bold text-center primary--text py-6">
          {{
            contracts && contracts.length
              ? 'Está no ' + contracts.length + 'º cronograma'
              : 'Cliente sem contrato'
          }}
        </div>
        <div v-if="contracts && contracts.length">
          <h3>CONTRATO/RENOVAÇÕES</h3>
          <v-container>
            <DoubleTable
              :data="contractsDataset"
              clickable
              @click="openContract"
            />
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
                      <v-alert
                        v-if="invalid"
                        type="error"
                        class="d-flex justify-center"
                      >
                        Não existem turmas abertas
                      </v-alert>
                      <v-btn to="/turmas"> Gerenciar turmas </v-btn>
                    </div>
                  </div>
                </div>
                <div class="text-right">
                  <Save :invalid="invalid" :block="false" label="Salvar" />
                </div>
              </v-form>
            </ValidationObserver>
          </v-container>
        </div>
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
            value: index === 0 ? '1º Contrato' : index + 'º Renovação',
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
    saveContract() {
      const data = this.contract.data
      this.$axios
        .$patch('/v1/contracts/' + this.contract._id, { data })
        .then((savedContract) => {
          this.$notifier.success('Salvo!')
          this.contract = null
          this.$emit(
            'input',
            this.contracts.map((c) => {
              if (c._id === savedContract._id) {
                return savedContract
              }
              return c
            })
          )
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
      console.log('contract', contract)
      this.contract = contract.data
    },
  },
}
</script>
