<template>
  <v-container
    v-if="currentPermission !== 'granted' && $route.path === '/dashboard'"
    class="pt-3"
  >
    <v-alert color="grey" dark class="text-center">
      <small>
        As notificações do navegador estão desativadas
        <br />
        <strong>Ative para receber nossas mensagens</strong>
      </small>
    </v-alert>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      currentPermission: null,
    }
  },
  created() {
    this.notifyMe()
  },
  methods: {
    notifyMe() {
      if (!('Notification' in window)) {
        return alert('This browser does not support desktop notification')
      }

      this.currentPermission = Notification.permission

      if (Notification.permission !== 'denied') {
        if (Notification.permission === 'granted') {
          this.updateToken()
        } else {
          Notification.requestPermission()
            .then((permission) => {
              if (permission === 'granted') {
                this.updateToken()
              }
              this.currentPermission = Notification.permission
            })
            .catch(() => {
              this.currentPermission = Notification.permission
            })
        }
      }
      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them any more.
    },
    async updateToken() {
      if (!this.$auth.user.push_notification_token) {
        const token = await this.$firebase.getMessagingToken()
        if (token) {
          const updatedUser = await this.$axios.$patch(
            '/v1/users/' + this.$auth.user.id,
            {
              push_notification_token: token,
            }
          )
          this.$auth.setUser(updatedUser)
        }
      }
    },
  },
}
</script>
