<template>
  <div>
    <TopNavigation active="Meus dados" />
    <v-tabs v-if="$auth.user" v-model="tab">
      <v-tab key="profile" dark> Dados do perfil </v-tab>
      <v-tab key="credentials"> Email e senha </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="pt-3">
      <v-tab-item key="profile">
        <v-container fluid>
          <ValidationObserver v-slot="{ validate, invalid }">
            <form @submit.prevent="validate().then(save)">
              <div class="text-center mb-6">
                <v-avatar size="64" class="avatar-upload mb-3">
                  <v-img v-if="picture" :src="picture" size="64" />
                  <v-icon v-else dark color="primary" size="32"
                    >mdi-account</v-icon
                  >
                </v-avatar>
                <br />
                <UploadImage prefix="profile" button @input="addImage" />
              </div>
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
              <!-- <v-select
                v-model="form.region"
                outlined
                label="Qual sua região?"
                :items="['Centro-oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul']"
                clearable
              /> -->
              <v-select
                v-if="estados"
                v-model="form.uf"
                outlined
                label="Qual seu estado?"
                :items="estados"
                item-text="uf"
                item-value="uf"
                clearable
                @input="setRegion"
              />
              <v-select
                v-if="municipios"
                v-model="form.city"
                outlined
                label="Qual sua cidade?"
                :items="municipios"
                item-text="nome"
                item-value="nome"
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
import municipios from '@/data/municipios.json'
import estados from '@/data/estados.json'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      estados: estados.sort((a, b) => {
        return a.uf.localeCompare(b.uf)
      }),
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
        uf: null,
        city: null,
      },
    }
  },
  computed: {
    municipios() {
      if (this.form.uf) {
        const uf = estados.find((estado) => estado.uf === this.form.uf)
        if (uf) {
          return municipios
            .filter((municipio) => municipio.codigo_uf === uf.codigo_uf)
            .sort((a, b) => {
              return a.nome.localeCompare(b.nome)
            })
        }
      }
      return null
    },
    picture() {
      if (this.form.picture) {
        if (this.form.picture.startsWith('http')) {
          return this.form.picture
        } else {
          return process.env.API_URL + this.form.picture
        }
      }
      return null
    },
  },
  created() {
    Object.keys(this.form).forEach((key) => {
      if (this.$auth.user[key]) {
        this.form[key] = this.$auth.user[key]
      }
    })
  },
  methods: {
    addImage(image) {
      this.form.picture = image
      this.save(false)
    },
    setRegion() {
      if (this.form.uf) {
        const uf = estados.find((estado) => estado.uf === this.form.uf)
        this.form.region = uf.regiao
      }
    },
    save(closeOnSave = true) {
      this.loading = true
      this.$axios
        .$patch('/v1/users/' + this.$auth.user.id, this.form)
        .then((user) => {
          this.$auth.setUser(user)
          this.loading = false
          if (closeOnSave) {
            this.$notifier.success('Seu perfil foi atualizado!')
            this.$router.push('/dashboard')
          }
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
            this.$router.push('/dashboard')
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
