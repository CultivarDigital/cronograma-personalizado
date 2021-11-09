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
          <CachedImage
            :src="image"
            :thumb="thumb"
            size="42"
            css-class="rounded"
            :title="alt"
            raw
          />
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="images.map((img) => apiURL + img)"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
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
