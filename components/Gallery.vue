<template>
  <div>
    <div>
      <div>
        <div
          v-for="(image, i) in images"
          :key="i"
          class="mr-1 mb-1 d-inline-block pointer"
          @click="() => showImg(i)"
        >
          <div style="border: 1px solid #acacac" class="rounded">
            <CachedImage
              :src="image"
              :thumb="thumb"
              size="64"
              css-class="rounded"
              :title="alt"
              raw
            />
          </div>
        </div>
      </div>
      <client-only>
        <vue-easy-lightbox
          :visible="visible"
          :imgs="images.map((img) => apiURL + img)"
          :index="index"
          @hide="handleHide"
        ></vue-easy-lightbox>
      </client-only>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  components: {
    VueEasyLightbox,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
      required: true,
    },
    alt: {
      type: String,
      default: null,
    },
    thumb: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      visible: false,
      index: 0,
      apiURL: process.env.API_URL,
    }
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>
