<template>
  <span>
    <b-avatar
      v-if="avatar && url"
      v-b-tooltip.hover
      :src="url"
      :fluid="fluid"
      :class="cssClass"
      :size="width"
      :rounded="thumb"
      :alt="title"
      :title="title"
    />
    <b-img
      v-else-if="url"
      v-b-tooltip.hover
      :src="url"
      :fluid="fluid"
      :class="cssClass"
      :width="width"
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
    width: {
      type: String,
      default: null,
    },
    cssClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      url: null,
    }
  },
  created() {
    if (this.src) {
      // this.url = this.src
      this.loadUrl(this.src)
    }
  },
  methods: {
    async loadUrl(url) {
      const hash = CryptoJS.MD5(url).toString()
      const cached = await this.getLocalItem(hash)
      if (cached) {
        this.url = URL.createObjectURL(cached)
      } else {
        this.url = url
        try {
          await this.cacheUrl(this.url)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Unable to cache: ' + this.url)
        }
      }
    },
    async cacheUrl(url) {
      const fileToCache = await axios.get(url, {
        responseType: 'blob',
      })
      const hash = CryptoJS.MD5(url).toString()
      await this.setLocalItem(hash, fileToCache.data)
      this.url = URL.createObjectURL(fileToCache.data)
    },
  },
}
</script>
