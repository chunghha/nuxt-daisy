// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  typescript: { strict: true },
})
