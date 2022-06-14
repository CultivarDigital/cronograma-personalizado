<template>
  <div class="py-6">
    <div v-if="loading" class="text-center">
      <v-progress-circular color="secondary" indeterminate size="20" />
    </div>
    <div v-else>
      <div class="text-center">
        <v-container>
          <UploadImage
            button
            label="Enviar outra foto"
            prefix="profile"
            @input="updateImage"
          />
        </v-container>
      </div>
      <v-container>
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
              name="Telefone"
              rules="required"
            >
              <v-text-field
                v-model="form.phone"
                v-mask="['(##) ####-####', '(##) #####-####']"
                outlined
                label="Telefone"
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
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      apiURL: process.env.API_URL,
      loading: false,
      form: {
        group: null,
        picture: null,
        name: '', // Nome completo
        phone: '', // Telefone
        birth: null, // Data de nascimento
        cpf: '', // CPF
        cep: '', // CEP
        address: '', // Endereço
        neighborhood: '', // Bairro
        city: '', // Cidade
        state: '', // Estado

        instagram: '', // Instagram
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
    save() {
      this.loading = true
      const form = { ...this.form }
      this.$axios
        .$patch('/v1/users/' + this.profile.id, form)
        .then((user) => {
          this.apiDataToForm(this.form, user)
          if (!this.value) {
            this.$auth.setUser(user)
          }
          this.$emit('input', user)
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
