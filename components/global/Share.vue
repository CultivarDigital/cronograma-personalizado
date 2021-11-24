<template>
  <div>
    <v-btn
      target="_blank"
      x-large
      icon
      :href="`https://wa.me/?text=${currentTitle}%20${currentUrl}`"
      color="#25D366"
    >
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
    <v-btn
      target="_blank"
      icon
      :href="`https://facebook.com/sharer/sharer.php?u=${currentUrl}`"
      x-large
      color="#4267B2"
    >
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn
      target="_blank"
      :href="`https://twitter.com/intent/tweet/?text=${currentTitle}&amp;url=${currentUrl}`"
      icon
      x-large
      color="#1DA1F2"
    >
      <v-icon>mdi-twitter</v-icon>
    </v-btn>
    <v-btn
      target="_blank"
      icon
      :href="`https://www.linkedin.com/shareArticle?mini=true&amp;url=${currentUrl}&amp;title=${currentTitle}&amp;summary=${currentDescription}&amp;source=${currentUrl}`"
      x-large
      color="#0e76a8"
    >
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
    <v-btn
      target="_blank"
      icon
      :href="`https://telegram.me/share/url?text=${currentTitle}&amp;url=${currentUrl}`"
      x-large
      color="#0088cc"
    >
      <v-icon>mdi-send</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    currentUrl() {
      return encodeURI('https://cultivarbrasil.com' + this.$route.fullPath)
    },
    currentDescription() {
      let description = process.env.npm_package_description
      const page = this.$store.state.page
      if (page && page.description) {
        description = page.description
      }
      return encodeURI(description)
    },
    currentTitle() {
      let title = 'Cultivar Brasil'
      const page = this.$store.state.page
      if (page && page.title) {
        title = page.title.replace(' | ', ' - ')
      }
      return encodeURI(title)
    },
  },
}
</script>
<style scoped lang="sass">
@import '~/assets/css/share.sass'
</style>
