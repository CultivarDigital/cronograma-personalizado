<template>
  <ValidationObserver v-slot="{ validate, invalid }">
    <v-form @submit.prevent="validate().then(save)">
      <v-container>
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
            v-model="form.body"
            outlined
            label="Mensagem"
            :error-messages="errors"
          />
        </validation-provider>
        <v-text-field
          v-model="form.link"
          placeholder="https://"
          outlined
          label="Link"
          hint="A cliente será redirecionada para este link ao clicar na mensagem"
        />
        <div class="mb-3">
          <v-checkbox
            v-model="form.save_notification"
            color="success"
            hide-details
            label="Notificar no aplicativo"
          />
          <v-checkbox
            v-model="form.push_notification"
            color="success"
            hide-details
            label="Notificar no celular"
          />
          <v-checkbox
            v-model="form.email"
            color="success"
            hide-details
            label="Notificar por email"
          />
        </div>
      </v-container>
      <div v-if="users" class="mb-10 template-form">
        <h3>Selecione os as clientes</h3>
        <v-container>
          <div v-if="groups">
            <v-select
              v-model="group"
              hide-details="auto"
              outlined
              :items="groups"
              item-text="name"
              item-value="_id"
              label="Filtrar por turma"
              clearable
              @input="loadUsers"
            />
          </div>
          <v-simple-table>
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">Cliente</th>
                  <th class="text-right">Selecionar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.name">
                  <td>{{ user.name || user.email }}</td>
                  <td class="d-flex justify-end">
                    <v-checkbox
                      v-model="selected_users"
                      color="success"
                      :value="user._id"
                      hide-details
                    />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="pt-6">
            <Save
              :invalid="invalid"
              :loading="loading"
              label="Enviar mensagem"
            />
          </div>
        </v-container>
      </div>
    </v-form>
  </ValidationObserver>
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
      users: null,
      groups: null,
      group: null,
      selected_users: [],
      loading: false,
      form: {
        subject: '',
        body: '',
        link: '',
        email: false,
        push_notification: false,
        save_notification: true,
      },
    }
  },
  computed() {
    if (this.group) {
      return this.users.filter((user) => user.group === this.group)
    }
    return this.users
  },
  async created() {
    await this.loadUsers()
    await this.loadGroups()
  },
  methods: {
    async loadGroups() {
      this.groups = await this.$axios.$get('/v1/groups')
    },
    async loadUsers() {
      this.selected_users = []
      this.users = await this.$axios.$get('/v1/users/members', {
        params: { group: this.group },
      })
    },
    async save() {
      this.loading = true
      for (const userId of this.selected_users) {
        await this.$axios
          .$post('/v1/notifications', { ...this.form, user: userId })
          .catch(this.error)
      }
      this.success()
    },
    error(error) {
      this.$notifier.firebaseError(error)
      this.loading = false
    },
    success() {
      this.loading = false
      this.$notifier.success('Notificação enviada com sucesso')
    },
  },
}
</script>
