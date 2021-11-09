export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
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
    '~/plugins/db.js',
    '~/plugins/moment.js',
    '~/plugins/axios.js',
    '~/plugins/linkify.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    '@nuxtjs/localforage',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
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
    '@nuxtjs/auth-next',
    [
      'nuxt-validate',
      {
        lang: 'pt_BR',
      },
    ],
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
      ogImage: '/cultivar-cover.jpeg',
    },
    workbox: {
      offlineStrategy: 'StaleWhileRevalidate',
      offlineAnalytics: true,
      runtimeCaching: [
        { urlPattern: 'https://fonts.googleapis.com/.*' },
        { urlPattern: 'https://cdn.jsdelivr.net/.*' },
      ],
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
  vuetify: {
    customVariables: ['~/assets/css/variables.sass'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#009d6b',
          secondary: '#197abb',
        },
      },
    },
  },
  moment: {
    defaultTimezone: 'America/Sao_Paulo',
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3000',
  },
  auth: {
    redirect: false,
    strategies: {
      local: {
        token: {
          property: 'token.accessToken',
          // required: true,
          type: 'Bearer',
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/v1/auth/firebase', method: 'post' },
          logout: false,
          user: { url: '/v1/users/profile', method: 'get' },
        },
      },
    },
    scopeKey: 'role',
  },
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL || 'http://localhost:5000',
    npm_package_description: process.env.npm_package_description || '',
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
