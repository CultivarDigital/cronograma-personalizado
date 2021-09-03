<template>
  <b-navbar toggleable="md">
    <b-navbar-brand to="/">
      <img src="~/assets/img/logo.png" class="logo" />
      <strong>Cultivar</strong> Brasil
    </b-navbar-brand>
    <b-navbar-toggle target="sidebar"></b-navbar-toggle>
    <b-collapse id="sidebar" is-nav>
      <div class="d-md-none">
        <Sidebar />
      </div>
    </b-collapse>
    <b-navbar-nav class="ml-auto d-none d-md-block">
      <b-nav-item-dropdown
        v-if="authUser"
        :text="authUser.displayName || authUser.email"
        right
      >
        <template #button-content>
          <User thumb /> {{ authUser.displayName || authUser.email }}
        </template>
        <b-dropdown-item @click="$bvModal.show('portal-modal')">
          Meus dados
        </b-dropdown-item>
        <b-dropdown-item @click="logout">Sair</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item v-else right>
        <b-button variant="primary" @click="$bvModal.show('portal-modal')">
          <i class="far fa-star" />
          Melhore sua experiência
        </b-button>
        <Region />
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import Sidebar from './Sidebar'
export default {
  components: {
    Sidebar,
  },
  computed: {
    authUser() {
      return this.$store.state.authUser
    },
  },
  created() {
    this.$bvModal.show('portal-modal')
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$fire.auth.signOut()
    },
  },
}
</script>
