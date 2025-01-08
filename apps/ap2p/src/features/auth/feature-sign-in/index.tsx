import { useAuth } from "@ap2p/auth";
import { SignInForm } from "./form";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

const SignIn = () => {
  const { login, isAuthenticated, isAuthenticating } = useAuth();

  const onSubmit = (data: any) => {
    login({ password: "react-starter", username: "mqs" });
  };

  const navigate = useNavigate({ from: "/sign-in" });

  useEffect(() => {
    if (isAuthenticated) {
      navigate({
        to: "/dashboard",
        replace: true,
      });
    }
  }, [isAuthenticated]);

  return (
    <section className="container max-w-md mx-auto">
      <h2>Sign In</h2>

      <p>
        This is a starter project for MQS React application. Click on navigation
        links above to learn more.
      </p>

      <hr />

      <SignInForm
        isLoading={isAuthenticating}
        isSubmitted={isAuthenticated}
        onSubmit={onSubmit}
      />
    </section>
  );
};

export { SignIn };
