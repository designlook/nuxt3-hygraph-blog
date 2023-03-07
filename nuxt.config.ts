const config = {
  HYGRAPH_PERMANENTAUTH_TOKEN: process.env.HYGRAPH_PERMANENTAUTH_TOKEN || "Your Hygraph permanent auth token",
  public: {
    GQL_HOST: process.env.HYGRAPH_URL || "URL to your Hygraph API endpoint",
    site: {
      name: process.env.WEBSITE_NAME || "Name of your blog",
      url: process.env.SITE_URL || "https://www.nicesharing.com",
      tagline:
        process.env.SITE_TAGLINE ||
        "Your site tagline for SEO purposes",
      title:
        process.env.SITE_TITLE ||
        "Your site title for SEO purposes",
      keywords:
        process.env.SITE_KEYWORDS ||
        "Your keywords for SEO purposes",
      description:
        process.env.SITE_DESCRIPTION ||
        "Your site description",
      about_text: process.env.ABOUT_TEXT || "<p>Et ad in minim ad. Et in fugiat velit eu ea enim est ad in. Cupidatat do cupidatat tempor enim. Amet non laborum id exercitation sit do occaecat veniam ad. Laboris commodo elit voluptate mollit quis nostrud exercitation cupidatat ullamco. Tempor esse veniam eu excepteur irure exercitation. Sit tempor amet elit elit dolore anim sunt veniam. Ipsum sint aute ad non laborum. Amet esse sit dolor amet pariatur ut ullamco est irure aliquip et reprehenderit. Commodo mollit duis culpa officia ipsum sint velit ea veniam labore id anim minim elit ipsum.</p>",
      email: process.env.EMAIL_ADDRESS || "Your email address",
      twitterUsername: process.env.TWITTER_USERNAME || "Your twitter handle",
      per_page: Number(process.env.PER_PAGE) || 15,
      google_tag: process.env.GOOGLE_TAG || "Your google analytics ID",
    },
  }
} 

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
  },

  ssr: process.env.NODE_ENV === "production",

  routeRules: {
    "/app/**": { ssr: false },
    "/svg/**": { ssr: false },
  },

  css: ["~/assets/style/main.scss"],

  components: true,

  modules: [
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "nuxt-graphql-client"
  ],
  imports: {
    dirs: ["store"],
  },
  runtimeConfig: {
    ...config
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    dir: "public",
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = "source-map"
      }
    },
  },
  plugins: ["@/plugins/vue-gtag"],
})
