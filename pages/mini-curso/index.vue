<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <TopNavigation active="Mini curso" />
    <div v-if="playVideo" class="text-center">
      <div class="video-player">
        <iframe
          :title="playVideo.name"
          :src="playVideo.player_embed_url"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <v-list>
      <template v-for="(video, i) in videos">
        <v-list-item :key="i" class="primary--text" @click="playVideo = video">
          <v-list-item-content>
            <div class="px-6">
              <p class="mb-1">{{ i }}. {{ video.name }}</p>
              <p
                class="font-weight-black mb-0"
                style="color: rgba(123, 163, 162, 0.6)"
              >
                {{ toTimeString(video.duration) }}
              </p>
            </div>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon
              v-if="playVideo && playVideo.uri === video.uri"
              color="primary"
              >mdi-play-circle</v-icon
            >
            <v-icon v-else color="primary">mdi-play-circle-outline</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider :key="'divider-' + i" class="my-2" />
      </template>
    </v-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videos: null,
      playVideo: null,
    }
  },
  async created() {
    this.videos = await this.$axios.$get('/v1/videos')
    if (this.videos && this.videos.length) {
      this.playVideo = this.videos[0]
    }
  },
  methods: {
    toTimeString(seconds) {
      if (seconds) {
        let formated = new Date(seconds * 1000)
          .toUTCString()
          .match(/(\d\d:\d\d:\d\d)/)[0]

        if (formated.startsWith('00:')) {
          formated = formated.substring(3)
        }
        return formated
      }
    },
  },
}
</script>
<style lang="scss">
.video-player iframe {
  width: 100%;
  height: calc(55vw);
}
</style>
