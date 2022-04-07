<template>
  <v-dialog :value="true" app fullscreen>
    <Welcome v-if="!greeted" @finish="setGreeted" />
    <v-card
      v-else
      v-touch="{
        left: () => next(),
        right: () => prev(),
      }"
      class="rounded-0"
    >
      <div
        style="background-color: rgba(123, 163, 162, 0.4)"
        class="white--text py-10 px-6 text-center"
      >
        <h2 class="text-h4 font-weight-bold mb-3" style="font-size: 34px">
          Seja bem vinda!
        </h2>
        <p style="font-weight: 500; font-size: 14px" class="mb-0">
          Essa é a sua ficha de anamnese, a partir dela teremos as informações
          necessárias para iniciar o seu Cronograma Capilar Personalizado.
        </p>
      </div>

      <v-container class="px-6 py-6">
        <v-tabs v-model="tab">
          <v-tab style="font-size: 13px; color: #262626">
            <v-chip small class="mr-3 rounded-lg">1</v-chip> Pessoal
          </v-tab>
          <v-tab style="font-size: 13px; color: #262626">
            <v-chip small class="mr-3 rounded-lg">2</v-chip> Histórico
          </v-tab>
          <v-tab style="font-size: 13px; color: #262626">
            <v-chip small class="mr-3 rounded-lg">3</v-chip> Imagens
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="pt-8">
          <v-tab-item>
            <ValidationObserver v-slot="{ validate, invalid }">
              <v-form @submit.prevent="validate().then(save)">
                <validation-provider
                  v-slot="{ errors }"
                  name="Nome"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.name"
                    outlined
                    label="Nome"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Data de nascimento"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.birth"
                    type="date"
                    outlined
                    label="Data de nascimento"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="CPF"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.cpf"
                    v-mask="['###.###.###-##']"
                    outlined
                    label="CPF"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="CEP"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.cep"
                    v-mask="['#####-###']"
                    outlined
                    label="CEP"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Endereço"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.address"
                    outlined
                    label="Endereço"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Bairro"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.neighborhood"
                    outlined
                    label="Bairro"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Cidade"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.city"
                    outlined
                    label="Cidade"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Estado"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.state"
                    outlined
                    label="Estado"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Instagram"
                  rules="required"
                >
                  <v-text-field
                    v-model="form.instagram"
                    outlined
                    label="Instagram"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Como nos conheceu?"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.how_know"
                    outlined
                    label="Como nos conheceu?"
                    :error-messages="errors"
                  />
                </validation-provider>
                <Save :invalid="invalid" :loading="loading" label="Próximo" />
              </v-form>
            </ValidationObserver>
          </v-tab-item>
          <v-tab-item>
            <ValidationObserver v-slot="{ validate, invalid }">
              <v-form @submit.prevent="validate().then(save)">
                <validation-provider
                  v-slot="{ errors }"
                  name="Qual a sua expectativa com o Cronograma?"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.expectations"
                    outlined
                    label="Qual a sua expectativa com o Cronograma?"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Já aconteceu algo no seu cabelo que foi muito marcante?"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.traumas"
                    outlined
                    label="Já aconteceu algo no seu cabelo que foi muito marcante?"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Qual sua principal queixa capilar?"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.complaints"
                    outlined
                    label="Qual sua principal queixa capilar?"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Já realizou algum tratamento químico? Se sim, qual/quais?"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.previous_treatments"
                    outlined
                    label="Já realizou algum tratamento químico? Se sim, qual/quais?"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Você considera seu couro cabeludo"
                  rules="required"
                >
                  <v-radio-group
                    v-model="form.scalp"
                    outlined
                    label="Você considera seu couro cabeludo"
                    :error-messages="errors"
                  >
                    <v-radio
                      v-for="option in ['Oleoso', 'Seco']"
                      :key="option"
                      :label="option"
                      :value="option"
                    />
                  </v-radio-group>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Você considera seu cabelo"
                  rules="required"
                >
                  <v-radio-group
                    v-model="form.hair"
                    outlined
                    label="Você considera seu cabelo"
                    :error-messages="errors"
                  >
                    <v-radio
                      v-for="option in [
                        'Seco',
                        'Muito seco',
                        'Normal',
                        'Fino',
                        'Poroso',
                      ]"
                      :key="option"
                      :label="option"
                      :value="option"
                    />
                  </v-radio-group>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Seu cabelo é descolorido?"
                  rules="required"
                >
                  <v-radio-group
                    v-model="form.discolored"
                    outlined
                    label="Seu cabelo é descolorido?"
                    :error-messages="errors"
                  >
                    <v-radio label="Sim" :value="true" />
                    <v-radio label="Não" :value="false" />
                  </v-radio-group>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Você sofre com caspas?"
                  rules="required"
                >
                  <v-radio-group
                    v-model="form.dandruff"
                    outlined
                    label="Você sofre com caspas?"
                    :error-messages="errors"
                  >
                    <v-radio label="Sim" :value="true" />
                    <v-radio label="Não" :value="false" />
                  </v-radio-group>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Você pinta a raiz mensalmente?"
                  rules="required"
                >
                  <v-radio-group
                    v-model="form.paint_monthly"
                    outlined
                    label="Você pinta a raiz mensalmente?"
                    :error-messages="errors"
                  >
                    <v-radio label="Sim" :value="true" />
                    <v-radio label="Não" :value="false" />
                  </v-radio-group>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Quantas vezes lava o cabelo por semana?"
                  rules="required"
                >
                  <legend>Quantas vezes lava o cabelo por semana?</legend>
                  <v-slider
                    v-model="form.washes_per_week"
                    min="1"
                    max="7"
                    outlined
                    :error-messages="errors"
                    thumb-label="always"
                    thumb-size="20"
                    persistent-hint
                    hint="Mesmo que varie, selecione a média"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Qual a sua disponibilidade de investimento para os produtos do seu Cronograma?"
                  rules="required"
                >
                  <v-radio-group
                    v-model="form.investment_availability"
                    outlined
                    label="Qual a sua disponibilidade de investimento para os produtos do seu Cronograma?"
                    :error-messages="errors"
                  >
                    <v-radio
                      v-for="option in [
                        'Alto',
                        'Médio (até R$1200)',
                        'Baixo (até R$700)',
                      ]"
                      :key="option"
                      :label="option"
                      :value="option"
                    />
                  </v-radio-group>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Você tem interesse em utilizar óleos essenciais no Cronograma?"
                  rules="required"
                >
                  <v-radio-group
                    v-model="form.essential_oils"
                    outlined
                    label="Você tem interesse em utilizar óleos essenciais no Cronograma?"
                    :error-messages="errors"
                  >
                    <v-radio label="Sim" :value="true" />
                    <v-radio label="Não" :value="false" />
                  </v-radio-group>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Qual a sua maior dificuldade com tratamentos capilares?"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.difficulties"
                    outlined
                    label="Qual a sua maior dificuldade com tratamentos capilares?"
                    :error-messages="errors"
                  />
                </validation-provider>
                <Save :invalid="invalid" :loading="loading" label="Próximo" />
              </v-form>
            </ValidationObserver>
          </v-tab-item>
          <v-tab-item>
            <v-card flat> Informações deste mês </v-card>
          </v-tab-item>
        </v-tabs-items>
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
  data() {
    return {
      tab: 1,
      greeted: true,
      loading: false,
      form: {
        name: '', // Nome completo
        birth: null, // Data de nascimento
        cpf: '', // CPF
        cep: '', // CEP
        address: '', // Endereço
        neighborhood: '', // Bairro
        city: '', // Cidade
        state: '', // Estado

        instagram: '', // Instagram

        how_know: '', // Como nos conheceu?
        expectations: '', // Qual a sua expectativa com o Cronograma?
        traumas: '', // Já aconteceu algo no seu cabelo que foi muito marcante?
        complaints: '', // Qual sua principal queixa capilar?
        previous_treatments: '', // Já realizou algum tratamento químico? Se sim, qual/quais?
        scalp: '', // Você considera seu couro cabeludo:
        hair: '', // Você considera seu cabelo:
        discolored: false, // Seu cabelo é descolorido?
        dandruff: false, // Você sofre com caspas?
        paint_monthly: false, // Você pinta a raiz mensalmente?

        washes_per_week: 7, // Quantas vezes lava o cabelo por semana?
        investment_availability: '', // Qual a sua disponibilidade de investimento para os produtos?
        essential_oils: false, // Você tem interesse em utilizar óleos essenciais no Cronograma?
        difficulties: '', // Qual a sua maior dificuldade com tratamentos capilares?
        reuse_products: '', // Você tem produtos (cheios ou mais da metade) que deseja usar?

        reuse_products_image: '', // Envie uma foto com todos os produtos

        images: [], // Fotos
        video: '',
      },
    }
  },
  computed: {
    showDrawer() {
      return this.$store.state.showDrawer
    },
  },
  created() {
    this.apiDataToForm(this.form, this.$auth.user)
  },
  methods: {
    setGreeted() {
      this.greeted = true
    },
    prev() {
      if (this.tab > 0) {
        this.tab = this.tab - 1
      }
    },
    next() {
      if (this.tab < 1) {
        this.tab = this.tab + 1
      } else {
        this.setGreeted()
      }
    },
    save() {
      const form = { ...this.form }
      this.$axios
        .$patch('/v1/users/' + this.$auth.user.id, form)
        .then((user) => {
          this.$auth.setUser(user)
          this.loading = false
          this.tab += 1
        })
        .catch((error) => {
          this.$notifier.apiError(error)
          this.loading = false
        })
    },
  },
}
</script>
<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>
