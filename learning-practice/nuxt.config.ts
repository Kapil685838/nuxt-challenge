// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $production: {
    routeRules: {
      // '/**': { isr: true }
    }
  },
  $development: {
    //
  },

  // Environment Variables and Private Tokens
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  // Vue Configuration
  // With Vite
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  // With webpack
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  // Enabling Experimental Vue Features
  vue: {
    defineModel: true,
    propsDestructure: true
  }
})
