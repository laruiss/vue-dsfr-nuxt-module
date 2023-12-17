import { defineNuxtPlugin } from '#app'

import { OhVueIcon, addIcons } from 'oh-vue-icons'

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig()

  nuxtApp.vueApp.component('VIcon', OhVueIcon)
  nuxtApp.vueApp.component('OhVueIcon', OhVueIcon)

  import('@gouvminint/vue-dsfr/styles')

  if (!options.public.vueDsfr.icons) {
    return
  }

  if (Array.isArray(options.public.vueDsfr.icons)) {
    addIcons(...options.public.vueDsfr.icons)
    return
  }

  if (typeof options.public.vueDsfr.icons === 'object') {
    addIcons(...Object.values(options.public.vueDsfr.icons))
  }
})
