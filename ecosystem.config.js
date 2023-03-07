module.exports = {
  apps: [
    {
      name: "nuxt3-hygraph-blog",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
