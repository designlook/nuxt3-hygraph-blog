<h3 align="center">
  Nuxt3 + Hygraph Blog Site Example
</h3>

<p align="center">
  Build a blog site using Nuxt3 and Hygraph
</p>

## Features
- [Tailwind CSS](https://tailwindcss.com/)
- [Hygraph Headless CMS](https://hygraph.com/)
- [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [vue3-highlightjs](https://github.com/Daizhen1995/vue3-highlightjs) Code highlighting
- [vue-gtag](https://github.com/MatteoGabriele/vue-gtag) Google Analytics
- [Material Fonts & Icons](https://fonts.googleapis.com/css?family=Roboto+Mono|Material+Icons|Material+Icons+Round) Material Fonts and Icons
- [Nuxt3 Starter](https://github.com/HugoRCD) Hugo Richard

## Getting Started

You will need a Hygraph account to get started.

1. Go to https://hygraph.com/ and sign up for a free account
2. Go to Project Settings -> API access to get your API endpoint
3. Update nuxt.config.ts and replace <GQL_HOST> with your API key
4. Update the other site settings on nuxt.config.ts


nuxt.config.ts

```
runtimeConfig: {
  public: {
    GQL_HOST: process.env.GQL_HOST || 
      "Your Hygraph API key",
    site: {
      name: process.env.WEBSITE_NAME || "Name of your blog",
      url: process.env.SITE_URL || "URL of your site ie: www.yoursite.com",
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
      email: process.env.EMAIL_ADDRESS || "Your email address",
      twitterUsername: process.env.TWITTER_USERNAME || "Your twitter handle",
      per_page: process.env.PER_PAGE || 15,
    },
  },
},
```


## Quick Start

### Install dependencies
```
yarn
```
### Run locally
```
yarn dev
```
### Generate site map
```
yarn generate
```

## Hosting your Site

I recommend starting with a FREE Netlify account (https://www.netlify.com).