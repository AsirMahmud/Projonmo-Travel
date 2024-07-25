// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  googleFonts: {
    families: {
      Roboto: [400, 900],
    },
  },
  css: ["~/assets/css/tailwind.css", "swiper/swiper-bundle.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-swiper",
  ],
});
