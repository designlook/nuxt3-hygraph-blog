<template>
  <div class="w-full flex flex-col">
    <p class="text-xl font-semibold pb-5">About {{ $config.public.site.name }}</p>
    <div class="text-sm" v-html="$config.public.site.about_text">
    </div>
    <NuxtLink
      :to="`mailto:${$config.public.site.email}?subject=${$config.public.site.name}`"
      class="w-full mb-8 bg-purple-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
    >
      Contact Me
    </NuxtLink>
    <a
      class="twitter-timeline"
      data-height="600"
      :href="`https://twitter.com/${$config.public.site.twitterUsername}`"
    >
    </a>
    <div id="twitter_me"></div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {
    const scriptElement = document.createElement("script")
    scriptElement.src = "https://platform.twitter.com/widgets.js"
    scriptElement.crossOrigin = "anonymous"
    scriptElement.async = true
    setTimeout(() => {
      document.getElementById("twitter_me").appendChild(scriptElement)
    }, 500)
  },
}
</script>
<style scoped>
.seo {
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
</style>
