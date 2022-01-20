<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="d-inline-block pointer">
    <v-avatar :size="size" :color="color">
      <img
        avatar
        :title="profile.name"
        :alt="profile.name"
        :src="require('~/assets/img/user.png')"
        :size="size"
        :color="color"
        :thumb="thumb"
      />
    </v-avatar>
  </div>
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
      default: '48',
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
      dialog: false,
      profile: null,
    }
  },
  computed: {
    sameUser() {
      return (
        this.$auth.user &&
        this.profile &&
        this.profile._id &&
        this.$auth.user.id === this.profile._id
      )
    },
  },
  watch: {
    '$auth.user'() {
      this.setProfile()
    },
  },
  created() {
    this.setProfile()
  },
  methods: {
    setProfile() {
      if (this.user) {
        this.profile = this.user
      } else {
        this.profile = this.$auth.user
      }
    },
  },
}
</script>
