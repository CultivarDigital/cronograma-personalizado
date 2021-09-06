<template>
  <b-tabs v-model="tab">
    <b-tab title="Dados do perfil">
      <ValidationObserver v-slot="{ validate, invalid }">
        <form @submit.prevent="validate().then(save)">
          <Upload
            v-model="form.photoURL"
            type="images"
            avatar
            label="Sua foto"
            prefix="avatar"
          />
          <b-form-group label="Seu nome">
            <validation-provider
              v-slot="{ errors }"
              name="nome"
              rules="required"
            >
              <b-form-input v-model="form.displayName" />
              <Error :list="errors" />
            </validation-provider>
          </b-form-group>
          <b-form-group label="Qual sua região?">
            <b-form-select
              v-model="form.region"
              :options="['Centro-oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul']"
            />
          </b-form-group>
          <b-form-group label="Conte um pouco sobre você">
            <b-form-textarea v-model="form.bio" />
          </b-form-group>
          <button
            type="submit"
            class="btn btn-primary btn-lg btn-block"
            :disabled="invalid || loading"
          >
            <b-spinner v-if="loading" small />
            <span v-else>SALVAR</span>
          </button>
        </form>
      </ValidationObserver>
    </b-tab>
    <b-tab title="Email e senha">
      <ValidationObserver v-slot="{ validate, invalid }">
        <b-form-group label="Seu email">
          <b-form-input :value="authUser.email" disabled />
        </b-form-group>
        <b-btn class="mb-3" @click="change_password = !change_password">
          <b-icon-lock /> ALTERAR SENHA
        </b-btn>
        <form
          v-if="change_password"
          @submit.prevent="validate().then(changePassword)"
        >
          <b-form-group label="Crie uma nova senha">
            <validation-provider
              v-slot="{ errors }"
              name="senha"
              rules="required|min:6"
            >
              <b-form-input v-model="passwordForm.password" type="password" />
              <Error :list="errors" />
            </validation-provider>
          </b-form-group>
          <b-form-group label="Confirme sua nova senha" class="mb-0">
            <validation-provider
              v-slot="{ errors }"
              name="confirmação da senha"
              rules="required"
            >
              <b-form-input
                v-model="passwordForm.password_confirmation"
                type="password"
              />
              <Error :list="errors" />
            </validation-provider>
          </b-form-group>
          <br />
          <button
            type="submit"
            class="btn btn-primary btn-lg btn-block"
            :disabled="invalid || loading"
          >
            <b-spinner v-if="loading" small />
            <span v-else>SALVAR NOVA SENHA</span>
          </button>
        </form>
      </ValidationObserver>
    </b-tab>
  </b-tabs>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Error from './Error.vue'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    Error,
  },
  data() {
    return {
      tab: 0,
      loading: false,
      change_password: false,
      passwordForm: {
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
  computed: {
    authUser() {
      return this.$store.state.authUser
    },
  },
  created() {
    Object.keys(this.form).forEach((key) => {
      if (this.authUser[key]) {
        this.form[key] = this.authUser[key]
      }
    })
  },
  methods: {
    save() {
      this.loading = true
      const user = this.$fire.auth.currentUser
      this.$fire.firestore
        .collection('users')
        .doc(user.uid)
        .set(this.form)
        .then(() => {
          user
            .updateProfile({
              displayName: this.form.displayName,
              photoURL: this.form.photoURL,
            })
            .then(() => {
              this.setUser(user)
              this.notify('Seu perfil foi atualizado!')
              this.$bvModal.hide('portal-modal')
              this.loading = false
            })
            .catch((error) => {
              this.firebaseError(error)
              this.loading = false
            })
        })
        .catch(this.firebaseError)
    },
    async changePassword() {
      if (
        this.passwordForm.password === this.passwordForm.password_confirmation
      ) {
        this.loading = true

        const user = this.$fire.auth.currentUser
        this.$fire.auth.languageCode = 'pt-BR'

        await user
          .updatePassword(this.passwordForm.password)
          .then(() => {
            this.tab = 0
            this.loading = false
            this.notify('Sua senha foi atualizada!')
          })
          .catch((error) => {
            this.firebaseError(error)
            this.loading = false
          })
      } else {
        this.notify('As duas senhas devem ser iguais', 'error')
      }
    },
  },
}
</script>
