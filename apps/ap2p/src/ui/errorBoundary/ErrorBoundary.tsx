import { ErrorInfo } from "react"

import { logger } from "integrations/logger"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

import { ErrorBoundaryProps } from "./ErrorBoundary.types"

export const ErrorBoundary = ({
  shouldLog = true,
  onError,
  ...props
}: ErrorBoundaryProps) => {
  const handleError = (error: Error, errorInfo: ErrorInfo) => {
    if (shouldLog) {
      logger.error(error)
    }
    onError?.(error, errorInfo)
  }

  return <ReactErrorBoundary onError={handleError} {...props} />
}
