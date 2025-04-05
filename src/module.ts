import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-ios-webkit-active-css-pseudo',
  },
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin({
      src: resolve('./runtime/plugin'),
      mode: 'client',
    })
  },
})
