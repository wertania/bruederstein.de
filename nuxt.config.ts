// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-10-01",
  devtools: { enabled: true },
  nitro: {
    preset: "static",
  },
  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    exposeConfig: false,
  },
  icon: {
    // Bundle the icons into the page; a static site has no icon API to ask.
    serverBundle: false,
    clientBundle: { scan: true },
  },
  app: {
    head: {
      htmlAttrs: { lang: "de" },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  site: {
    url: "https://bruederstein.de",
    name: "Auf Brüderstein e.V.",
  },
});
