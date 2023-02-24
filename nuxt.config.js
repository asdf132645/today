import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - today',
    title: 'today',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  vue: {
    config: {
      devtools: true,
      productionTip: false,
    },
  },
  generate: {
    fallback: true
  },
  env:{
    apiUrl: process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000',
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Noto Sans KR'
      }
    },
    theme: {
      dark: false,
      options: {customProperties: true},
      themes: {
        dark: {
          primary: '#EC632A', // red
          accent: colors.grey.darken3,
          secondary: '#7C726E',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#D84315',
          success: colors.green.accent3,
        },
        light: {
          // primary: '#FF6F00',  // orange
          // primary: '#546E7A',  // blue gray
          // primary: '#2E7D32', // green
          // primary: '#827717',  // lime
          // primary: '#6D4C41',  // brown
          primary: '#000000', // '#D84315', // red
          accent: colors.grey.darken3,
          // secondary: '#636d49',
          // secondary: '#9e5e5e',
          // secondary: '#757575',
          secondary: '#633D2F', // '#5D4037',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#E00007', // '#D84315',
          success: colors.green.accent3,
        },
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 63007,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseWhitespace: true,  // as @dario30186 mentioned
        removeComments: true, // 👈 add this line
      },
    },
  },
}
