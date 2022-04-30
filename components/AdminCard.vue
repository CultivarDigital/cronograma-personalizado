<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="mb-8 pointer" @click="$router.push('/perfil')">
    <div
      class="d-flex justify-center align-center mr-3"
      :style="
        'width: 67px; height: 67px; background-position: center; background: url(' +
        require('~/assets/img/bg-user.png') +
        '); float: left;'
      "
    >
      <User size="53px" />
    </div>

    <div
      v-if="$auth.user.name"
      class="primary--text"
      style="font-size: 18px; width: 100%"
    >
      <div class="d-flex align-center" style="min-height: 67px">
        <p class="mb-0" style="line-height: 20px">
          <span style="font-weight: 500"> {{ $auth.user.name }}</span>
          <br />
          <small>(Admin)</small>
        </p>
      </div>
    </div>
  </div>
</template>
