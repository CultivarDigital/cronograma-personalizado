<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <b-media class="pt-2" no-body>
      <b-media-aside>
        <User thumb />
      </b-media-aside>
      <b-media-body>
        <b-form-textarea
          v-if="$store.state.authUser"
          v-model="form.message"
          :placeholder="form.comment ? 'Responder' : 'Deixe seu comentário'"
        />
        <b-btn v-else block @click="$bvModal.show('portal-modal')">
          Deixe seu comentário
        </b-btn>
        <b-btn
          v-if="form.message"
          variant="primary"
          block
          class="mt-2"
          @click="save"
        >
          Salvar comentário
        </b-btn>
      </b-media-body>
    </b-media>
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
        console.log(this.form)
        this.$fire.firestore
          .collection('comments')
          .add(this.form)
          .then((commentRef) => {
            this.notify('Comentário enviado!')
            this.$emit('change', { id: commentRef.id, ...commentRef })
            this.form.message = null
          })
      }
    },
  },
}
</script>
