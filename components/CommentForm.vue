<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <v-list-item class="mb-1">
      <v-list-item-avatar>
        <User thumb size="40" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-textarea
          v-if="$store.state.authUser"
          v-model="form.message"
          outlined
          rows="1"
          auto-grow
          hide-details
          placeholder="Deixe seu comentário"
        />
        <v-btn
          v-else
          block
          color="primary"
          large
          @click="$store.dispatch('showPortal')"
        >
          Deixe seu comentário
        </v-btn>
        <v-btn
          v-if="form.message"
          color="primary"
          block
          class="mt-2"
          large
          @click="save"
        >
          Salvar comentário
        </v-btn>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  props: {
    comment: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      form: {
        user: null,
        target: this.target,
        message: null,
      },
    }
  },
  methods: {
    save() {
      if (this.form.message) {
        this.form.user = { uid: this.authUser.uid }
        if (this.authUser.displayName) {
          this.form.user.displayName = this.authUser.displayName
        }
        if (this.authUser.photoURL) {
          this.form.user.photoURL = this.authUser.photoURL
        }
        this.$fire.firestore
          .collection('comments')
          .add({ created_at: new Date(), ...this.form })
          .then((commentRef) => {
            this.notify('Comentário enviado!')
            this.$emit('change', { id: commentRef.id, ...commentRef })
            this.form.message = null
          })
          .catch(this.firebaseError)
      }
    },
  },
}
</script>
