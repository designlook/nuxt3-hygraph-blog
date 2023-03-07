<script setup>
import ContentRenderer from "~~/components/ContentRenderer.vue"

definePageMeta({
  name: "Post",
  title: "Post",
  description: "Post",
  keywords: "Blog",
  currentPage: "Blog",
})

const route = useRoute()

const variables = {
  slug: route.params.slug[0],
}
const { data } = await useAsyncGql({
  operation: "post",
  variables,
})
</script>

<template>
  <div class="w-full max-w-7xl mx-auto flex flex-wrap flex-1 py-6 px-2">
    <section class="w-full md:w-2/3 flex-shrink-0 flex flex-col px-6 md:pr-20">
      <h1 class="font-semibold text-2xl hover:text-gray-700 pb-4">
        {{ data?.post?.title }}
      </h1>
      <div class="flex">
        <a
          href="#"
          v-for="keyword in data?.post?.keywords"
          :key="keyword"
          class="text-blue-700 text-sm font-bold uppercase pb-2 mr-5"
          >{{ keyword }}</a
        >
      </div>
      <p class="text-sm">
        By
        <a :href="`//${$config.public.site.url}`" class="font-semibold hover:text-gray-800">Coder</a>,
        Published on
        {{ new Date(data?.post?.publishedAt).toLocaleDateString() }}
      </p>
        <ContentRenderer :content="data?.post?.content?.raw?.children" />
    </section>
    <aside class="w-full md:w-1/3 flex flex-col items-center p-4 border-2 h-64 contents-center">
      <div>SPONSOR AREA</div>
    </aside>
  </div>
</template>

<style>
.posts p {
  margin-bottom: 1rem;
}
.posts h2 {
  font-size: 1.3rem;
  font-weight: 600;
}
.posts h3 {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
