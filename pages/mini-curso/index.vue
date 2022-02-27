<template>
  <div>
    <TopNavigation active="Mini curso" />
    <div class="text-center">
      <img
        class="mt-n6"
        src="~/assets/img/mini-curso.png"
        alt="Mini curso"
        style="max-width: 100%"
      />
    </div>
    <v-list>
      <template v-for="(video, i) in playlist">
        <v-list-item :key="i" class="primary--text">
          <v-list-item-content>
            <div class="px-6">
              <p class="mb-1">{{ i }}. {{ video.title }}</p>
              <p
                class="font-weight-black mb-0"
                style="color: rgba(123, 163, 162, 0.6)"
              >
                {{ video.duration }}
              </p>
            </div>
          </v-list-item-content>
          <v-list-item-action>
            <img
              :src="require('~/assets/img/' + video.status + '.png')"
              :alt="video.status"
            />
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
      tab: 4,
      playlist: [
        {
          title: 'Como lavar o cabelo',
          duration: '10:59',
          status: 'played',
        },
        {
          title: 'Como fazer umectação',
          duration: '4:25',
          status: 'waiting',
        },
        {
          title: 'Aplicando máscara corretamente',
          duration: '5:40',
          status: 'playing',
        },
        {
          title: 'Como aplicar o leave-in',
          duration: '8:47',
          status: 'waiting',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>
