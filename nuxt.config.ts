// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: "梁子王",
      htmlAttrs: {
        lang: "zh-Hans",
      },
    },
  },

  css: ["~/assets/css/tailwind.css"],
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["shadcn-nuxt", "@nuxtjs/supabase"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  supabase: {
    redirect: false,
  },
  compatibilityDate: "2025-04-07",
});
