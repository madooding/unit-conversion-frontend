import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/index.scss'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
