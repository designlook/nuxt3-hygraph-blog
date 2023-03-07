<script setup>
import { useI18n } from "vue-i18n"
import { useLocalStorage } from "~/composables/useLocalStorage"

const config = useRuntimeConfig();
const { locale } = useI18n()
useHead({
  title: config.public.site.title,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content: config.public.site.description
        
    },
    {
      name: "keywords",
      content: config.public.site.keywords
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
})

const theme = ref("light")

onMounted(() => {
  const userLocale = useLocalStorage().get("locale")
  const userTheme = useLocalStorage().get("theme")
  userTheme ? (theme.value = userTheme) : "dark"
})
</script>

<template>
  <Html :data-theme="theme">
    <Body class="bg-primary m-0 p-0 text-primary overflow-x-hidden">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
