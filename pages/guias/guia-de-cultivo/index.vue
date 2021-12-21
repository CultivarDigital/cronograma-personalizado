<template>
  <div>
    <TopNavigation
      :links="[['Guias', '/guias']]"
      active="Guia básico de cultivo"
      description="Aprenda a plantar, colher e cuidar da sua horta ou jardim com esse guia simples e prático"
      :img="
        'https://cronograma-personalizado.web.app' +
        require('~/assets/img/guia-de-cultivo/guia-de-cultivo.png')
      "
    />
    <v-container fluid class="guide">
      <div class="img-wrapper">
        <CachedImage
          raw
          :src="require('~/assets/img/guia-de-cultivo/guia-de-cultivo.png')"
        />
      </div>
      <br />
      <p class="text-center">
        Pra cultivar plantas e alimentos saudáveis é preciso oferecer atenção,
        cuidado e dedicação, mas os benefícios que essa prática trará pra sua
        saúde física, mental, emocional e psicológica são muitos.
      </p>
      <p class="text-center">
        A seguir você encontra informações importantes pra saber como começar!
      </p>
      <v-btn
        large
        block
        color="primary"
        to="/guias/guia-de-cultivo/planejamento-da-horta"
      >
        Planejamento da Horta
      </v-btn>
      <br />
      <v-btn
        large
        block
        color="primary"
        to="/guias/guia-de-cultivo/quando-plantar"
      >
        Quando plantar
      </v-btn>
      <br />
      <v-btn
        large
        block
        color="primary"
        to="/guias/guia-de-cultivo/como-plantar"
      >
        Como plantar
      </v-btn>
      <br />
      <v-btn
        large
        block
        color="primary"
        to="/guias/guia-de-cultivo/cuidados-com-a-horta"
      >
        Cuidados com a Horta
      </v-btn>
      <br />
      <v-btn
        large
        block
        color="primary"
        to="/guias/guia-de-cultivo/dicas-basicas"
      >
        Dicas básicas
      </v-btn>
      <br />
      <Comments :target="'/guias/guia-de-cultivo'" />
    </v-container>
  </div>
</template>
<script>
import TopNavigation from '@/components/TopNavigation.vue'
export default {
  components: {
    TopNavigation,
  },
  data() {
    return {}
  },
  created() {},
}
</script>
