import { SignUpFormSchemaType } from "@ap2p/auth"
import { useNavigate } from "@tanstack/react-router"
import { useMutation } from "hooks/use-mutation/use-mutation"
import { SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

const useSignUp = () => {
  const navigate = useNavigate()
  const { mutate: signUp, isPending, isSuccess } = useMutation("signUpMutation")

  const onSubmit: SubmitHandler<SignUpFormSchemaType> = (data) => {
    signUp(data, {
      onSuccess: () => {
        navigate({
          to: "/sign-in"
        })
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  }

  return { onSubmit, isPending, isSuccess }
}

export { useSignUp }
