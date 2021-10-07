<template>
  <v-app>
    <v-navigation-drawer :value="showDrawer" app @input="toggleDrawer">
      <v-list color="primary" :dark="true" nav>
        <v-list-item class="mb-0">
          <v-list-item-content class="text-center pb-0">
            <User
              v-if="authUser"
              thumb
              size="64"
              color="white"
              icon-color="primary"
            />
            <div v-else>
              <v-img
                title="Cultivar Brasil"
                :src="require('~/assets/img/cultivar-white.png')"
                class="ma-auto mb-3"
                max-height="64px"
                max-width="64px"
                left
              />
              <p class="text-white mb-1"><strong>Cultivar </strong> Brasil</p>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="authUser"
          link
          @click="$store.dispatch('showPortal')"
        >
          <v-list-item-content>
            <v-list-item-title v-if="authUser.displayName" class="text-h6">
              {{ authUser.displayName }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ authUser.email }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-chevron-down</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item v-else class="mb-3 d-flex justify-center">
          <div>
            <v-btn
              outlined
              color="white"
              class="mt-3"
              @click="$store.dispatch('showPortal')"
            >
              <v-icon left dark> mdi-login </v-icon>
              Acesse sua conta
            </v-btn>
          </div>
        </v-list-item>
      </v-list>
      <v-list nav dense class="pb-0 mt-3">
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <SidebarMenu />
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <div>
        <OfflineMode />
        <Nuxt />
        <div class="text-center mobile-footer">
          <v-divider />
          <br />
          <Footer />
        </div>
      </div>
    </v-main>
    <Portal />
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      caching: false,
      imported: [],
    }
  },
  computed: {
    showDrawer() {
      return this.$store.state.showDrawer
    },
    baseURL() {
      return process.env.BASE_URL
    },
    authUser() {
      return this.$store.state.authUser
    },
    species() {
      return this.$store.state.species
    },
  },
  created() {
    this.$db.getUser()
    this.loadSpecies()
    this.checkEmailLogin()
  },
  methods: {
    loadSpecies() {
      if (!this.species || !this.species.length) {
        this.$db
          .getList('species')
          .then((species) => {
            this.$store.dispatch('setSpecies', species)
          })
          .catch(this.$notifier.dbError)
      }
    },
    editProfile() {
      this.$store.dispatch('showPortal')
    },
    checkEmailLogin() {
      if (this.$route.query.email_login) {
        const href = this.baseURL + this.$route.fullPath
        this.$db
          .validateLoginWithEmail(href)
          .then(() => {
            this.$notifier.success('Seja bem vindo')
          })
          .catch(this.$notifier.dbError)
      }
    },
    toggleDrawer(status) {
      console.log(this.showStatus, status)
      this.$store.dispatch('toggleDrawer', status)
    },
    // async importSpecies() {
    //   this.imported = []
    //   for (const specie of this.species) {
    //     const newSpecie = { ...specie }
    //     const id = newSpecie.slug
    //     console.log('Importando ' + this.imported.length + ' - ' + id)
    //     delete newSpecie._id
    //     delete newSpecie.slug
    //     delete newSpecie.createdAt
    //     delete newSpecie.updatedAt

    //     const images = []
    //     for (const image of newSpecie.images.filter(
    //       (img) => img.url !== '/api/uploads/images/species/www.jardineiro.net'
    //     )) {
    //       await this.uploadImage(image.thumb)
    //       images.push(await this.uploadImage(image.url))
    //     }
    //     newSpecie.images = images
    //     this.$fire.firestore.collection('species').doc(id).set(newSpecie)
    //     this.imported.push(id)
    //   }
    // },
    // async uploadImage(url) {
    //   const fileToSave = await axios.get(url, {
    //     responseType: 'blob',
    //   })
    //   const file = fileToSave.data
    //   const imageRef = this.$fireModule
    //     .storage()
    //     .ref(url.replace('/api/uploads/', ''))
    //   await imageRef.put(file)
    //   const downloadURL = new URL(await imageRef.getDownloadURL())
    //   downloadURL.searchParams.delete('token')
    //   return downloadURL.toString()
    // },
  },
}
</script>
