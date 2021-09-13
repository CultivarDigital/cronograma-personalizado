<template>
  <span>
    <v-avatar v-if="avatar && url" :size="size" :color="color">
      <v-img v-b-tooltip.hover :src="url" :alt="title" :title="title" />
    </v-avatar>
    <v-img
      v-else-if="url"
      v-b-tooltip.hover
      :src="url"
      :max-width="size"
      :rounded="thumb"
      :alt="title"
      :title="title"
    />
  </span>
</template>

<script>
import CryptoJS from 'crypto-js'
import axios from 'axios'
export default {
  props: {
    src: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    avatar: {
      type: Boolean,
      default: false,
    },
    thumb: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'blue-grey',
    },
  },
  data() {
    return {
      url: null,
    }
  },
  async created() {
    if (this.src) {
      if (this.thumb) {
        const thumbURL = this.src.replace('/images', '/thumbs')
        this.url = await this.loadUrl(thumbURL)
      }
      if (!this.url) {
        this.url = await this.loadUrl(this.src)
      }
      if (!this.url) {
        return this.src
      }
    }
  },
  methods: {
    async loadUrl(url) {
      const hash = CryptoJS.MD5(url).toString()
      const cached = await this.getLocalItem(hash)
      if (cached) {
        return URL.createObjectURL(cached)
      } else {
        try {
          return await this.cacheUrl(url)
        } catch (error) {
          console.log('Unable to cache: ' + url)
          return null
        }
      }
    },
    async cacheUrl(url) {
      const fileToCache = await axios.get(url, {
        responseType: 'blob',
      })
      const hash = CryptoJS.MD5(url).toString()
      await this.setLocalItem(hash, fileToCache.data)
      return URL.createObjectURL(fileToCache.data)
    },
  },
}
</script>
