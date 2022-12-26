import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
  vite: {
    define: {
      BASE_URL: JSON.stringify(process.env.BASE_URL),
    },
  },
  css: ['~/assets/styles/index.scss'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
