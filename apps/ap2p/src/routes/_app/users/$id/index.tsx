import { createFileRoute } from "@tanstack/react-router";

import { User } from "./-components/User";
import { z } from "zod";

export const Route = createFileRoute("/_app/users/$id/")({
  component: () => <User />,
  validateSearch: (search: { id: string }) =>
    z.object({ id: z.string() }).parse(search),
});
