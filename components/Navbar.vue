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
      <b-dropdown
        v-if="authUser"
        variant="primary"
        :text="authUser.displayName || authUser.email"
        right
      >
        <template #button-content>
          <User /> {{ authUser.displayName || authUser.email }}
        </template>
        <b-dropdown-item @click="$bvModal.show('portal-modal')">
          Meus dados
        </b-dropdown-item>
        <b-dropdown-item @click="logout">Sair</b-dropdown-item>
      </b-dropdown>
      <b-nav-item
        v-else
        right
        link-classes="btn btn-primary text-white"
        @click="$bvModal.show('portal-modal')"
      >
        <b-icon-person />
        Minha conta
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
