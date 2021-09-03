<template>
  <b-list-group class="sidebar color-white">
    <b-list-group-item>
      <i class="fas fa-tools" /> Ferramentas
    </b-list-group-item>
    <b-list-group-item class="submenu">
      <b-nav vertical>
        <b-nav-item to="/ferramentas/o-que-plantar-esse-mes">
          O que plantar esse mês?
        </b-nav-item>
        <b-nav-item to="/catalogo-de-especies">
          Catálogo de espécies
        </b-nav-item>
      </b-nav>
    </b-list-group-item>
    <b-list-group-item>
      <i class="fas fa-book-reader" /> Guias
    </b-list-group-item>
    <b-list-group-item class="submenu">
      <b-nav vertical>
        <b-nav-item to="/guia-de-cultivo"> Guia de cultivo </b-nav-item>
        <b-nav-item to="/guia-de-compostagem"> Guia de compostagem </b-nav-item>
      </b-nav>
    </b-list-group-item>
    <b-list-group-item>
      <i class="fas fa-info-circle" /> Plataforma
    </b-list-group-item>
    <b-list-group-item class="submenu">
      <b-nav vertical>
        <b-nav-item to="/sobre"> Sobre </b-nav-item>
        <b-nav-item to="/colabore"> Colabore </b-nav-item>
      </b-nav>
    </b-list-group-item>
    <b-list-group-item v-if="authUser">
      <b-icon-person /> {{ authUser.displayName || authUser.email }}
    </b-list-group-item>
    <b-list-group-item v-if="authUser" class="submenu">
      <b-nav vertical>
        <b-nav-item @click="editProfile">Editar perfil</b-nav-item>
        <b-nav-item @click="logout">Sair</b-nav-item>
      </b-nav>
    </b-list-group-item>
    <b-list-group-item>
      <Footer />
    </b-list-group-item>
  </b-list-group>
</template>
<script>
export default {
  methods: {
    editProfile() {
      this.$bvModal.show('portal-modal')
    },
    logout() {
      this.$store.dispatch('logout')
      this.$fire.auth.signOut()
    },
  },
}
</script>
