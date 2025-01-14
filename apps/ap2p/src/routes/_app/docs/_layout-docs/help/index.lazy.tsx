import { createLazyFileRoute } from "@tanstack/react-router"

import { Help } from "./-components/Help"

export const Route = createLazyFileRoute("/_app/docs/_layout-docs/help/")({
  component: () => <Help />
})
