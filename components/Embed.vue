<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="embed">
    <div
      v-if="embed.type === 'video' && embed.html"
      class="mb-3"
      v-html="embed.html"
    ></div>
    <v-card v-else class="mb-3" :href="embed.url" target="_blank" outlined>
      <v-img v-if="embed.thumbnail_url" :src="embed.thumbnail_url"></v-img>
      <v-card-title v-if="embed.title">{{ embed.title }}</v-card-title>
      <v-card-subtitle v-if="embed.description">
        {{ embed.description }}
      </v-card-subtitle>
      <v-card-text v-if="embed.provider_name">
        <v-icon left size="20">
          {{ 'mdi-' + embed.provider_name.toLowerCase() }}
        </v-icon>
        {{ embed.provider_name }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    embed: {
      type: Object,
      default: () => null,
      required: true,
    },
  },
}
</script>
