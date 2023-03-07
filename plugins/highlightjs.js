// plugins/highlightjs.js

import VueHighlightJS from "vue3-highlightjs"

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(VueHighlightJS)
})
