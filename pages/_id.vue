<template>
  <div v-if="content">
    <Breadcrumb :active="content.title" :description="content.description" />
    <v-container fluid>
      <nuxt-content :document="content" />
    </v-container>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, route }) {
    const content = await $content(route.params.id).fetch()
    return {
      content,
    }
  },
}
</script>
