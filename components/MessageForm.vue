<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-lone-template -->
<template>
  <div id="message-form" class="message-form">
    <v-list-item class="mb-1 pt-1">
      <v-list-item-avatar>
        <User thumb size="40" />
      </v-list-item-avatar>
      <v-list-item-content>
        <div v-if="$auth.user">
          <v-textarea
            v-model="form.message"
            color="primary"
            outlined
            rows="1"
            auto-grow
            hide-details
            placeholder="Digite uma mensagem"
          />
        </div>
        <v-btn
          v-else
          block
          color="primary"
          large
          class="darken-1"
          @click="$store.dispatch('showPortal')"
        >
          <v-icon>mdi-send</v-icon>
        </v-btn>
        <div v-if="$auth.user" class="w-100">
          <div>
            <div v-if="form.images.length" class="pt-2">
              <Gallery :images="form.images" />
            </div>
            <div class="text-right">
              <UploadImage prefix="messages" button @input="addImage" />
              <v-btn
                v-if="form.message"
                color="primary"
                class="mt-md-2"
                large
                @click="save"
              >
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: this.$route.params.id,
        message: null,
        images: [],
      },
    }
  },
  methods: {
    addImage(image) {
      if (image) {
        this.form.images.push(image)
      }
    },
    save() {
      if (this.form.message) {
        this.$axios.$post('/v1/messages', this.form).then((message) => {
          this.$notifier.success('Mensagem enviada!')
          this.$emit('change', message)
          this.form.message = null
          this.form.images = []
        })
      }
    },
  },
}
</script>
