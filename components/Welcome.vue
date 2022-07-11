<template>
  <v-card
    v-touch="{
      left: () => next(),
      right: () => prev(),
    }"
    class="rounded-0"
    style="min-height: 100vh"
  >
    <v-container style="max-width: 340px" class="pt-10">
      <p class="text-subtitle-1 ml-3" style="color: #bdbdbd">Primeiro acesso</p>
      <div class="text-center primary--text">
        <h2 class="text-h4 font-weight-bold mb-6">Seja bem-vinda!</h2>
        <div v-if="tab === 0">
          <div class="video-player">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/721506698?h=d3cd85b733"
              frameborder="0"
              height="282px"
              allowfullscreen
            />
          </div>
          <p>
            É um prazer tê-la em nosso time, te explicarei como funciona o
            Cronograma Capilar Personalizado e como você poderá desfrutar ao
            máximo por aqui.
          </p>
        </div>
        <v-btn color="primary" x-large @click="finish">Continuar</v-btn>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    }
  },
  methods: {
    finish() {
      this.$emit('finish')
    },
    prev() {
      if (this.tab > 0) {
        this.tab = this.tab - 1
      }
    },
    next() {
      if (this.tab < 1) {
        this.tab = this.tab + 1
      } else {
        this.finish()
      }
    },
  },
}
</script>
