const esbuild = require('esbuild')
const path = require('path')

// Helper function to resolve paths relative to the repo root
const resolvePath = (p) => path.resolve(__dirname, p)

// Define entry points for your workspaces
const libEntry = resolvePath('lib/src/index.js')

// Output directory for the browser build
const outDir = resolvePath('dist/browser')

// Function to build the workspace for browser usage
const buildWorkspaceForBrowser = (entryPoint, outDir) => {
  return esbuild.build({
    entryPoints: [entryPoint],
    bundle: true,                   // Bundle all dependencies into a single file
    outfile: path.join(outDir, 'vjsf.bundle.js'),  // Output to the browser-friendly bundle file
    platform: 'browser',            // Set platform to 'browser'
    target: ['es2020'],             // Set target JavaScript version for modern browsers
    globalName: 'Vjsf',             // Expose `Vjsf` as a global variable
    loader: {
      '.vue': 'text',               // Treat `.vue` files as raw text (will be handled by the loader)
    },
    external: ['vue'],              // Exclude Vue from the bundle (Vue should be included as a CDN)
    minify: true,                   // Minify the output to reduce size
    sourcemap: true,                // Generate source maps for debugging
    format: 'iife',                 // Format for browser compatibility (IIFE = Immediately Invoked Function Expression)
  }).then(() => {
    console.log('Browser build completed!')
  }).catch((err) => {
    console.error('Build failed for browser output', err)
    process.exit(1)
  })
}

// Run the build for the browser output
buildWorkspaceForBrowser(libEntry, outDir)
