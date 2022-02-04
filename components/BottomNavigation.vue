<template>
  <v-bottom-navigation
    v-model="value"
    fixed
    grow
    app
    background-color="#F0EDED"
    class="d-lg-none"
    style="box-shadow: none"
  >
    <v-btn to="/dashboard">
      <img
        :src="
          require('~/assets/img/bottom-navigation/home' +
            ($route.path === '/dashboard' ? '-active' : '') +
            '.png')
        "
      />
    </v-btn>
    <v-btn to="/cronograma">
      <img
        :src="
          require('~/assets/img/bottom-navigation/cronograma' +
            ($route.path.startsWith('/cronograma') ? '-active' : '') +
            '.png')
        "
      />
    </v-btn>
    <v-btn
      :to="
        $auth.user && $auth.user.role === 'admin' ? '/suporte' : '/atendimento'
      "
    >
      <img
        :src="
          require('~/assets/img/bottom-navigation/chat' +
            ($route.path.startsWith('/suporte') ||
            $route.path.startsWith('/atendimento')
              ? '-active'
              : '') +
            '.png')
        "
      />
    </v-btn>
    <v-btn to="/perfil">
      <img
        :src="
          require('~/assets/img/bottom-navigation/perfil' +
            ($route.path.startsWith('/perfil') ? '-active' : '') +
            '.png')
        "
      />
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
}
</script>
