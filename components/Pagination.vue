<template>
  <div class="flex items-center justify-end">
    <div class="mr-8">Page</div>
    <div
      v-for="(page, index) in Array.from({
        length: Math.ceil(props.totalPages / props.per_page),
      })"
      :key="page"
    >
      <nuxt-link
        :to="`/?page=${index + 1}`"
        class="h-10 w-10 hover:bg-purple-300 hover:text-white font-semibold text-sm flex items-center justify-center"
        :class="
          props.offset / props.per_page === index
            ? 'bg-purple-600 text-white'
            : 'bg-white text-blue-600'
        "
      >
        {{ index + 1 }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPages: { type: Number },
  offset: { type: Number },
  per_page: { type: Number },
})
</script>
