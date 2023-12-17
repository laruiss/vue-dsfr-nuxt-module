import * as components from '@gouvminint/vue-dsfr'
import { defineNuxtModule, addComponent, addImports, addPlugin, createResolver } from '@nuxt/kit'
// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue-dsfr',
    configKey: 'vueDsfr'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Code pour intégrer `@gouvminint/vue-dsfr`
    for (const name in components) {
      if (name === 'default') {
        continue
      }
      if (name.startsWith('Dsfr')) { // Les composants de `@gouvminint/vue-dsfr` commencent par `Dsfr`
        addComponent({ // add component
          name,
          export: name,
          filePath: '@gouvminint/vue-dsfr',
        })
        continue
      }
      addImports({ name, as: name, from: '@gouvminint/vue-dsfr' }) // Ajoute les imports automatiques des composables
    }

}
})


