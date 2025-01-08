import * as React from "react";

import { ClockIcon } from "lucide-react";

import { cn } from "@ap2p/utils";

import { Typography } from "./typography";

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol ref={ref} className={cn("flex flex-col", className)} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "group relative flex flex-col gap-y-1 px-6 pb-4 pt-0",
      className
    )}
    {...props}
  />
));
TimelineItem.displayName = "TimelineItem";

const TimelineTime: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <div className="flex items-center gap-2 pl-6">
    <ClockIcon className="size-4 text-gray-500" />

    <Typography
      variant="caption"
      className={cn("text-gray-500", className)}
      {...props}
    />
  </div>
);

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute -top-3 left-[30px] h-[calc(100%-28px)] -translate-x-1/2 translate-y-2",
      className
    )}
    {...props}
  />
));
TimelineConnector.displayName = "TimelineConnector";

const TimelineConnectorLine = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-primary absolute left-0 top-5 h-full w-px -translate-x-1/2 translate-y-2",
      className
    )}
    {...props}
  />
));
TimelineConnectorLine.displayName = "TimelineConnectorLine";

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-start gap-y-1", className)}
    {...props}
  />
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "group-data-[active=true]:text-primary-foreground pl-6 text-sm font-semibold text-gray-600",
      className
    )}
    {...props}
  >
    {children}
  </h3>
));
TimelineTitle.displayName = "CardTitle";

const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute -top-1.5 left-0 size-6 -translate-x-1/2 translate-y-2 rounded-full [&>svg]:size-6",
      {
        "bg-primary": !props.children,
        className,
      }
    )}
    {...props}
  />
));
TimelineIcon.displayName = "TimelineIcon";

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground max-w-sm text-sm", className)}
    {...props}
  />
));
TimelineDescription.displayName = "TimelineDescription";

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-start p-6 py-0", className)}
    {...props}
  />
));
TimelineContent.displayName = "TimelineContent";

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineConnectorLine,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
};
