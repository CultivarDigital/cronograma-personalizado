<template>
  <div v-if="show">
    <v-card
      v-if="$store.state.offlineMode === null && $route.path === '/'"
      class="py-6 text-center rounded-0"
    >
      <v-card-text class="text-center">
        <v-icon x-large class="mb-3">mdi-signal-off</v-icon>
        <h3 class="mb-3">Ativar modo offline?</h3>
        Você pretende usar este aplicativo quando estiver em locais sem internet
        ou com sinal ruim?
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="grey" @click="setOfflineMode(false)"> Não </v-btn>
        <v-btn color="primary" @click="setOfflineMode(true)">
          Sim, eu quero!
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog
      v-if="caching !== false"
      :value="true"
      max-width="290"
      persistent
      overlay-opacity="1"
      overlay-color="primary"
    >
      <v-card class="py-6 text-center">
        <v-card-text class="pb-0 text-center">
          <p v-if="caching >= pages.length" class="mb-3">Quase lá!</p>
          <p v-else-if="$route.path === '/'" class="mb-3">
            Ativando modo offline...
          </p>
          <p v-else class="mb-3">
            <small>Salvando: </small>
            <br />
            <strong v-if="currentPage">
              {{
                currentPage.name === 'Alcachofra'
                  ? 'Detalhes da espécie'
                  : currentPage.name
              }}
            </strong>
          </p>
          <v-progress-linear :value="(caching / pages.length) * 100" />
          <small>
            {{ pages.length * 3 - caching * 3 }} segundos restantes
          </small>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      caching: false,
      show: false,
      pages: [
        '/ferramentas',
        '/ferramentas/o-que-plantar-esse-mes',
        '/ferramentas/o-que-plantar-esse-mes/alcachofra-cynara-scolymus',
        '/ferramentas/catalogo-de-especies',
        '/ferramentas/catalogo-de-especies/alcachofra-cynara-scolymus',
        '/guias',
        '/guias/guia-de-cultivo',
        '/guias/guia-de-cultivo/planejamento-da-horta',
        '/guias/guia-de-cultivo/quando-plantar',
        '/guias/guia-de-cultivo/como-plantar',
        '/guias/guia-de-cultivo/cuidados-com-a-horta',
        '/guias/guia-de-cultivo/dicas-basicas',
        '/guias/guia-de-compostagem',
        '/lojinha',
        '/colabore',
        '/sobre',
        '/',
      ],
    }
  },
  computed: {
    currentPage() {
      return this.$store.state.page
    },
  },
  created() {
    setTimeout(() => {
      this.show = true
    }, 5000)
  },
  methods: {
    setOfflineMode(value) {
      this.$store.dispatch('setOfflineMode', value)
      if (value) {
        this.cachePages()
      }
    },
    cachePages() {
      this.caching = 0
      const cachePagesLoop = setInterval(() => {
        if (this.pages[this.caching]) {
          this.$router.replace(
            this.pages[this.caching] +
              (this.pages[this.caching] !== '/' ? '?save_offline=true' : '')
          )
          this.caching += 1
        } else {
          clearInterval(cachePagesLoop)
          this.caching = false
        }
      }, 3000)
    },
  },
}
</script>
