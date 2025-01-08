import { Button, Form } from "@ap2p/ui";
import { useForm } from "react-hook-form";
import {
  ControlledInputField,
  ControlledPasswordField,
} from "../../shared/components/form-fields";

type SignInFormProps = {
  onSubmit: (data: any) => void;
  isLoading: boolean;
  isSubmitted: boolean;
};

type SignInFormValues = {
  email: string;
};

const SignInForm = ({ onSubmit, isLoading, isSubmitted }: SignInFormProps) => {
  const form = useForm<SignInFormValues>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <ControlledInputField name="email" label="Email" />

        <ControlledPasswordField name="password" label="Password" />

        <Button
          type="submit"
          disabled={isLoading || isSubmitted}
          loading={isLoading}
          className="w-fit ml-auto"
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export { SignInForm };
