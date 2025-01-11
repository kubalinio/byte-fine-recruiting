import React from "react"

import { useAuth } from "@ap2p/auth"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { createRoot } from "react-dom/client"

import { routeTree } from "./routeTree.gen"

import "./assets/styles/main.css"

import { Toaster } from "@ap2p/ui"

import { AppProviders } from "./providers/app-providers"
import { enableMocking } from "./setupMSW"

// import { logger } from './integrations/logger';

if (import.meta.env.DEV) {
  import.meta.glob("./wdyr.ts", { eager: true })
}
const openReactQueryDevtools = import.meta.env.DEV

// if (import.meta.env.VITE_SENTRY_DSN) {
//   logger.init();
// }

const container = document.getElementById("root")
const root = createRoot(container as Element)

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    auth: undefined!
  }
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function InnerApp() {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ auth }} />
}

function App() {
  return (
    <AppProviders>
      <InnerApp />

      <Toaster />

      {openReactQueryDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </AppProviders>
  )
}
enableMocking().then(() => root.render(<App />))
