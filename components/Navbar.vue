<script setup>
</script>
<template>
  <div class="w-full border-b-2">
    <div
      class="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between sm:items-stretch py-4"
    >
      <NuxtLink 
        to="/" 
        class="flex items-center ml-4"
        :title="$config.public.site.name"
        >
        <NuxtImg
          class="w-10 h-10"
          :src="`img/logo.svg`"
          :alt="$config.public.site.name"
          aria-hidden="true"
        />
        <h1 class="text-md font-bold text-primary ml-2">
          {{ $config.public.site.name }}
        </h1>
      </NuxtLink>
      <div
        class="text-xs items-center flex text-gray-400 px-4 mt-4 lg:px-0 lg:mt-0"
      >
        {{ $config.public.site.tagline }}
      </div>
    </div>
  </div>
</template>
