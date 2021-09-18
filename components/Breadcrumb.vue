<template>
  <div class="d-none"></div>
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
  },
}
</script>
