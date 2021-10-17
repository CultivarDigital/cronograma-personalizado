<template>
  <v-dialog v-model="dialog">
    <template #activator="{ on, attrs }">
      <div class="text-center">
        <v-btn dark v-bind="attrs" color="primary" large v-on="on">
          <v-icon left>mdi-chat-plus</v-icon> Comece uma conversa
        </v-btn>
        <v-btn
          fab
          bottom
          right
          fixed
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>mdi-chat-plus</v-icon>
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-toolbar color="primary" dark> Comece um novo assunto </v-toolbar>
      <v-card-text class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div class="mb-6">
              <validation-provider
                v-slot="{ errors }"
                name="assunto"
                rules="required|max:140"
              >
                <v-text-field
                  v-model="form.title"
                  name="name"
                  label="Qual o assunto dessa conversa?"
                  outlined
                  counter
                  maxlength="140"
                  :error-messages="errors"
                />
              </validation-provider>
              <validation-provider v-slot="{ errors }" name="detalhe">
                <v-textarea
                  v-model="form.message"
                  name="name"
                  label="Detalhe sua questão"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
              <v-combobox
                v-model="form.categories"
                :items="categories"
                label="Qual o tipo dessa conversa?"
                outlined
                multiple
                chips
                hide-details="auto"
                small-chips
              ></v-combobox>
            </div>
            <div class="text-right">
              <v-btn text @click="dialog = false"> Fechar </v-btn>
              <v-btn type="submit" color="success" :disabled="invalid" large>
                <v-icon left>mdi-send</v-icon>
                Salvar
              </v-btn>
            </div>
          </v-form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import categories from '@/data/conversation-categories.json'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from '@firebase/firestore'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      categories,
      dialog: false,
      form: {
        title: null,
        categories: null,
        user: null,
        message: null,
      },
    }
  },
  methods: {
    save() {
      if (this.form.message) {
        this.form.user = { uid: this.$auth.user.uid }
        if (this.$auth.user.name) {
          this.form.user.name = this.$auth.user.name
        }
        if (this.$auth.user.picture) {
          this.form.user.picture = this.$auth.user.picture
        }
        addDoc(collection(getFirestore(), 'conversations'), {
          timestamp: serverTimestamp(),
          title: this.form.title,
          categories: this.form.categories,
          user: this.form.user,
        }).then((conversation) => {
          addDoc(
            collection(
              getFirestore(),
              'conversations',
              conversation.id,
              'messages'
            ),
            {
              timestamp: serverTimestamp(),
              message: this.form.message,
              user: this.form.user,
            }
          ).then((message) => {
            this.$notifier.success(
              'Conversa iniciada com sucesso. Obrigado por interagir!'
            )
            // this.$router.push('/comunidade/' + conversation.id)
            this.$emit('change', conversation)
          })
        })
      }
    },
  },
}
</script>
