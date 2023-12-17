import * as icons from './icons'
// import '@gouvfr/dsfr/dist/utility/utility.main.min.css'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      vueDsfr: {
        icons: Object.values(icons),
      }
    },
  },
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css',
    '@gouvfr/dsfr/dist/component/component.main.min.css',
    '@gouvfr/dsfr/dist/utility/utility.main.min.css',
    '@gouvfr/dsfr/dist/scheme/scheme.min.css',
    '@gouvfr/dsfr/dist/utility/icons/icons.main.min.css',
  ],
  modules: ['../src/module'],
  devtools: { enabled: true }
})
