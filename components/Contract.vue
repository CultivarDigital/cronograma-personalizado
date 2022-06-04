<template>
  <div>
    <v-container class="pt-10 mb-3">
      <v-alert
        v-if="contract.status === 'waiting'"
        color="error"
        dark
        class="mb-10"
      >
        Este contrato inicia em
        <strong>{{
          $moment(contract.startAt).tz('UTC').format('DD/MM/YYYY')
        }}</strong>
      </v-alert>
      <v-alert
        v-if="contract.status === 'finished'"
        color="error"
        dark
        class="mb-10"
      >
        Este contrato finalizou em
        <strong>{{
          $moment(contract.startAt)
            .tz('UTC')
            .add(120, 'days')
            .format('DD/MM/YYYY')
        }}</strong>
      </v-alert>
      <v-row>
        <v-col cols="6">
          <v-text-field
            color="primary"
            label="Início CCP"
            :value="$moment(contract.startAt).tz('UTC').format('DD/MM/YYYY')"
            outlined
            hide-details="auto"
            disabled
            prepend-icon="mdi-calendar"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            color="primary"
            label="Finalização CCP"
            :value="
              $moment(contract.startAt)
                .tz('UTC')
                .add(120, 'days')
                .format('DD/MM/YYYY')
            "
            outlined
            hide-details="auto"
            disabled
            prepend-icon="mdi-calendar"
          />
        </v-col>
      </v-row>
    </v-container>
    <div v-if="contract.status !== 'waiting'">
      <h3>CRONOGRAMA</h3>
      <div
        v-if="contract.contract_type === 'new'"
        class="text-center mb-5 pt-3"
      >
        <AnamneseDisplay :value="contract" />
      </div>

      <v-container>
        <TemplateEditor v-model="contract.data" @input="change" />
        <v-btn
          v-if="contract.status === 'active'"
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
    <div v-if="contract.status === 'active'">
      <h3>CRIAR NOVO MODELO</h3>
      <v-container>
        <div class="mb-6">
          <v-text-field
            v-model="new_template"
            color="primary"
            label="Salvar como modelo"
            placeholder="Nome do novo modelo..."
            outlined
            hide-details="auto"
            append-icon="mdi-check-circle-outline"
          />
          <v-btn
            v-if="new_template"
            color="primary"
            x-large
            block
            class="mb-6 mt-3"
            @click="saveNewTemplate"
          >
            Salvar novo modelo
          </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      new_template: null,
      contract: { ...this.value },
    }
  },
  methods: {
    saveContract() {
      const data = this.contract.data
      this.$axios
        .$patch('/v1/contracts/' + this.contract._id, { data })
        .then((savedContract) => {
          this.$notifier.success('Salvo!')
          this.contract = savedContract
        })
    },
    saveNewTemplate() {
      const data = this.contract.data
      this.$axios
        .$post('/v1/templates', { name: this.new_template, data })
        .then((template) => {
          this.$notifier.success('Salvo!')
          this.new_template = null
        })
      this.$axios
        .$patch('/v1/contracts/' + this.contract._id, { data })
        .then((savedContract) => {
          this.$notifier.success('Salvo!')
          this.contract = savedContract
        })
    },
    change() {
      this.$emit('input', this.contract)
    },
  },
}
</script>
