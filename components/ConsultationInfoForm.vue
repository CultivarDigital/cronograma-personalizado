<template>
  <div class="pb-6">
    <v-card
      v-if="showTutorial"
      class="rounded-0 anamnese text-center primary--text"
    >
      <div class="text-right">
        <v-btn icon class="px-0" @click="showTutorial = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <h4 class="mb-4">Aprenda como fazer as fotos e vídeo.</h4>
      <p>
        <small>
          Assim a análise será perfeita e o seu Cronograma Personalizado também.
        </small>
      </p>
      <p>
        <small>
          <strong>
            Lembrando que as fotos precisam ser feitas com o cabelo lavado e
            seco naturalmente e sempre usar a iluminação natural (janelas, ao ar
            livre etc)
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
          Você está de frente para a fonte de iluminação, o cabelo consegue ser
          visto com detalhes.
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
    </v-card>
    <div v-else-if="!loading">
      <ValidationObserver v-slot="{ validate, invalid }">
        <v-form @submit.prevent="validate().then(save)">
          <div class="mb-6">
            <legend class="primary--text mb-2">
              <small>
                <strong v-if="disabled"> Comprovante do PIX: </strong>
                <strong v-else> Enviar comprovante do PIX </strong>
              </small>
            </legend>
            <div class="text-center">
              <a :href="apiURL + form.pix" target="_blank">
                <img
                  v-if="form.pix"
                  :src="apiURL + form.pix"
                  class="rounded picture mb-3"
                  style="max-width: 100%"
                />
              </a>
            </div>
            <UploadImage
              v-if="!disabled"
              prefix="consultation"
              button
              icon="mdi-paperclip"
              :label="'clique aqui para enviar'"
              class="mb-3"
              @input="(image) => (form.pix = image)"
            />
          </div>
          <hr class="mb-10" />
          <validation-provider
            v-slot="{ errors }"
            name="Quais produtos precisamos alterar?"
            rules="required"
          >
            <v-textarea
              v-model="form.products_to_change"
              :disabled="disabled"
              outlined
              label="Quais produtos precisamos alterar?"
              placeholder="Shampoo / Condicionador / Hidratação / Nutrição / Reconstrução / Leave-in / Reparador"
              :error-messages="errors"
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Como está seu cabelo?"
            rules="required"
          >
            <v-textarea
              v-model="form.hair_description"
              :disabled="disabled"
              outlined
              label="Como está seu cabelo?"
              :error-messages="errors"
            />
          </validation-provider>
          <div
            v-if="!disabled"
            style="background-color: rgba(123, 163, 162, 0.4)"
            class="white--text py-10 px-6 text-center my-6 rounded-lg"
          >
            <h2 class="text-h4 font-weight-bold mb-3" style="font-size: 34px">
              Atenção
            </h2>
            <p style="font-weight: 500; font-size: 14px">
              Para que a análise seja feita com precisão, precisamos que você
              veja o tutorial de como fazer as suas fotos de maneira correta.
            </p>
            <v-btn color="primary" @click="showTutorial = true">
              Ver tutorial
            </v-btn>
          </div>

          <div class="mb-6">
            <legend class="primary--text mb-2">
              <small>
                <strong v-if="disabled"> Fotos: </strong>
                <strong v-else>
                  Enviar
                  {{ form.images.length ? 'outra foto' : 'foto' }}:
                </strong>
              </small>
            </legend>
            <div class="text-center">
              <a
                v-for="image in form.images"
                :key="image"
                :href="apiURL + image"
                target="_blank"
              >
                <img
                  :src="apiURL + image"
                  class="rounded picture mb-3"
                  style="max-width: 100%"
                />
              </a>
            </div>
            <UploadImage
              v-if="!disabled"
              prefix="consultation"
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
            <legend class="primary--text mb-2">
              <small>
                <strong> Vídeo: </strong>
              </small>
            </legend>
            <div v-if="form.video" class="text-center">
              <video
                :src="apiURL + form.video"
                controls
                class="rounded picture mb-3"
                style="max-width: 100%"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <UploadVideo
              v-if="!disabled"
              prefix="consultation"
              button
              icon="mdi-paperclip"
              label="clique aqui para enviar o seu vídeo"
              @input="(video) => (form.video = video)"
            />
          </div>
          <Save
            v-if="!disabled && form.video && form.images.length && form.pix"
            :invalid="invalid"
            :loading="loading"
            label="Próximo"
          />
        </v-form>
      </ValidationObserver>
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      apiURL: process.env.API_URL,
      showTutorial: false,
      loading: false,
      form: {
        products_to_change: '', // Quais produtos precisamos alterar?
        hair_description: '', // Como está seu cabelo?
        pix: '', // Comprovante do PIX
        images: [], // Fotos
        video: '',
      },
    }
  },
  created() {
    if (this.value && this.value.consultation_info) {
      this.apiDataToForm(this.form, this.value.consultation_info)
    }
  },
  methods: {
    save() {
      this.loading = true
      const form = { ...this.form }
      this.$axios
        .$patch('/v1/consultations/' + this.value._id, {
          consultation_info: form,
        })
        .then((consultation) => {
          this.apiDataToForm(this.form, consultation.consultation_info)
          this.$emit('input', consultation)
          this.notify('Seus dados foram salvos!')
          this.loading = false
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
