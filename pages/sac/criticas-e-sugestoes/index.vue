<template>
  <div>
    <TopNavigation active="SAC" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Críticas e sugestões" />
      </div>
    </v-container>
    <FeedbackList v-if="$auth.user.role === 'admin'" />
    <FeedbackForm v-else @saved="$router.replace('/dashboard')" />
  </div>
</template>
