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
          <CachedImage :value="image" thumb width="64" />
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="images.map((image) => image.url)"
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
  },
  data() {
    return {
      visible: false,
      index: 0,
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
