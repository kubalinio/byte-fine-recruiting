import { useMutation } from "hooks/use-mutation/use-mutation"
import { SubmitHandler } from "react-hook-form"

import {
  ResetPasswordFormTypes,
  ResetPasswordMutationArgs,
  useAuth
} from "@ap2p/auth"
import { toast } from "@ap2p/ui"

const useResetPassword = () => {
  const { accessToken } = useAuth()

  const {
    mutate: resetPassword,
    isPending,
    isSuccess
  } = useMutation("resetPasswordMutation", {
    onSuccess: () => {
      toast.success("Password updated successfully")
    },
    onError: () => {
      toast.error("Something went wrong")
    }
  })

  const handleChangePassword: SubmitHandler<ResetPasswordFormTypes> = (
    data
  ) => {
    const payload: ResetPasswordMutationArgs = {
      password: data.password,
      token: accessToken ?? ""
    }

    resetPassword(payload)
  }

  return {
    handleChangePassword,
    isPending,
    isSubmitted: isSuccess
  }
}

export { useResetPassword }
