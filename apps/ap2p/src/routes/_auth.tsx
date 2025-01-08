import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: "/dashboard",
        replace: true,
      });
    }
  },
  component: () => <AuthLayout />,
});

const AuthLayout = () => {
  return (
    <main className="grid items-center justify-center h-screen">
      <Outlet />
    </main>
  );
};
