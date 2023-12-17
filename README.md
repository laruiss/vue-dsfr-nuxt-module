<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: vue-dsfr-nuxt-module
- Description: My new Nuxt module
-->

# Module VueDsfr pour Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Ce module facilite l’utilisation de la bibliothèque VueDsfr dans un projet Nuxt 3.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/vue-dsfr-nuxt-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- 🪄 &nbsp;Imports automagique des imports des composables VueDsfr
- 🪄 &nbsp;Imports automagique des imports des composants VueDsfr
- ✨ &nbsp;Facilitation de l’utilisation des icônes de [Oh, Vue Icons](https://oh-vue-icons.netlify.app/)

## Configuration rapide

1. Ajouter la dépendance `vue-dsfr-nuxt-module` au projet

```bash
# Using pnpm
pnpm add -D vue-dsfr-nuxt-module

# Using yarn
yarn add --dev vue-dsfr-nuxt-module

# Using npm
npm i -D vue-dsfr-nuxt-module
```

2. Ajouter `vue-dsfr-nuxt-module` dans la section `modules` de `nuxt.config.ts`

```ts{3}
export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ]
})
```

3. Ajouter le CSS de DSFR dans la section `css` de `nuxt.config.ts`

```ts{5-12}
export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ],
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css',           // Le CSS minimal du DSFR
    '@gouvfr/dsfr/dist/component/component.main.min.css'  // Styles de tous les composants du DSFR
    '@gouvfr/dsfr/dist/utility/utility.main.min.css'      // Classes utilitaires : les composants de VueDsfr en ont besoin

    '@gouvfr/dsfr/dist/scheme/scheme.min.css'             // Facultatif : Si les thèmes sont utilisés (thème sombre, thème en bernes)
    '@gouvfr/dsfr/dist/utility/icons/icons.min.css',      // Facultatif : Si des icônes sont utilisées avec les classes "fr-icon-..."
  ],
})
```

4. Facultatif : ajouter les icônes à utiliser avec OhVueIcon

```ts{5-12}
import * as icons from './icons'

export default defineNuxtConfig({
  modules: [
    'vue-dsfr-nuxt-module'
  ],
  css: [
    '@gouvfr/dsfr/dist/core/core.main.min.css',           // Le CSS minimal du DSFR
    '@gouvfr/dsfr/dist/component/component.main.min.css'  // Styles de tous les composants du DSFR
    '@gouvfr/dsfr/dist/utility/utility.main.min.css'      // Classes utilitaires : les composants de VueDsfr en ont besoin

    '@gouvfr/dsfr/dist/scheme/scheme.min.css'             // Facultatif : Si les thèmes sont utilisés (thème sombre, thème en bernes)
    '@gouvfr/dsfr/dist/utility/icons/icons.min.css',      // Facultatif : Si des icônes sont utilisées avec les classes "fr-icon-..."
  ],
  runtimeConfig: {
    public: {
      vueDsfr: {
        icons: Object.values(icons),
      }
    },
  },
})
```

```ts
export {
  RiFlagLine,
  RiHome2Line,
} from 'oh-vue-icons/icons'
```

Et voilà ! Vous êtes prêts à utiliser VueDsfr dans votre app Nuxt ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/vue-dsfr-nuxt-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/vue-dsfr-nuxt-module

[npm-downloads-src]: https://img.shields.io/npm/dm/vue-dsfr-nuxt-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/vue-dsfr-nuxt-module

[license-src]: https://img.shields.io/npm/l/vue-dsfr-nuxt-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/vue-dsfr-nuxt-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
