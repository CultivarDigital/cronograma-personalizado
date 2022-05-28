<template>
  <v-dialog :value="true" app fullscreen persistent>
    <div>
      <Welcome v-if="!greeted" @finish="setGreeted" />
      <v-card v-else class="rounded-0 anamnese" style="min-height: 100vh">
        <div class="text-center">
          <div
            style="
              height: 80px;
              background-color: rgba(123, 163, 162, 0.4);
              margin-bottom: -40px;
            "
          ></div>
          <div class="mb-3 pa-1 rounded-circle white d-inline-block">
            <User size="80" :user="$auth.user" />
          </div>
          <br />
          {{ $auth.user.name }}
        </div>
        <ProfileForm />
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      greeted: false,
    }
  },
  methods: {
    setGreeted() {
      this.greeted = true
    },
  },
}
</script>
<style lang="scss">
.anamnese {
  min-height: 100vh;
  .upload-image,
  .upload-video {
    .v-btn {
      letter-spacing: 0 !important;
      font-size: 12px;
      padding-top: 25px;
      padding-bottom: 25px;
      width: 100%;
    }
  }
  .picture,
  .video {
    max-width: 100%;
  }
}
</style>
