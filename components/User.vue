<!-- eslint-disable vue/no-v-html -->
<template>
  <span>
    <v-avatar
      v-if="profile && profile.photoURL"
      :size="size"
      :color="color"
      @click="showPortal"
    >
      <CachedImage
        avatar
        :title="profile.displayName"
        :alt="profile.displayName"
        :src="profile.photoURL"
        :size="size"
        :color="color"
        :thumb="thumb"
      />
    </v-avatar>
    <v-avatar v-else :color="color" :size="size" @click="showPortal">
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
      default: null,
    },
    color: {
      type: String,
      default: 'primary',
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
  created() {
    if (this.id) {
      this.$firebase
        .get('users', this.id)
        .then((user) => {
          this.loadedUser = user
        })
        .catch(this.$notifier.dbError)
    }
  },
  methods: {
    showPortal() {
      this.$store.dispatch('showPortal')
    },
  },
}
</script>
