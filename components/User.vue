<!-- eslint-disable vue/no-v-html -->
<template>
  <span>
    <v-avatar v-if="profile && profile.photoURL" :color="color" :size="size">
      <CachedImage
        avatar
        :title="profile.displayName"
        :alt="profile.displayName"
        :src="profile.photoURL"
        :size="size"
        :color="color"
      />
    </v-avatar>
    <v-avatar v-else :color="color" :size="size">
      <v-icon :color="iconColor" :size="size / 2" dark> mdi-account </v-icon>
    </v-avatar>
  </span>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
    user: {
      type: Object,
      default: null,
    },
    size: {
      type: String,
      default: '32',
    },
    color: {
      type: String,
      default: 'blue-grey',
    },
    iconColor: {
      type: String,
      default: null,
    },
    thumb: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loadedUser: null,
    }
  },
  computed: {
    profile() {
      if (this.user) {
        return this.user
      } else if (this.loadedUser) {
        return this.loadedUser
      } else {
        return this.authUser
      }
    },
  },
  async created() {
    if (this.id) {
      this.loadedUser = await this.$axios.$get('/api/users/' + this.id)
    }
  },
}
</script>
