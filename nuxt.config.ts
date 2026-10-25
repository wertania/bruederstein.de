// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-10-01",
  devtools: { enabled: true },
  nitro: {
    preset: "static",
  },
  modules: ["@nuxtjs/sitemap", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  css: [
    "@fontsource-variable/eb-garamond",
    "@fontsource-variable/eb-garamond/wght-italic.css",
    "@fontsource-variable/inter",
    "@fontsource/pinyon-script",
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
      meta: [{ name: "theme-color", content: "#2e4a3b" }],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      script: [
        {
          // Apply the saved or preferred colour scheme before the first paint.
          innerHTML:
            "try{var d=localStorage.getItem('darkMode');if(d==='true'||(d===null&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}",
          tagPosition: "head",
        },
      ],
    },
  },
  site: {
    url: "https://bruederstein.de",
    name: "Auf Brüderstein e.V.",
  },
});
