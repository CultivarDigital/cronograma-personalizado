<template>
  <img
    v-if="raw && url"
    :key="src"
    :src="url"
    :width="size"
    :height="size"
    :alt="title"
    :title="title"
    style="max-width: 100%"
    :class="cssClass"
  />
  <v-img
    v-else-if="url"
    :key="src"
    :src="url"
    :width="size"
    :height="size"
    :alt="title"
    :title="title"
    :contain="contain"
    :class="cssClass"
    fluid
  />
</template>

<script>
import CryptoJS from 'crypto-js'
import axios from 'axios'
export default {
  props: {
    raw: {
      type: Boolean,
      default: false,
    },
    src: {
      type: String,
      default: null,
      required: null,
    },
    title: {
      type: String,
      default: null,
    },
    thumb: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: null,
    },
    cssClass: {
      type: String,
      default: null,
    },
    contain: {
      type: Boolean,
      default: false,
    },
    ignoreCache: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      url: null,
    }
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      if (this.src) {
        const thumbURL = this.src.replace('/images', '/thumbs')
        if (this.thumb) {
          this.url = await this.loadURL(thumbURL)
        }
        if (!this.url) {
          this.url = await this.loadURL(this.src)
          if (!this.thumb && !this.url && this.$nuxt.isOffline) {
            this.url = await this.loadURL(thumbURL)
          }
        }
        if (!this.url) {
          return this.src
        }
      }
    },
    async loadURL(url) {
      const hash = CryptoJS.MD5(url).toString()
      const cached = await this.getLocalItem(hash)
      if (cached && !this.ignoreCache) {
        return URL.createObjectURL(cached)
      } else {
        try {
          return await this.cacheUrl(url)
        } catch (error) {
          return null
        }
      }
    },
    async cacheUrl(url) {
      let downloadURL = url
      if (!url.startsWith('http') && !url.startsWith('/_nuxt/')) {
        downloadURL = process.env.UPLOADS_URL + url
      }
      const fileToCache = await axios.get(downloadURL, {
        responseType: 'arraybuffer',
      })
      const blob = new Blob([fileToCache.data], {
        type: 'image/jpg',
      })
      const hash = CryptoJS.MD5(url).toString()
      await this.setLocalItem(hash, blob)
      return URL.createObjectURL(blob)
    },
  },
}
</script>
