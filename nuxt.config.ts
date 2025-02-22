import tailwindTypography from '@tailwindcss/typography'
import tailwindcss from '@tailwindcss/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  debug: true,

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxtjs/google-fonts', '@pinia/nuxt', '@vueuse/nuxt'],

  googleFonts: {
    families: {
      Inter: true,
      Poppins: true,
      FiraMono: true,
    },
  },

  vite: {
    plugins: [tailwindcss(), tailwindTypography],
  },
  css: ['~/assets/css/main.css'],
  typescript: { strict: true },
  compatibilityDate: '2025-02-22',
})
