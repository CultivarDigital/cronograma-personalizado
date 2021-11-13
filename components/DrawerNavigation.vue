<template>
  <v-navigation-drawer :value="showDrawer" app @input="toggleDrawer">
    <v-list color="primary" :dark="true" nav>
      <v-list-item class="mb-0">
        <v-list-item-content class="text-center pb-0">
          <User
            v-if="$auth.user"
            thumb
            size="64"
            color="white"
            icon-color="primary"
          />
          <div v-else>
            <n-link to="/">
              <v-img
                title="Cultivar Brasil"
                :src="require('~/assets/img/cultivar-logo-branca.png')"
                class="ma-auto mb-3"
                max-height="64px"
                max-width="64px"
                left
              />
            </n-link>
            <p class="text-white mb-1"><strong>Cultivar </strong> Brasil</p>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="$auth.user" link @click="showPortal">
        <v-list-item-content>
          <v-list-item-title v-if="$auth.user.name" class="text-center mb-3">
            {{ $auth.user.name }}
          </v-list-item-title>
          <div v-if="$auth.user.region" class="text-center">
            <v-chip small>{{ $auth.user.region }}</v-chip>
          </div>
          <div v-else class="text-center">
            <small>Qual é a sua região?</small>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else class="mb-3 d-flex justify-center">
        <div>
          <v-btn outlined small color="white" class="mt-3" @click="showPortal">
            <v-icon left dark> mdi-login </v-icon>
            Acesse sua conta
          </v-btn>
        </div>
      </v-list-item>
    </v-list>
    <v-list nav dense class="pb-0 mt-3">
      <v-list-item to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Início</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <SidebarMenu />
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    showDrawer() {
      return this.$store.state.showDrawer
    },
  },
  methods: {
    showPortal() {
      this.$store.dispatch('showPortal')
    },
    toggleDrawer(status) {
      this.$store.dispatch('toggleDrawer', status)
    },
  },
}
</script>
