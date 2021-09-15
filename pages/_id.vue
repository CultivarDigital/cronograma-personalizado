<template>
  <div v-if="content">
    <Breadcrumb :active="content.title" :description="content.description" />
    <b-container fluid>
      <nuxt-content :document="content" />
    </b-container>
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
