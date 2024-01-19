import tailwindTypography from '@tailwindcss/typography'
import daisyui from 'daisyui'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  debug: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  googleFonts: {
    families: {
      Inter: true,
      Poppins: true,
      FiraMono: true,
    },
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography, daisyui],
    },
  },
  typescript: { strict: true },
})
