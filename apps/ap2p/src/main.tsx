import "./assets/styles/main.css"

import React from "react"

import { useAuth } from "@ap2p/auth"
import { Toaster } from "@ap2p/ui"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  createRouter,
  ErrorComponent,
  RouterProvider
} from "@tanstack/react-router"
import ReactDOM from "react-dom/client"

import { AppProviders } from "./providers/app-providers"
import { routeTree } from "./routeTree.gen"
import { enableMocking } from "./setupMSW"

// import { logger } from './integrations/logger';

if (import.meta.env.DEV) {
  import.meta.glob("./wdyr.ts", { eager: true })
}
const openReactQueryDevtools = import.meta.env.DEV

// if (import.meta.env.VITE_SENTRY_DSN) {
//   logger.init();
// }

// const container = document.getElementById("root")
// const root = createRoot(container as Element)

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: {
    auth: undefined!
  },
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function InnerApp() {
  const auth = useAuth()
  return (
    <RouterProvider
      router={router}
      defaultPreload='intent'
      context={{ auth }}
    />
  )
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

const rootElement = document.getElementById("root")!
const root = ReactDOM.createRoot(rootElement)
// if (rootElement.innerHTML) {
enableMocking().then(() =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
)
// }
