<template>
  <small
    v-if="date"
    class="font-weight-light"
    :title="$moment(date.toDate()).format('DD/MM/YYYY h:mm:ss')"
  >
    {{ $moment(date.toDate()).fromNow(true) }}
  </small>
</template>
<script>
export default {
  props: {
    date: {
      type: Object,
      default: null,
    },
  },
}
</script>
