<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-lone-template -->
<template>
  <div class="message-form">
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
          Digite uma mensagem
        </v-btn>
        <div v-if="$auth.user" class="w-100">
          <div>
            <div v-if="form.embeds.length" class="pt-2">
              <EmbedGallery :embeds="form.embeds" />
            </div>
            <div v-if="form.images.length" class="pt-2">
              <Gallery :images="form.images" />
            </div>
            <UploadImage prefix="messages" @input="addImage" />
            <EmbedUrl icon="mdi-youtube" @input="addUrl" />
            <EmbedUrl @input="addUrl" />
          </div>
          <div>
            <v-btn
              color="primary"
              block
              class="mt-md-2"
              large
              :disabled="!form.message || !form.message"
              @click="save"
            >
              Digite uma mensagem
            </v-btn>
          </div>
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    conversation: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      members: [],
      form: {
        to: this.to,
        message: null,
        images: [],
        embeds: [],
      },
    }
  },
  methods: {
    addImage(image) {
      if (image) {
        this.form.images.push(image)
      }
    },
    addUrl(embed) {
      if (embed) {
        this.form.embeds.push(embed)
      }
    },
    save() {
      if (this.form.message) {
        this.$axios.$post('/v1/messages', this.form).then((message) => {
          this.$notifier.success('Mensagem enviada!')
          this.$emit('change', message)
          this.form.message = null
          this.form.images = []
          this.form.embeds = []
        })
      }
    },
  },
}
</script>
