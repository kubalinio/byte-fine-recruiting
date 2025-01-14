import { createFileRoute } from "@tanstack/react-router"
import { Home } from "features/app/docs/feature-intro/home"

export const Route = createFileRoute("/_app/docs/_layout-docs/introduction/")({
  beforeLoad: () => {
    document.title = "Dashboard - AP2P"
  },
  component: () => <Home />
})
