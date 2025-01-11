import { createFileRoute } from "@tanstack/react-router"
import { SignIn } from "features/auth/feature-sign-in"

export const Route = createFileRoute("/_auth/sign-in")({
  beforeLoad: () => {
    document.title = "Sign In - AP2P"
  },
  component: () => <SignIn />
})

export { SignIn }
