<template>
  <footer class="max-w-7xl mx-auto container border-t-2 text-gray-600 text-xs mt-8">
    <div
      class="hidden py-4 lg:block mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div
        class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first"
      >
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            FOOTER CONTENT COLUMN
          </h2>
          <nav class="list-none mb-10">
            <li class="inline-block mr-4">
              <a class="text-gray-600 hover:text-gray-800">Content List</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            FOOTER CONTENT COLUMN
          </h2>
          <nav class="list-none mb-10">
            <li class="inline-block mr-4">
              <a class="text-gray-600 hover:text-gray-800">Content List</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2
            class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
          >
            FOOTER CONTENT COLUMN
          </h2>
          <nav class="list-none mb-10">
            <li class="inline-block mr-4">
              <a class="text-gray-600 hover:text-gray-800">Content List</a>
            </li>
          </nav>
        </div>

        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <p class="mt-2 text-xs text-gray-500">
            Footer Text
          </p>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
    >
      <p class="text-gray-500 text-sm text-center sm:text-left">
        © {{ new Date().getFullYear() }} {{ $config.public.site.url }}, All
        Rights Reserved |
        <a
          href="/privacy-terms"
          rel="noopener noreferrer"
          class="text-gray-600 ml-1"
          target="_blank"
          >Privacy Policy</a
        >
        |
        <a
          href="/privacy-terms"
          rel="noopener noreferrer"
          class="text-gray-600 ml-1"
          target="_blank"
          >Terms and Conditions</a
        >
      </p>
      <span
        class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
      >
        <a
          :href="`https://twitter.com/${$config.public.site.twitterUsername}`"
          class="ml-3 text-gray-500"
        >
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
            ></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>
