<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    v-if="content"
    class="tiptap-content mb-3 text-justify"
    v-html="content"
  ></div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
