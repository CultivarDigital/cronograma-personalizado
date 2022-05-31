<template>
  <v-dialog v-model="dialog" app fullscreen>
    <template #activator="{ on, attrs }">
      <v-btn
        v-if="value.anamnese"
        color="rgba(238, 96, 94, 1)"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Ver anamnese
      </v-btn>
      <v-alert v-else color="error" dark class="mb-10">
        Esta cliente ainda não respondeu o formulário de anamnese
      </v-alert>
    </template>
    <div>
      <v-card class="rounded-0 anamnese">
        <v-toolbar color="primary" dark>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <span>Anamnese</span>
        </v-toolbar>
        <AnamneseForm :value="value" disabled @input="changed" />
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
  data() {
    return {
      dialog: false,
    }
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
