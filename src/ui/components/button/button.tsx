import * as React from "react"

import type { VariantProps } from "class-variance-authority"

import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "utils/cn"

const buttonVariants = cva(
  "focus-visible:ring-offset-primary-50 focus-visible:ring-primary-50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[0.9375rem] font-semibold leading-6 transition-colors focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-offset-[-1px] disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground focus-visible:bg-primary-50 disabled:bg-black-25 p-0 hover:bg-[#550788] focus-visible:ring ",
        destructive:
          "bg-background text-destructive hover:text-destructive/90 hover:border-destructive/90 border-destructive rounded-none border-b text-lg",
        outline:
          "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        action:
          "bg-white-50 [&_svg]:text-black-75 hover:bg-white-25 size-full flex-col rounded-[0.625rem] focus-visible:ring-4 focus-visible:ring-inset disabled:opacity-25 [&_svg]:size-32"
      },
      size: {
        default: "px-8 py-2",
        sm: "rounded-md px-8 py-1",
        lg: "rounded-md px-8 py-2",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
