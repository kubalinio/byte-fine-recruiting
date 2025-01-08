import * as React from "react";

import type { VariantProps } from "@ap2p/utils";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn, cva } from "@ap2p/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "bg-muted text-muted-foreground inline-flex h-12 items-center justify-center gap-x-6 rounded-md",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const tabTriggerVariants = cva("", {
  variants: {
    variant: {
      default:
        "relative inline-flex h-full items-center justify-center gap-x-2 whitespace-nowrap rounded-sm pb-[0.68rem] pt-[0.8125rem] text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    },
    state: {
      default:
        "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      underline:
        "after:absolute after:bottom-0 after:left-0 after:hidden after:h-0.5 after:w-full after:rounded-full after:bg-primary data-[state=active]:text-foreground data-[state=active]:after:block",
    },
  },
  defaultVariants: {
    variant: "default",
    state: "default",
  },
});

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabTriggerVariants> {}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ variant, state, className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabTriggerVariants({ variant, state, className }), className)}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-ring mt-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
