<template>
  <div>
    <v-app>
      <BottomNavigation />
      <DrawerNavigation />
      <v-main>
        <!-- <Anamnese
          v-if="
            $auth.user.role !== 'admin' &&
            (!$auth.user.status || $auth.user.status === 'created')
          "
        /> -->
        <Nuxt />
      </v-main>
      <Snackbar />
    </v-app>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
<style lang="scss">
.template-form {
  h3 {
    background-color: rgba(238, 96, 94, 0.8);
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    text-align: center;
  }
  .ccp-options {
    text-align: center;
    margin-bottom: 20px;
    touch-action: none;
  }
  .ccp-option {
    display: inline-block;
    background-color: rgba(238, 96, 94, 0.8);
    color: #fff;
    text-align: center;
    padding: 6px 12px;
    border-radius: 6px;
    margin-left: 3px;
    margin-right: 3px;
    font-weight: bold;
    font-size: 24px;
    cursor: move;
    &.H {
      background-color: rgba(238, 96, 94, 1);
    }
    &.N {
      background-color: rgba(238, 96, 94, 0.8);
    }
    &.R {
      background-color: rgba(238, 96, 94, 0.6);
    }
    &.U {
      background-color: rgba(123, 163, 162, 0.6);
    }
  }
  .months {
    text-align: center;
    h4 {
      background-color: rgba(123, 163, 162, 0.2);
      color: #7ba3a2;
      margin-bottom: 15px;
      padding: 5px;
      text-align: center;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .week {
    p {
      color: #7ba3a2;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .week-input {
      border: 1px solid #a9a9a9;
      border-radius: 8px;
      width: 100%;
      min-height: 50px;
      margin-bottom: 15px;
      padding: 5px;
    }
  }
}
</style>
