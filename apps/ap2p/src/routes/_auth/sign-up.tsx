import { createFileRoute } from "@tanstack/react-router"

import { SignUp } from "features/auth/feature-sign-up"

export const Route = createFileRoute("/_auth/sign-up")({
  beforeLoad: () => {
    document.title = "Sign Up - AP2P"
  },
  component: () => <SignUp />
})
