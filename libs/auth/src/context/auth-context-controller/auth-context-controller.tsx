import { useCallback, useEffect, useMemo, useReducer } from "react"

import { toast } from "@ap2p/ui"

import { useMutation } from "../../hooks/use-mutation/use-mutation"
import { useUser } from "../../hooks/use-user"
import {
  resetTokens,
  setTokens
} from "../auth-action-creators/auth-action-creators"
import { AuthContext } from "../auth-context/auth-context"
import { AuthContextValue } from "../auth-context/auth-context.types"
import { authReducer } from "../auth-reducer/auth-reducer"
import { authStorage } from "../auth-storage/auth-storage"
import { AuthContextControllerProps } from "./auth-context-controller.types"

export const AuthContextController = ({
  children
}: AuthContextControllerProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    accessToken: authStorage.accessToken,
    refreshToken: authStorage.refreshToken,
    expires: authStorage.expires
  })

  const {
    data: user,
    isLoadingAndEnabled,
    isSuccess: isUserSuccess,
    isError,
    resetUser
  } = useUser({
    enabled: !!state.accessToken
  })

  const { mutateAsync: login, isPending: isAuthenticating } = useMutation(
    "signInMutation",
    {
      onSuccess: (res) => {
        dispatch(
          setTokens({
            accessToken: res.access_token,
            refreshToken: res.refresh_token,
            // TODO: fix this BE need send expires in seconds
            // 15m
            expires: Math.round(Date.now() / 1000) + 60 * 15
          })
        )
      },
      onError: () => {
        toast.error("Something went wrong")
        dispatch(resetTokens())
        resetUser()
      }
    }
  )

  const logout = useCallback(() => {
    resetUser()
    dispatch(resetTokens())
  }, [resetUser])

  useEffect(() => {
    if (isError) {
      dispatch(resetTokens())
    }
  }, [isError])

  useEffect(() => {
    authStorage.accessToken = state.accessToken
    authStorage.expires = state.expires
    authStorage.refreshToken = state.refreshToken
  }, [state])

  const value: AuthContextValue = useMemo(
    () => ({
      ...state,
      isAuthenticating: isAuthenticating || isLoadingAndEnabled,
      isAuthenticated: isUserSuccess,
      login,
      logout,
      user
    }),
    [
      state,
      isAuthenticating,
      isUserSuccess,
      isLoadingAndEnabled,
      login,
      logout,
      user
    ]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
