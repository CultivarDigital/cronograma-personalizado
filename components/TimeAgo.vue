<template>
  <small
    v-if="date"
    class="font-weight-light"
    :title="$moment(date).format('DD/MM/YYYY h:mm:ss')"
  >
    {{ $moment(date).fromNow(true) }}
  </small>
</template>
<script>
export default {
  props: {
    date: {
      type: [Object, String],
      default: null,
    },
  },
}
</script>
