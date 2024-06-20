// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: false },
  css: ['~/assets/css/vello.css'],
  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt'],
  ssr: false // Désactivation du rendu côté serveur
})
 