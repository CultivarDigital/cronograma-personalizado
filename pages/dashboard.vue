<template>
  <div>
    <div v-if="$auth.user && $auth.user.role === 'admin'">
      <TopNavigation active="Painel administrativo" />
      <DashboardAdmin />
    </div>
    <div v-else>
      <TopNavigation active="Perfil" />
      <DashboardUser />
    </div>
  </div>
</template>
