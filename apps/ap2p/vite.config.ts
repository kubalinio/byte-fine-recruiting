/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgrPlugin from "vite-plugin-svgr";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { fileURLToPath } from "node:url";
import * as path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  root: __dirname,
  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__dirname, "tsconfig.json"),
    }),
    react({
      jsxImportSource: "@welldone-software/why-did-you-render",
    }),
    nxViteTsPaths(),
    // viteTsconfigPaths(),
    svgrPlugin(),
    nxCopyAssetsPlugin(["*.md"]),
    TanStackRouterVite({
      routesDirectory: path.join(__dirname, "src/routes"),
    }),
  ],
  cacheDir: "../../node_modules/.vite/apps/ap2p",
  server: {
    port: 4200,
    host: "localhost",
  },
  preview: {
    port: 4300,
    host: "localhost",
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: "./build/ap2p",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/apps/ap2p",
      provider: "v8",
    },
  },
});
