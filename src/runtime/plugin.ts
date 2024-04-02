import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import { addIcons, type IconType } from 'oh-vue-icons'

export default defineNuxtPlugin((nuxtApp) => {
  const options = useRuntimeConfig()

  //#region Handle oh-vue-icons
  // Get the icons option from the runtime config
  const userIcons: Record<string, IconType> | IconType[] | undefined = options.public.vueDsfr.icons
  // If the icons option is not set, do nothing
  if (!userIcons) {
    return
  }

  // If the icons option is an array, add all icons
  if (Array.isArray(userIcons)) {
    addIcons(...userIcons)
    return
  }

  // If the icons option is an object, add all values
  if (typeof userIcons === 'object') {
    addIcons(...Object.values(userIcons))
  }
  //#endregion
})
