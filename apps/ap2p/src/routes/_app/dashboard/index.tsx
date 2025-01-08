import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../../../features/app/feature-dashboard/home";

export const Route = createFileRoute("/_app/dashboard/")({
  component: () => <Home />,
});
