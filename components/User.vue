<!-- eslint-disable vue/no-v-html -->
<template>
  <span>
    <!-- <n-link v-if="profile" :to="'/membro/' + profile.id"> -->
    <span v-if="profile">
      <b-avatar
        v-if="profile.photoURL"
        v-b-tooltip.hover
        :title="profile.displayName"
        :alt="profile.displayName"
        :src="profile.photoURL"
        class="mr-1"
        :size="size"
      />
      <b-avatar
        v-else
        class="mr-1"
        :size="size"
        :title="profile.displayName"
        :alt="profile.displayName"
      />
    </span>
    <b-avatar v-else class="mr-1" :size="size" />
    <!-- </n-link> -->
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
      default: '2rem',
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
