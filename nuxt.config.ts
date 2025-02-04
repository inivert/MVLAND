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
        {
          name: 'description',
          content: 'Professional landscaping services in the Rhode Island Area',
        },
        { name: 'theme-color', content: '#10B981' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
  ],

  i18n: {
    baseUrl: 'http://localhost:3000',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.json',
      },
      {
        code: 'pt',
        name: 'Português',
        file: 'pt.json',
      },
    ],
    lazy: true,
    langDir: 'locales',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
    componentIslands: true,
  },

  // Image optimization and lazy loading
  image: {
    provider: 'ipx',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 80,
          loading: 'lazy',
        },
      },
    },
  },

  // Route rules for better performance
  routeRules: {
    '/': { prerender: true },
    '/**': {
      swr: true,
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },

  // Vite configuration for better chunking and lazy loading
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
            if (id.includes('components/')) {
              return 'components'
            }
            if (id.includes('pages/')) {
              return 'pages'
            }
          },
        },
      },
    },
    optimizeDeps: {
      include: ['vue'],
    },
  },

  compatibilityDate: '2025-02-02',
})
