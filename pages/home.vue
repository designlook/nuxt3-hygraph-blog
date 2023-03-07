<script setup>
import PostIcon from "~/components/PostIcon.vue"
import Pagination from "~/components/Pagination.vue"
import { useRouter } from "vue-router"
import { ref, watch, computed } from "vue"

const config = useRuntimeConfig()

const route = useRouter()

definePageMeta({
  name: "Home",
  title: "Home",
  description: "About page",
  keywords: "about",
  path: "/",
})

// search
const searchTerm = ref("")
const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const debouncedSearch = debounce((value) => {
  searchTerm.value = value
}, 300)

// query
const per_page = ref(config.public.site.per_page)
onMounted(() => {
  if (process.client) {
    if (window.innerHeight > 1500) {
      per_page.value = 20
    } else if (window.innerHeight > 1000 && window.innerHeight <= 1500) {
      per_page.value = 15
    } else {
      per_page.value = 10
    }
  }
})

const computed_per_page = computed(() => {
  return per_page.value
})

const offset = ref(
  Math.max(route.currentRoute.value.hash.slice(7) - 1, 0) * computed_per_page.value || 0
)
const { data } = await useAsyncGql({
  operation: "posts",
  variables: {
    per_page: computed_per_page,
    offset: offset,
    searchTerm: searchTerm || "",
  },
})

const { data: total } = await useAsyncGql({
  operation: "postsCount",
})

const totalPages = total._rawValue.postsConnection.aggregate.count

// Watch for changes to the `page` hash parameter and update the `offset` variable
watch(
  () => route.currentRoute.value,
  ({ query }) => {
    offset.value =
      Number(query.page - 1 || 0) * computed_per_page.value || 0
  }
)
</script>

<template>
  <div
    class="max-w-7xl mx-auto container flex-1 px-4 lg:px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6"
  >
    <section class="w-full md:col-span-2 flex flex-col  md:pr-20">
      <div class="flex flex-col md:flex-row justify-between border-b-2 pb-4">
        <input
          type="text"
          class="border-2 border-primary rounded-md px-4 py-2 w-full my-2 md:w-64 md:my-0"
          placeholder="Search"
          v-model="searchTerm"
        />
        <Pagination :totalPages="totalPages" :per_page="computed_per_page" :offset="offset" />
      </div>
      <div class="my-4">
        <article
          class="flex md:flex-row border-b border-b-gray-200 py-2"
          v-for="post in data?.posts"
          :key="post.id"
        >
          <PostIcon :keywords="post.keywords" />
          <div class="bg-white flex-1 md:ml-4">
            <nuxt-link
              :to="`/post/${post.slug}`"
              :key="post.title"
              class="link-primary hover:text-gray-700 text-sm"
            >
              {{ post.title }}
            </nuxt-link>
            <p href="#" class="text-xs pb-1">
              By
              <a
                :href="`//${$config.public.site.url}`"
                class="hover:text-gray-800"
                >Coder</a
              >, Published on
              {{ new Date(post.publishedAt).toLocaleDateString() }}
            </p>
          </div>
        </article>
      </div>
      <Pagination :totalPages="totalPages" :per_page="computed_per_page" :offset="offset" />
    </section>
    <aside class="w-full flex flex-col items-center">
      <aboutUs />
    </aside>
  </div>
</template>
