import { createFileRoute } from "@tanstack/react-router";
import { LocationInfo } from "../../ui/locationInfo/LocationInfo";
import { SignIn } from "features/auth/feature-sign-in";
import logo from "assets/images/logo-dark.png";

export const Route = createFileRoute("/_auth/sign-in")({
  component: () => <SignInRoute />,
});

const SignInRoute = () => {
  return (
    <main>
      <figure className="mx-auto">
        <img src={logo} className="app__logo mx-auto" alt="logo" />
      </figure>

      <SignIn />

      <LocationInfo />
    </main>
  );
};

export { SignIn };
