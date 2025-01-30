import * as React from "react"

import type { VariantProps } from "utils"

import { cva } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "utils/cn"

const alertVariants = cva(
  "relative w-full rounded-md border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*:not(button)]:pl-10",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        error:
          "border-error bg-error-lighter text-error-darker [&>button]:border-error-darker [&>button]:text-error-darker [&>svg]:text-error",
        warning:
          "border-warning bg-warning-lighter text-warning-darker [&>button]:border-warning-darker [&>button]:text-warning-darker [&>svg]:text-warning",
        success:
          "border-success bg-success-lighter text-success-darker [&>button]:border-success-darker [&>button]:text-success-darker [&>svg]:text-success",
        info: "border-info bg-info-lighter text-info-darker [&>button]:border-info-darker [&>button]:text-info-darker [&>svg]:text-info"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    className={cn(alertVariants({ variant }), className)}
    ref={ref}
    role='alert'
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(
  ({ className, children, ...props }, ref) =>
    children && (
      <h5
        className={cn(
          "mb-2 mt-1 text-base font-semibold leading-none tracking-tight",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h5>
    )
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    ref={ref}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

const AlertActionButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    className={cn(
      "absolute right-3 top-1/2 h-[30px] -translate-y-1/2 rounded-md border px-2 py-1 text-sm font-bold",
      className
    )}
    ref={ref}
    {...props}
  />
))
AlertActionButton.displayName = "AlertActionButton"

const AlertCancelButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    className={cn(
      "absolute right-3 top-1/2 size-5 -translate-y-1/2 [&>svg]:size-full",
      className
    )}
    ref={ref}
    {...props}
  >
    <X />
  </button>
))
AlertCancelButton.displayName = "AlertCancelButton"

export {
  Alert,
  AlertActionButton,
  AlertCancelButton,
  AlertDescription,
  AlertTitle
}
