import VueGtag from "vue-gtag"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: nuxtApp.$config.public.site.google_tag,
      },
    },
    nuxtApp.$router
  )
})
