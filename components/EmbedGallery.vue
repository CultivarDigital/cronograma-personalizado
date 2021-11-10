<!-- eslint-disable vue/no-v-html -->
<template>
  <v-row>
    <v-col v-for="(embed, i) in embeds" :key="i" cols="12" lg="3" md="4" sm="6">
      <Embed :embed="embed" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    embeds: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>
