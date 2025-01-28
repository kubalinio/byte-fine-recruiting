import * as React from "react"

import type { VariantProps } from "@ap2p/utils"

import { cn } from "@ap2p/utils"

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
