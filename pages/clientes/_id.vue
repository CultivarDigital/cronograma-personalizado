<template>
  <div>
    <TopNavigation active="Montar cronograma" />
    <div v-if="user">
      <v-container>
        <div>
          <Subtitle label="Editar cliente" back-to="/clientes" />
        </div>
      </v-container>
      <ProfileForm v-model="user" @change="updateUser" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
    }
  },
  updateUser(user) {
    this.user = user
  },
  async created() {
    this.user = await this.$axios.$get('/v1/users/' + this.$route.params.id)
  },
}
</script>
