import * as path from "node:path"
import { fileURLToPath } from "node:url"

import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin"
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  root: __dirname,
  cacheDir: "../../../node_modules/.vite/libs/shared/ui",
  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.json")
    }),
    react({
      jsxImportSource: "@welldone-software/why-did-you-render"
    }),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(["*.md"])
  ],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      entry: "src/index.ts",
      name: "router",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@tanstack/react-query",
        "@tanstack/react-router"
      ]
    }
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../../coverage/libs/shared/ui",
      provider: "v8"
    }
  }
})
