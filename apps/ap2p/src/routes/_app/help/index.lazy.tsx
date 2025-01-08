import { createLazyFileRoute } from "@tanstack/react-router";

import { Help } from "./-components/Help";

export const Route = createLazyFileRoute("/_app/help/")({
  component: () => <Help />,
});
