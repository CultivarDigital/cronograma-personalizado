<template>
  <div>
    <v-tabs v-if="$auth.user" v-model="tab">
      <v-tab key="profile" dark> Dados do perfil </v-tab>
      <v-tab key="credentials"> Email e senha </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="pt-3">
      <v-tab-item key="profile">
        <v-container fluid>
          <ValidationObserver v-slot="{ validate, invalid }">
            <form @submit.prevent="validate().then(save)">
              <Upload
                v-model="form.picture"
                type="images"
                avatar
                label="Sua foto"
                prefix="profile"
                :filename="$auth.user.uid"
              />
              <validation-provider
                v-slot="{ errors }"
                name="nome"
                rules="required"
              >
                <v-text-field
                  v-model="form.name"
                  outlined
                  label="Seu nome"
                  :error-messages="errors"
                />
              </validation-provider>
              <v-select
                v-model="form.region"
                outlined
                label="Qual sua região?"
                :items="['Centro-oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul']"
                clearable
              />
              <v-textarea
                v-model="form.bio"
                outlined
                label="Conte um pouco sobre você"
              />
              <p class="text-center">
                <v-checkbox v-model="accept_terms">
                  <template #label>
                    <div><AcceptTerms /></div>
                  </template>
                </v-checkbox>
              </p>
              <Save v-if="accept_terms" :invalid="invalid" :loading="loading" />
              <v-alert v-else type="error" class="d-flex justify-center">
                Estar de acordo com os termos de uso e política de privacidade é
                necessário para usar esta plataforma
              </v-alert>
            </form>
          </ValidationObserver>
        </v-container>
      </v-tab-item>
      <v-tab-item key="credentials">
        <v-container fluid>
          <ValidationObserver v-slot="{ validate, invalid }">
            <v-text-field
              :value="$auth.user.email"
              disabled
              label="Seu email"
              outlined
            />
            <v-btn class="mb-6" @click="change_password = !change_password">
              ALTERAR SENHA
            </v-btn>
            <v-form
              v-if="change_password"
              @submit.prevent="validate().then(setPassword)"
            >
              <validation-provider
                v-slot="{ errors }"
                name="senha atual"
                rules="required|min:6"
              >
                <v-text-field
                  v-model="passwordForm.current_password"
                  label="Sua senha atual"
                  type="password"
                  :error-messages="errors"
                  outlined
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="senha"
                rules="required|min:6"
              >
                <v-text-field
                  v-model="passwordForm.password"
                  label="Crie uma nova senha"
                  type="password"
                  :error-messages="errors"
                  outlined
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="confirmação da senha"
                rules="required"
              >
                <v-text-field
                  v-model="passwordForm.password_confirmation"
                  label="Confirme sua nova senha"
                  type="password"
                  :error-messages="errors"
                  outlined
                />
              </validation-provider>
              <Save
                :invalid="invalid"
                :loading="loading"
                label="Salvar nova senha"
              />
            </v-form>
          </ValidationObserver>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
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
      user: null,
      tab: 'profile',
      loading: false,
      change_password: false,
      accept_terms: true,
      passwordForm: {
        current_password: null,
        password: null,
        password_confirmation: null,
      },
      form: {
        picture: null,
        name: '',
        region: null,
        bio: '',
      },
    }
  },
  created() {
    Object.keys(this.form).forEach((key) => {
      if (this.$auth.user[key]) {
        this.form[key] = this.$auth.user[key]
      }
    })
  },
  methods: {
    save() {
      this.loading = true
      this.$axios
        .$patch('/v1/users/' + this.$auth.user.id, this.form)
        .then((user) => {
          this.$auth.setUser(user)
          this.$notifier.success('Seu perfil foi atualizado!')
          this.$store.dispatch('hidePortal')
          this.loading = false
        })
        .catch((error) => {
          this.$notifier.apiError(error)
          this.loading = false
        })
    },
    setPassword() {
      if (
        this.passwordForm.password === this.passwordForm.password_confirmation
      ) {
        this.loading = true

        this.$firebase
          .setPassword(
            this.user,
            this.passwordForm.current_password,
            this.passwordForm.password
          )
          .then(() => {
            this.tab = 0
            this.loading = false
            this.$notifier.success('Sua senha foi atualizada!')
            this.$store.dispatch('hidePortal')
          })
          .catch((error) => {
            this.$notifier.firebaseError(error)
            this.loading = false
          })
      } else {
        this.$notifier.error('As senhas devem ser iguais')
      }
    },
  },
}
</script>
