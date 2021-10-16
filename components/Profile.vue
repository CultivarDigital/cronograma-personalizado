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
                v-model="form.photoURL"
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
                  v-model="form.displayName"
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
              />
              <v-textarea
                v-model="form.bio"
                outlined
                label="Conte um pouco sobre você"
              />
              <v-btn
                type="submit"
                color="success"
                block
                :disabled="invalid || loading"
              >
                <v-progress-circular
                  v-if="loading"
                  color="black"
                  indeterminate
                  size="20"
                />
                <span v-else>SALVAR</span>
              </v-btn>
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
              <v-btn
                color="success"
                type="submit"
                block
                :disabled="invalid || loading"
              >
                <v-progress-circular
                  v-if="loading"
                  color="black"
                  indeterminate
                  size="20"
                />
                <span v-else>SALVAR NOVA SENHA</span>
              </v-btn>
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
      passwordForm: {
        current_password: null,
        password: null,
        password_confirmation: null,
      },
      form: {
        photoURL: null,
        displayName: '',
        region: null,
        bio: '',
      },
    }
  },
  created() {
    this.user = this.$firebase.getUser()
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
        .$put('/v1/users/update', this.form)
        .then(() => {
          this.$notifier.success('Seu perfil foi atualizado!')
          this.$store.dispatch('hidePortal')
          this.loading = false
        })
        .catch((error) => {
          this.$notifier.firebaseError(error)
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
            this.$auth.user.email,
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
