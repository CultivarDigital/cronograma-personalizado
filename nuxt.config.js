export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cultivar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/custom.sass'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/global-mixin',
    { src: '~/plugins/persisted-state', ssr: false },
    { src: '~/plugins/vue-the-mask', ssr: false },
    '~/plugins/notifier.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/localforage',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/toast',
    [
      'nuxt-twa-module',
      {
        /* module options */
        defaultUrl: 'https://www.cultivarbrasil.com',
        hostName: 'www.cultivarbrasil.com',
        applicationId: 'com.ionicframework.plantai563575',
        launcherName: 'Cultivar',
        versionCode: 6,
        versionName: process.env.npm_package_version,
        statusBarColor: '#009d6b',
        // The sha256Fingerprints by is an array with one SHA-256 key string.
        // But if you have multiple you can add them to the array. More information about the website asociation:
        // https://developer.android.com/training/app-links/verify-site-associations#web-assoc
        sha256Fingerprints: [process.env.FINGERPRINT],
        /* optional */
        /* overwrite default location for icon */
        iconPath: '/static/icon.png',
        /* Overwrite folder where to put .wellknown */
        distFolder: '.nuxt/dist/client',
      },
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-validate',
      {
        lang: 'pt_BR',
      },
    ],
    '@nuxtjs/firebase',
  ],
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-BR',
      name: 'Cultivar Brasil',
      short_name: 'Cultivar',
    },
    meta: {
      ogHost: process.env.BASE_URL,
      ogImage: '/cultivar-cover.png',
    },
    workbox: {
      offlineAnalytics: true,
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
  },
  googleAnalytics: {
    id: 'UA-190127946-1',
  },
  localforage: {
    name: process.env.npm_package_name || 'NuxtJS',
  },
  firebase: {
    lazy: true,
    config: {
      apiKey: 'AIzaSyCxmQyvGXINVY0Gud9o481pC39eTaG6ne4',
      authDomain: 'cultivar-brasil.firebaseapp.com',
      projectId: 'cultivar-brasil',
      storageBucket: 'cultivar-brasil.appspot.com',
      messagingSenderId: '241587356737',
      appId: '1:241587356737:web:3e35ab3304b0a51f71b2c0',
      measurementId: 'G-F5H0KHPGQN',
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'setUser',
          onAuthStateChangedMutation: 'SET_AUTH_USER',
        },
      },
      storage: true,
      firestore: {
        enablePersistence: true,
      },
    },
  },
  toast: {
    duration: 7000,
    keepOnHover: true,
    theme: 'bubble',
  },
  vuetify: {
    customVariables: ['~/assets/css/variables.sass'],
    treeShake: true,
    theme: {
      light: true, // you don't actually need this line as it's for default
      themes: {
        light: {
          primary: '#009d6b',
          success: '#009d6b',
        },
      },
    },
  },
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
