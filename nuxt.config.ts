// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'M.V Landscaping',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional landscaping services in the Boston Metropolitan Area' },
        { name: 'theme-color', content: '#10B981' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  experimental: {
    inlineSSRStyles: false,
    viewTransition: true,
    renderJsonPayloads: true,
  },
  routeRules: {
    '/': { prerender: true },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            group1: [
              './components/WorkShowcase.vue',
              './components/TestimonialsCarousel.vue',
            ],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['vue'],
    },
  },
})
