// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  nitro: {
    preset: "static",
  },
  modules: [
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/scripts",
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
    },
    viewer: true,
    exposeConfig: false,
  },
  app: {
    head: {
      script: [],
    },
  },
  site: {
    url: "https://cuco-lhv.de",
    name: "CUCO Lohnsteuerhilfeverein",
  },
  runtimeConfig: {
    public: {
      n8nWebhookUrl: process.env.N8N_WEBHOOK_MEMBERSHIP_URL || '',
      n8nChatWebhookUrl: process.env.N8N_CHAT_WEBHOOK_URL || '',
      n8nContactWebhookUrl: process.env.N8N_WEBHOOK_CONTACT_URL || '',
    },
  },
  scripts: {
    // registry: {
    //   googleAnalytics: {
    //     id: "G-xxx",
    //   },
    // },
  },
});
