import { GetMeQueryResponse, UpdateUserFormTypes, useAuth } from "@ap2p/auth"
import { toast } from "@ap2p/ui"
import { useQueryClient } from "@tanstack/react-query"
import { useMutation } from "hooks/use-mutation/use-mutation"
import { SubmitHandler } from "react-hook-form"

const useUpdateUser = () => {
  const { user } = useAuth()
  const queryClient = useQueryClient()

  const {
    mutate: updateUser,
    isPending,
    isSuccess
  } = useMutation("updateUserMutation", {
    onSuccess: (payload) => {
      toast.success("User updated successfully")

      queryClient.setQueryData(["me"], (data: GetMeQueryResponse) => {
        return {
          ...data,
          ...payload
        }
      })
    },
    onError: () => {
      toast.error("Something went wrong")
    }
  })

  const handleSubmit: SubmitHandler<UpdateUserFormTypes> = (data) => {
    updateUser(data)
  }

  return {
    user,
    handleSubmit,
    isLoading: isPending,
    isSubmitted: isSuccess
  }
}

export { useUpdateUser }
