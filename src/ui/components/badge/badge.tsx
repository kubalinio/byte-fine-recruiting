import * as React from "react"

import type { VariantProps } from "utils"

import { cn } from "utils/cn"

import { badgeVariants } from "./variants"

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof badgeVariants> {
  selected?: boolean
}

export function Badge(props: BadgeProps) {
  const { className, variant, color, size, ...restProps } = props
  return (
    <div
      className={cn(badgeVariants({ color, variant, size }), className)}
      {...restProps}
    />
  )
}
