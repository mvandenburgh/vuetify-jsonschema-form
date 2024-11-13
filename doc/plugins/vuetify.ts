import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors.mjs'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {
      global: {
        density: 'comfortable'
      }
    },
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.cyan.darken1,
            accent: colors.cyan.accent3
          }
        },
        dark: {
          dark: true,
          colors: {
            surface: '#000000',
            primary: colors.cyan.lighten5
          }
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
