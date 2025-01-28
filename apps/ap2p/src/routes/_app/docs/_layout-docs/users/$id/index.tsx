import { createFileRoute } from "@tanstack/react-router"

import { z } from "zod"

import { User } from "./-components/User"

export const Route = createFileRoute("/_app/docs/_layout-docs/users/$id/")({
  component: () => <User />,
  validateSearch: (search: { id: string }) =>
    z.object({ id: z.string() }).parse(search)
})
