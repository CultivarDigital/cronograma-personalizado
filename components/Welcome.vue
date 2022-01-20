<template>
  <v-dialog :value="true" app fullscreen @click:outside="setGreeted">
    <v-card
      v-touch="{
        left: () => next(),
        right: () => prev(),
      }"
    >
      <v-container style="max-width: 340px" class="pt-10">
        <p class="text-subtitle-1 ml-3" style="color: #bdbdbd">
          Primeiro acesso
        </p>
        <div class="text-center primary--text">
          <h2 class="text-h4 font-weight-bold mb-6">Seja bem-vinda!</h2>
          <div v-if="tab === 0">
            <img
              :src="require('~/assets/img/bem-vinda-video-1.png')"
              alt="Bem vinda - Video 1"
              class="mb-2 w-100"
            />
            <p>
              É um prazer tê-la em nosso time, te explicarei como funciona o
              Cronograma Capilar Personalizado e como você poderá desfrutar ao
              máximo por aqui.
            </p>
          </div>
          <div v-if="tab === 1">
            <img
              :src="require('~/assets/img/bem-vinda-video-2.png')"
              alt="Bem vinda - Video 2"
              class="mb-2 w-100"
            />
            <p>
              Neste vídeo te explicaremos as funções do app e como encontrar
              tudo o que precisa nele.
            </p>
          </div>
          <v-btn
            color="primary"
            :outlined="tab !== 0"
            :class="{ primary: tab === 0 }"
            icon
            @click="tab = 0"
          ></v-btn>
          <v-btn
            color="primary"
            :outlined="tab !== 1"
            :class="{ primary: tab === 1 }"
            icon
            @click="tab = 1"
          ></v-btn>
          <v-btn
            color="primary"
            :outlined="tab !== 2"
            :class="{ primary: tab === 2 }"
            icon
            @click="setGreeted"
          ></v-btn>
          {{ tab }}
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    }
  },
  computed: {
    showDrawer() {
      return this.$store.state.showDrawer
    },
  },
  methods: {
    showPortal() {
      this.$store.dispatch('showPortal')
    },
    setGreeted() {
      this.$store.dispatch('setGreeted', true)
    },
    prev() {
      if (this.tab > 0) {
        this.tab = this.tab - 1
        console.log('prev')
      }
    },
    next() {
      if (this.tab < 1) {
        this.tab = this.tab + 1
        console.log('Next')
      } else {
        this.setGreeted()
      }
    },
  },
}
</script>
