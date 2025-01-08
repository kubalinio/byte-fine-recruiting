import { createFileRoute, redirect } from "@tanstack/react-router";
import { Layout } from "../features/app/layouts/layout/layout";

export const Route = createFileRoute("/_app")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/sign-in",
        replace: true,
      });
    }
  },
  component: () => <Layout />,
});
