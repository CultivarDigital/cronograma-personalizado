<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="d-flex justify-center align-center mb-8 pointer"
    @click="$router.push('/perfil')"
  >
    <div
      class="d-flex justify-center align-center mr-3"
      :style="
        'width: 67px; height: 67px; background-position: center; background: url(' +
        require('~/assets/img/bg-user.png') +
        ')'
      "
    >
      <User size="53px" />
    </div>

    <div v-if="$auth.user.name" class="primary--text" style="font-size: 24px">
      <p
        v-for="n in $auth.user.name
          .split(' ')
          .filter((name) => name.length > 3)
          .slice(0, 2)"
        :key="n"
        class="mb-0"
        style="line-height: 26px"
      >
        {{ n }}
      </p>
    </div>
  </div>
</template>
