import { Link as RouterLink } from "@tanstack/react-router"

import type { LinkProps as RouterLinkProps } from "@tanstack/react-router"
import type { ButtonProps } from "ui"

import { buttonVariants } from "ui"
import { cn } from "utils/cn"

type LinkProps = {
  className?: string
  variant?: ButtonProps["variant"]
} & RouterLinkProps

const Link = ({
  children,
  className,
  variant = "link",
  ...props
}: LinkProps) => {
  return (
    <RouterLink
      className={buttonVariants({
        variant,
        className: cn(
          "h-fit py-0 pr-0 underline-offset-4 hover:underline",
          className
        )
      })}
      {...props}
    >
      {children}
    </RouterLink>
  )
}

export { Link }
