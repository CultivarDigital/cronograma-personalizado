<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-lone-template -->
<template>
  <div id="message-form" class="message-form">
    <v-list-item class="py-0">
      <v-list-item-content class="py-0">
        <div>
          <v-textarea
            v-model="form.message"
            color="primary"
            auto-grow
            rows="1"
            hide-details
            placeholder="Qual a sua dúvida?"
          >
            <template #append>
              <UploadImage prefix="messages" @input="addImage" />
            </template>
            <template #append-outer>
              <v-btn
                :disabled="!form.message"
                color="primary"
                class="mt-md-2"
                large
                icon
                @click="save"
              >
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </template>
          </v-textarea>
          <div v-if="form.images.length" class="pt-2">
            <Gallery :images="form.images" />
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
