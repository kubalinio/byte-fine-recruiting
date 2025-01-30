import * as React from "react"

import type { VariantProps } from "class-variance-authority"

import { cva } from "class-variance-authority"
import { cn } from "utils/cn"

const containerVariants = cva("mx-auto", {
  variants: {
    variant: {
      fullMobileConstrainedPadded: "max-w-7xl sm:px-6 lg:px-8",
      constrainedPadded: "max-w-7xl px-4 sm:px-6 lg:px-8",
      fullMobileBreakpointPadded: "container mx-auto sm:px-6 lg:px-8",
      narrowConstrainedPadded: "max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8",
      withoutStyle: "px-0 sm:px-0 lg:px-0",
      breakpointPadded: "container mx-auto px-4 sm:px-6 lg:px-10 lg:pt-6",
      default: "rounded-md bg-white px-6 py-20 shadow-zCard"
    }
  },
  defaultVariants: {
    variant: "breakpointPadded"
  }
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
  as?: React.ElementType
}

const Container: React.FC<ContainerProps> = ({
  asChild,
  as,
  className,
  children,
  variant,
  ...props
}) => {
  const Comp = asChild ? React.Fragment : as ? as : "div"

  const containerClasses = cn(containerVariants({ variant }), className)

  return (
    <Comp className={containerClasses} {...props}>
      {variant === "narrowConstrainedPadded" ? (
        <div className='mx-auto max-w-3xl'>{children}</div>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Container, containerVariants }
