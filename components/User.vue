<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="d-inline-block pointer">
    <v-avatar
      v-if="profile && profile.picture"
      :size="size"
      :color="color"
      @click="userClicked"
    >
      <CachedImage
        avatar
        :title="profile.name"
        :alt="profile.name"
        :src="profile.picture"
        :size="size"
        :color="color"
        :thumb="thumb"
      />
    </v-avatar>
    <v-avatar v-else :color="color" :size="size" @click="userClicked">
      <v-icon :color="iconColor" :size="size / 2" dark> mdi-account </v-icon>
    </v-avatar>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <div class="text-center pt-6 px-3">
          <v-avatar v-if="profile && profile.picture" size="64" class="mr-3">
            <CachedImage
              avatar
              :title="profile.name"
              :alt="profile.name"
              :src="profile.picture"
              size="64"
              thumb
            />
          </v-avatar>
          <v-avatar v-else color="primary" size="64">
            <v-icon size="32" dark> mdi-account </v-icon>
          </v-avatar>
          <h5 class="text-h5">{{ profile.name }}</h5>
          <p v-if="profile.region" class="text-subtitle">
            <small v-if="profile.city && profile.uf">
              ({{ [profile.city, profile.uf].join(' - ') }})
            </small>
            <small v-else-if="profile.region">({{ profile.region }})</small>
          </p>
          <p v-if="profile.bio">{{ profile.bio }}</p>
          <p>
            <v-btn v-if="sameUser" @click="$store.dispatch('showPortal')">
              <v-icon left>mdi-account-edit</v-icon> Editar perfil
            </v-btn>
            <!-- <v-btn v-else :to="'/mensagens/' + profile._id">
              <v-icon left>mdi-send</v-icon> Enviar mensagem
            </v-btn> -->
          </p>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Fechar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
    user: {
      type: Object,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'primary',
    },
    iconColor: {
      type: String,
      default: null,
    },
    thumb: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
      profile: null,
    }
  },
  computed: {
    sameUser() {
      return (
        this.$auth.user &&
        this.profile &&
        this.profile._id &&
        this.$auth.user.id === this.profile._id
      )
    },
  },
  watch: {
    '$auth.user'() {
      this.setProfile()
    },
  },
  created() {
    this.setProfile()
  },
  methods: {
    setProfile() {
      if (this.user) {
        this.profile = this.user
      } else {
        this.profile = this.$auth.user
      }
    },
    userClicked() {
      // eslint-disable-next-line no-console
      console.log(this.profile)
      this.dialog = true
    },
  },
}
</script>
