<template>
  <div class="mb-4">
    <v-app-bar app color="#fff" hide-on-scroll style="box-shadow: none">
      <v-app-bar-title class="primary--text">{{ active }}</v-app-bar-title>
      <v-spacer></v-spacer>
      <a @click="toggleDrawer">
        <img :src="require('~/assets/img/menu.png')" />
      </a>
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
        content: this.apiURL + this.$route.path,
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
      if (this.links && this.links.length) {
        return this.links[this.links.length - 1][1]
      }
      return '/dashboard'
    },
    apiURL() {
      return process.env.API_URL
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
        'Cronograma Personalizado',
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
