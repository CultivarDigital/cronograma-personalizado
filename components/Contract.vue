<template>
  <div>
    <TemplateEditor v-model="contract.data" @input="change" />
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      contract: { ...this.value },
    }
  },
  methods: {
    change() {
      this.$emit('input', this.contract)
    },
  },
}
</script>
