// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import { commonjsDeps } from '@koumoul/vjsf/utils/build.js'

// Utilities
import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['easymde', ...commonjsDeps]
  },
  /*optimizeDeps: {
    include: commonjsDeps,
  },
  build: {
    commonjsOptions: {
      // include: commonjsDeps,
      transformMixedEsModules: true
    },
  },*/
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  build: {
    commonjsOptions: {
      // include: commonjsDeps,
      transformMixedEsModules: true
    },
    lib: {
      entry: path.resolve(__dirname, 'lib/src/index.js'),
      name: 'vjsf',
      cssFileName: 'vjsf',
      fileName: 'vjsf',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
