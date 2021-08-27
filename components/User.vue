<!-- eslint-disable vue/no-v-html -->
<template>
  <span>
    <!-- <n-link v-if="profile" :to="'/membro/' + profile.id"> -->
    <span v-if="profile">
      <b-avatar
        v-if="profile.avatar && (profile.avatar.thumb || profile.avatar.url)"
        v-b-tooltip.hover
        :title="userLabel(profile)"
        :alt="userLabel(profile)"
        :src="profile.avatar[thumb && profile.avatar.thumb ? 'thumb' : 'url']"
        class="mr-1"
        :size="size"
      />
      <b-avatar
        v-else-if="profile.code"
        v-b-tooltip.hover
        class="mr-1"
        :size="size"
        :title="userLabel(profile)"
        :alt="userLabel(profile)"
        :text="profile.code"
      />
      <b-avatar
        v-else
        class="mr-1"
        :size="size"
        :title="userLabel(profile)"
        :alt="userLabel(profile)"
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
        return this.currentUser
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
