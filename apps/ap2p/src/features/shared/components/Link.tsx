import { buttonVariants } from "@ap2p/ui"
import { cn } from "@ap2p/utils"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "@tanstack/react-router"

type LinkProps = {
  className?: string
} & RouterLinkProps

const Link = ({ children, className, ...props }: LinkProps) => {
  const { button } = buttonVariants()

  return (
    <RouterLink
      className={button({
        variant: "link",
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
