<template>
  <div
    v-touch="{
      left: () => next(),
      right: () => prev(),
    }"
    class="py-6"
  >
    <v-card
      v-if="showTutorial"
      class="rounded-0 anamnese text-center primary--text"
    >
      <v-container>
        <div class="text-right">
          <v-btn icon class="px-0" @click="showTutorial = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <h4 class="mb-4">Aprenda como fazer as fotos e vídeo.</h4>
        <p>
          <small>
            Assim a análise será perfeita e o seu Cronograma Personalizado
            também.
          </small>
        </p>
        <p>
          <small>
            <strong>
              Lembrando que as fotos precisam ser feitas com o cabelo lavado e
              seco naturalmente e sempre usar a iluminação natural (janelas, ao
              ar livre etc)
            </strong>
          </small>
        </p>
        <img
          class="picture mb-3"
          src="~/assets/img/tutorial-nao.png"
          alt="Como não fazer"
        />
        <h4 class="mb-4">Iluminação incorreta!</h4>
        <p>
          <small>
            As fotos são contra a luz, o cabelo está escuro e não é possível
            enxergar o fio com clareza.
          </small>
        </p>
        <img
          class="picture mb-3"
          src="~/assets/img/tutorial-sim.png"
          alt="Como tirar suas fotos"
        />
        <h4 class="mb-4">Iluminação correta!</h4>
        <p>
          <small>
            Você está de frente para a fonte de iluminação, o cabelo consegue
            ser visto com detalhes.
          </small>
        </p>
        <h4 class="mb-4">O vídeo correto:</h4>
        <p>
          <small>
            Precisa aplicar a mesma lógica da iluminação das fotos e mostrar o
            peso e as partes internas do cabelo, não precisa falar nada apenas
            mostrar o cabelo como no vídeo de exemplo.
          </small>
        </p>
        <v-btn color="primary" class="mb-6" @click="showTutorial = false">
          Sim, entendi como fazer!
        </v-btn>
      </v-container>
    </v-card>
    <div v-else-if="!loading">
      <div class="text-center">
        <div
          style="
            height: 80px;
            background-color: rgba(123, 163, 162, 0.4);
            margin-bottom: -40px;
          "
        ></div>
        <div class="mb-3 pa-1 rounded-circle white d-inline-block">
          <User size="80" :user="profile" />
        </div>
        <br />

        <v-container>
          <UploadImage
            v-if="$auth.user.id === profile.id"
            button
            label="Enviar foto"
            prefix="profile"
            @input="updateImage"
          />
        </v-container>
      </div>
      <v-container>
        <v-tabs v-model="tab">
          <v-tab style="font-size: 13px; color: #262626">
            <v-chip small class="mr-3 rounded-lg">1</v-chip> Pessoal
          </v-tab>
          <v-tab
            v-if="profile.role !== 'admin'"
            style="font-size: 13px; color: #262626"
          >
            <v-chip small class="mr-3 rounded-lg">2</v-chip> Histórico
          </v-tab>
          <v-tab
            v-if="profile.role !== 'admin'"
            style="font-size: 13px; color: #262626"
          >
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
            <ValidationObserver v-slot="{ validate, invalid }">
              <v-form @submit.prevent="validate().then(save)">
                <validation-provider
                  v-slot="{ errors }"
                  name="Você tem produtos (cheios ou mais da metade) que deseja usar no Cronograma?"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.reuse_products"
                    outlined
                    label="Você tem produtos (cheios ou mais da metade) que deseja usar no Cronograma?"
                    :error-messages="errors"
                  />
                  <div class="text-center">
                    <img
                      v-if="form.reuse_products_image"
                      :src="apiURL + form.reuse_products_image"
                      class="rounded picture mb-3"
                    />
                  </div>
                  <UploadImage
                    prefix="profile"
                    button
                    icon="mdi-paperclip"
                    label="Envie uma foto com todos os produtos"
                    @input="(image) => (form.reuse_products_image = image)"
                  />
                </validation-provider>
                <div
                  style="background-color: rgba(123, 163, 162, 0.4)"
                  class="white--text py-10 px-6 text-center my-6 rounded-lg"
                >
                  <h2
                    class="text-h4 font-weight-bold mb-3"
                    style="font-size: 34px"
                  >
                    Atenção
                  </h2>
                  <p style="font-weight: 500; font-size: 14px">
                    Para que a análise seja feita com precisão, precisamos que
                    você veja o tutorial de como fazer as suas fotos de maneira
                    correta.
                  </p>
                  <v-btn color="primary" @click="showTutorial = true">
                    Ver tutorial
                  </v-btn>
                </div>
                <div class="mb-6">
                  <div class="text-center">
                    <img
                      v-for="image in form.images"
                      :key="image"
                      :src="apiURL + image"
                      class="rounded picture mb-3"
                    />
                  </div>
                  <legend class="primary--text mb-2">
                    <small>
                      <strong>
                        Enviar
                        {{ form.images.length ? 'outra foto' : 'foto' }}:
                      </strong>
                    </small>
                  </legend>
                  <UploadImage
                    prefix="profile"
                    button
                    icon="mdi-paperclip"
                    :label="
                      'clique aqui para enviar ' +
                      (form.images.length ? 'outra foto' : 'sua foto')
                    "
                    class="mb-3"
                    @input="(image) => form.images.push(image)"
                  />
                </div>
                <div class="mb-6">
                  <div v-if="form.video" class="text-center">
                    <video
                      :src="apiURL + form.video"
                      controls
                      class="rounded picture mb-3"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <legend class="primary--text mb-2">
                    <small>
                      <strong> Vídeo: </strong>
                    </small>
                  </legend>
                  <UploadVideo
                    prefix="profile"
                    button
                    icon="mdi-paperclip"
                    label="clique aqui para enviar o seu vídeo"
                    @input="(video) => (form.video = video)"
                  />
                </div>
                <Save :invalid="invalid" :loading="loading" label="Próximo" />
              </v-form>
            </ValidationObserver>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </div>
    <div v-if="loading" class="text-center">
      <v-progress-circular color="secondary" indeterminate size="20" />
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
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      apiURL: process.env.API_URL,
      tab: 0,
      showTutorial: false,
      greeted: true,
      loading: false,
      form: {
        group: null,
        picture: null,
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
    profile() {
      return this.value || this.$auth.user
    },
  },
  created() {
    this.apiDataToForm(this.form, this.profile)
  },
  methods: {
    prev() {
      if (this.tab > 0) {
        this.tab = this.tab - 1
      }
    },
    next() {
      if (this.tab < 1) {
        this.tab = this.tab + 1
      }
    },
    save(changeTab = true) {
      this.loading = true
      const form = { ...this.form }
      if (this.tab === 2) {
        form.status = 'registered'
      }
      this.$axios
        .$patch('/v1/users/' + this.profile.id, form)
        .then((user) => {
          this.apiDataToForm(this.form, user)
          if (!this.value) {
            this.$auth.setUser(user)
          }
          this.$emit('input', user)
          this.loading = false
          if (changeTab) {
            this.tab += 1
          }
        })
        .catch((error) => {
          this.$notifier.apiError(error)
          this.loading = false
        })
    },
    updateImage(image) {
      this.form.picture = image
      this.save(false)
    },
  },
}
</script>
<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
.anamnese {
  min-height: 100vh;
  .upload-image,
  .upload-video {
    .v-btn {
      letter-spacing: 0 !important;
      font-size: 12px;
      padding-top: 25px;
      padding-bottom: 25px;
      width: 100%;
    }
  }
  .picture,
  .video {
    max-width: 100%;
  }
}
</style>
