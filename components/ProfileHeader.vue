<template>
  <div class="text-center profile-header">
    <div
      style="
        height: 80px;
        background-color: rgba(123, 163, 162, 0.4);
        margin-bottom: -40px;
      "
    ></div>
    <div class="mb-3 pa-1 rounded-circle white d-inline-block">
      <User size="80" :user="user" />
    </div>
    <br />
    {{ user.name }}
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => null,
      required: true,
    },
  },
}
</script>
