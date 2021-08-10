<template>
  <div>
    <b-dropdown
      :text="value ? 'Categoria: ' + value : 'Todas as categorias'"
      class="m-md-2"
      variant="primary"
    >
      <b-dropdown-item :active="!value" @click="$emit('input', null)">
        Todas as categorias
      </b-dropdown-item>
      <b-dropdown-item
        v-for="category in specie_categories"
        :key="category"
        :active="value === category"
        @click="$emit('input', category)"
      >
        {{ category }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import axios from 'axios'
export default {
  props: {
    value: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      currentCategory: null,
    }
  },
  computed: {
    specie_categories() {
      return this.$store.state.specie_categories
    },
  },
  created() {
    if (this.value && this.value.url) {
      const tryThumb = this.thumb && this.value.thumb
      try {
        this.loadUrl(
          this.baseURL + (tryThumb ? this.value.thumb : this.value.url)
        )
      } catch (error) {
        this.loadUrl(this.baseURL + this.value.url)
      }
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
