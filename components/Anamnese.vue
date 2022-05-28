<template>
  <v-dialog :value="true" app fullscreen persistent>
    <div>
      <v-card class="rounded-0 anamnese">
        <div
          style="background-color: rgba(123, 163, 162, 0.4)"
          class="white--text py-10 px-6 text-center"
        >
          <h2 class="text-h4 font-weight-bold mb-3" style="font-size: 34px">
            Seja bem vinda!
          </h2>
          <p style="font-weight: 500; font-size: 14px" class="mb-0">
            Essa é a sua ficha de anamnese, a partir dela teremos as informações
            necessárias para iniciar o seu Cronograma Capilar Personalizado.
          </p>
        </div>
        <AnamneseForm :value="value" @input="changed" />
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    changed(contract) {
      this.$emit('input', contract)
    },
  },
}
</script>
<style lang="scss">
.anamnese {
  min-height: 100vh;
  .upload-image,
  .upload-video {
    .v-btn {
      letter-spacing: 0 !important;
      font-size: 12px;
      padding-top: 25px;
      padding-bottom: 25px;
      width: 100%;
    }
  }
  .picture,
  .video {
    max-width: 100%;
  }
}
</style>
