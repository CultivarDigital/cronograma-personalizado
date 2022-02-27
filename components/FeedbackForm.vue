<template>
  <v-container>
    <ValidationObserver v-slot="{ validate, invalid }">
      <v-form @submit.prevent="validate().then(save)">
        <div style="color: #ee605e" class="text-center">
          <h3 class="text-h5 font-weight-bold">Seu feedback é precioso!</h3>
          <p class="mb-8">
            O que podemos fazer para melhorar a sua experiência na nossa
            plataforma?
          </p>
        </div>
        <validation-provider
          v-slot="{ errors }"
          name="assunto"
          rules="required"
        >
          <v-text-field
            v-model="form.subject"
            outlined
            label="Assunto"
            :error-messages="errors"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="mensagem"
          rules="required"
        >
          <v-textarea
            v-model="form.message"
            outlined
            label="Sua mensagem"
            placeholder="Queremos te ouvir!"
            :error-messages="errors"
          />
        </validation-provider>
        <Save :invalid="invalid" :loading="loading" label="Enviar feedback" />
      </v-form>
    </ValidationObserver>
  </v-container>
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
      loading: false,
      form: {
        subject: '',
        message: '',
      },
    }
  },
  methods: {
    save() {
      this.loading = true
      this.$axios
        .$post('/v1/feedbacks', this.form)
        .then((feedback) => {
          this.success(feedback)
        })
        .catch(this.error)
    },
    error(error) {
      this.$notifier.firebaseError(error)
      this.loading = false
    },
    success(feedback) {
      this.loading = false
      this.$notifier.success(
        'Enviado com sucesso! Agradecemos pelo seu feedback e em breve responderemos através do seu email ou aqui mesmo nas notificações.'
      )
      this.$emit('saved', feedback)
    },
  },
}
</script>
