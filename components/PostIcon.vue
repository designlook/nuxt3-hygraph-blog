<template>
  <div
    class="flex flex-none w-12 h-12 mr-2 justify-center"
    :class="`${bgColor} ${color}`"
  >
    <template v-if="svg" class="self-center border-2" :class="size">
      <NuxtImg class="border-2" :src="`img/${svg}`" alt="illustration" aria-hidden="true" />
    </template>
    <span v-else class="material-icons self-center" :class="size">{{
      icon
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const props = defineProps({
  keywords: { type: Array },
})
const icon = ref("")
const size = ref("text-4xl")
const bgColor = ref("bg-yellow-300")
const color = ref("text-black")
const svg = ref("")

if (JSON.stringify(props.keywords).includes("design")) {
  icon.value = "diamond"
  size.value = "text-2xl"
  bgColor.value = "bg-green-500"
  color.value = "text-white"
} else if (JSON.stringify(props.keywords).includes("coding")) {
  icon.value = "code"
  size.value = "text-1xl"
  bgColor.value = "bg-pink-500"
  color.value = "text-white"
} else if (JSON.stringify(props.keywords).includes("vue")) {
  svg.value = "vue.svg"
  size.value = "text-1xl"
  bgColor.value = "bg-white-500"
} else if (JSON.stringify(props.keywords).includes("hygraph")) {
  svg.value = "hygraph.svg"
  size.value = "text-1xl"
  bgColor.value = "bg-white-500"
} else if (JSON.stringify(props.keywords).includes("tailwind")) {
  svg.value = "tailwind-svgrepo-com.svg"
  size.value = "text-1xl"
  bgColor.value = "bg-white-500"
} else if (JSON.stringify(props.keywords).includes("nuxt")) {
  svg.value = "nuxt-svgrepo-com.svg"
  size.value = "text-1xl"
  bgColor.value = "bg-white-500"
} else {
  icon.value = "javascript"
}
</script>
