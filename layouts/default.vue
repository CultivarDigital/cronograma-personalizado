<template>
  <v-app>
    <v-navigation-drawer v-model="show_drawer" app>
      <v-list color="primary" :dark="true" nav>
        <v-list-item class="mb-0">
          <v-list-item-content class="text-center pb-0">
            <User thumb size="64" color="white" icon-color="primary" />
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
              small
              @click="$store.dispatch('showPortal')"
            >
              <v-icon left dark> mdi-login </v-icon>
              Entrar
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

    <v-app-bar app color="primary" dark hide-on-scroll>
      <v-img
        v-if="$route.path === '/'"
        title="Cultivar Brasil"
        :src="require('~/assets/img/cultivar-white.png')"
        class="mr-2"
        max-height="24px"
        max-width="24px"
      />
      <v-toolbar-title v-if="$route.path === '/'" to="/">
        <span class="text-white"> <strong>Cultivar </strong> Brasil </span>
      </v-toolbar-title>
      <v-btn
        v-if="$route.path !== '/'"
        icon
        light
        @click="$router.replace(previousPage)"
      >
        <v-icon color="white"> mdi-arrow-left </v-icon>
      </v-btn>
      <span v-if="$route.path !== '/' && currentPage">{{
        currentPage.name
      }}</span>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="show_drawer = !show_drawer" />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <OfflineMode />
      <!-- Provides the application the proper gutter -->
      <div class="pt-2">
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
      show_drawer: null,
    }
  },
  computed: {
    baseURL() {
      return process.env.baseURL
    },
    authUser() {
      return this.$store.state.authUser
    },
    species() {
      return this.$store.state.species
    },
    currentPage() {
      return this.$store.state.page
    },
    previousPage() {
      if (
        this.currentPage &&
        this.currentPage.links &&
        this.currentPage.links.length
      ) {
        return this.currentPage.links[this.currentPage.links.length - 1][1]
      }
      return '/'
    },
  },
  async created() {
    await this.initFirebase()
    await this.loadSpecies()
    await this.loadProducts()
  },
  methods: {
    async initFirebase() {
      try {
        await this.$fire.authReady()
        await this.$fire.firestoreReady()
        await this.$fire.storageReady()
        await this.checkEmailLogin()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Firebase init error: ', error)
      }
    },
    async checkEmailLogin() {
      if (this.$route.query.email_login) {
        const href = this.baseURL + this.$route.fullPath
        if (this.$fire.auth.isSignInWithEmailLink(href)) {
          // Additional state parameters can also be passed via URL.
          // This can be used to continue the user's intended action before triggering
          // the sign-in operation.
          // Get the email if available. This should be available if the user completes
          // the flow on the same device where they started it.
          let email = await this.getLocalItem('emailForSignIn')
          if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt('Please provide your email for confirmation')
          }
          // The client SDK will parse the code from the link for you.
          this.$fire.auth
            .signInWithEmailLink(email, href)
            .then((result) => {
              this.setLocalItem('emailForSignIn', null)
              this.notify('Seja bem vindo')
            })
            .catch(this.firebaseError)
        }
      }
    },
    async loadSpecies() {
      const speciesRef = await this.$fire.firestore.collection('species').get()
      const species = speciesRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      if (species) {
        this.$store.commit(
          'setSpecies',
          species.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
        )
        const filters = {
          specie_categories: this.getFilters(species, 'categories'),
          specie_stratum: this.getFilters(species, 'stratum'),
          specie_cycle: this.getFilters(species, 'cycle'),
          specie_climate: this.getFilters(species, 'climate'),
          specie_origin: this.getFilters(species, 'origin'),
          specie_height: this.getFilters(species, 'height'),
        }
        this.$store.commit('setFilters', filters)
      }
    },
    async loadProducts() {
      const productsRef = await this.$fire.firestore
        .collection('products')
        .get()
      const products = productsRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      if (products) {
        this.$store.commit('setProducts', products)
      }
    },
    getFilters(species, type) {
      const items = {}
      species.forEach((specie) => {
        if (specie[type]) {
          specie[type].forEach((item) => {
            items[item] = true
          })
        }
      })
      return Object.keys(items)
        .sort((a, b) => {
          return a.localeCompare(b)
        })
        .filter((item) => item)
    },
    editProfile() {
      this.$store.dispatch('showPortal')
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
