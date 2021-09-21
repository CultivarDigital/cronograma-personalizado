<template>
  <div>
    <Breadcrumb
      :links="[['Guias', '/guias']]"
      active="Guia básico de cultivo"
      description="Pra cultivar plantas e alimentos saudáveis é preciso oferecer atenção, cuidado e dedicação, mas os benefícios que essa prática trará pra sua saúde física, mental, emocional e psicológica são muitos."
      :img="
        'https://www.cultivarbrasil.com' +
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
        block
        color="primary"
        to="/guias/guia-de-cultivo/planejamento-da-horta"
      >
        Planejamento da Horta
      </v-btn>
      <br />
      <v-btn block color="primary" to="/guias/guia-de-cultivo/quando-plantar">
        Quando plantar
      </v-btn>
      <br />
      <v-btn block color="primary" to="/guias/guia-de-cultivo/como-plantar">
        Como plantar
      </v-btn>
      <br />
      <v-btn
        block
        color="primary"
        to="/guias/guia-de-cultivo/cuidados-com-a-horta"
      >
        Cuidados com a Horta
      </v-btn>
      <br />
      <v-btn block color="primary" to="/guias/guia-de-cultivo/dicas-basicas">
        Dicas básicas
      </v-btn>
      <br />
      <Comments :target="'/guias/guia-de-cultivo'" />
    </v-container>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {}
  },
  created() {},
}
</script>
