import {
  FallbackProps as ErrorBoundaryFallbackProps,
  ErrorBoundaryProps as ReactErrorBoundaryProps
} from "react-error-boundary"

export type ErrorBoundaryProps = ReactErrorBoundaryProps & {
  shouldLog?: boolean
}

export type FallbackProps = ErrorBoundaryFallbackProps
