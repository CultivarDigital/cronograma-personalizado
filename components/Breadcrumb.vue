<template>
  <div class="mb-3">
    <v-app-bar app color="primary" dark hide-on-scroll>
      <v-img
        v-if="$route.path === '/'"
        title="Cultivar Brasil"
        :src="require('~/assets/img/cultivar-white.png')"
        class="mr-4"
        max-height="24px"
        max-width="24px"
        left
      />
      <v-btn
        v-if="$route.path !== '/'"
        icon
        light
        @click="$router.replace(previousPage)"
      >
        <v-icon color="white"> mdi-arrow-left </v-icon>
      </v-btn>
      <v-toolbar-title>
        <span v-if="$route.path === '/'" class="text-white">
          <strong>Cultivar </strong> Brasil
        </span>
        <span
          v-if="$route.path !== '/' && active"
          class="text-white d-flex align-center"
        >
          <small>{{ active }}</small>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="toggleDrawer" />
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => null,
    },
    active: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'brown',
    },
  },
  head() {
    const meta = [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: this.pageDescription(),
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: this.pageDescription(),
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: this.pageTitle(),
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.cultivarbrasil.com' + this.$route.path,
      },
    ]
    if (this.img) {
      meta.push({
        hid: 'og:image',
        name: 'og:image',
        content: this.img,
      })
    }
    return {
      title: this.pageTitle(),
      meta,
    }
  },
  computed: {
    previousPage() {
      console.log(this.links)
      if (this.links && this.links.length) {
        return this.links[this.links.length - 1][1]
      }
      return '/'
    },
  },
  created() {
    this.$store.dispatch('setPage', {
      name: this.active,
      title: this.pageTitle(),
      description: this.pageDescription(),
      links: this.links,
    })
  },
  methods: {
    pageTitle() {
      const links = this.links || []
      const title = [
        'Cultivar Brasil',
        ...links.map((link) => link[0]),
        this.active,
      ]
      return title.reverse().join(' | ')
    },
    pageDescription() {
      return this.description || process.env.npm_package_description
    },
    toggleDrawer() {
      this.$store.dispatch('toggleDrawer', !this.$store.state.showDrawer)
    },
  },
}
</script>
