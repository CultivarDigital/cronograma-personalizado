<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <v-list-item class="mb-1">
      <v-list-item-avatar>
        <User thumb size="40" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-textarea
          v-if="$auth.user"
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
        target: this.target,
        message: null,
      },
    }
  },
  methods: {
    save() {
      if (this.form.message) {
        this.$axios.post('/v1/comments', this.form).then((comment) => {
          this.$notifier.success('Comentário enviado!')
          this.$emit('change', comment)
          this.form.message = null
        })
      }
    },
  },
}
</script>
