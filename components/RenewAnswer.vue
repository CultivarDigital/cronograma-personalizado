<template>
  <v-dialog :value="true" app fullscreen>
    <div>
      <v-card class="rounded-0 anamnese pt-12">
        <div class="text-center">
          <img
            class="mb-3"
            src="~/assets/img/renovar.png"
            alt="Acompanhamento mensal"
            style="max-width: 100%"
          />
          <h3 class="text-h5 font-weight-bold mb-3">
            Você continua no nosso time!
          </h3>
          <p style="color: #78746d">
            <small>
              Estamos felizes pela confiança e principalmente pelos resultados
              que você alcançou.Para seguir com a renovação, basta preencher o
              formulário abaixo.
            </small>
          </p>
        </div>
        <RenewForm :value="value" @input="changed" />
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
