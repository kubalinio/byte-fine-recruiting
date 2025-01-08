import { createFileRoute } from "@tanstack/react-router";

import { About } from "./-components/about";

export const Route = createFileRoute("/_app/about/")({
  component: () => <About />,
  beforeLoad: () => {
    // Set document title before the route loads
    document.title = "About | My App";
  },
});
