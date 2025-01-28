import { createFileRoute } from "@tanstack/react-router"

import { Layout } from "features/app/layouts/layout/layout"

export const Route = createFileRoute("/_app/docs/_layout-docs")({
  component: () => <Layout />
})
