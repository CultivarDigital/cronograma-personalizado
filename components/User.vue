<!-- eslint-disable vue/no-v-html -->
<template>
  <span>
    <v-avatar
      v-if="profile && profile.picture"
      :size="size"
      :color="color"
      @click="userClicked"
    >
      <CachedImage
        avatar
        :title="profile.name"
        :alt="profile.name"
        :src="profile.picture"
        :size="size"
        :color="color"
        :thumb="thumb"
      />
    </v-avatar>
    <v-avatar v-else :color="color" :size="size" @click="userClicked">
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
  computed: {
    profile() {
      if (this.user) {
        return this.user
      } else {
        return this.$auth.user
      }
    },
  },
  methods: {
    userClicked() {
      if (
        this.$auth.user &&
        this.profile &&
        this.profile._id &&
        this.$auth.user.id !== this.profile._id
      ) {
        // eslint-disable-next-line no-console
        console.log(this.profile)
      } else {
        this.$store.dispatch('showPortal')
      }
    },
  },
}
</script>
