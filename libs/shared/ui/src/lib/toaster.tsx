"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

import { cva } from "@ap2p/utils";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

// import { AlertCircle, AlertTriangle, CheckCircle, InfoCircle } from "../icons"

type ToasterProps = React.ComponentProps<typeof Sonner>;

const toastClass = cva(
  "toast group flex h-[50px] w-full items-center gap-3 rounded-lg border px-4 py-3 text-sm [&>div>div]:font-normal",
  {
    variants: {
      type: {
        info: "border-info-light bg-info-lighter text-info-darker",
        warning: "border-warning-light bg-warning-lighter text-warning-darker",
        success: "border-success-light bg-success-lighter text-success-darker",
        error: "border-error-light bg-error-lighter text-error-darker",
      },
    },
  }
);

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme() as {
    theme: "system" | "light" | "dark";
  };

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: toastClass(),
          info: toastClass({ type: "info" }),
          warning: toastClass({ type: "warning" }),
          success: toastClass({ type: "success" }),
          error: toastClass({ type: "error" }),
          actionButton:
            "border font-bold rounded-lg px-[10px] py-1 border-solid h-[30px] text-xs group-data-[type=info]:text-info-darker group-data-[type=info]:border-info-darker group-data-[type=warning]:text-warning-darker group-data-[type=warning]:border-warning-darker group-data-[type=success]:text-success-darker group-data-[type=success]:border-success-darker group-data-[type=error]:text-error-darker group-data-[type=error]:border-error-darker",
          cancelButton:
            "group-data-[type=info]:text-info-darker group-data-[type=warning]:text-warning-darker group-data-[type=success]:text-success-darker group-data-[type=error]:text-error-darker",
        },
      }}
      icons={{
        success: <CheckCircle className="text-success size-5" />,
        info: <Info className="text-info size-5" />,
        warning: <AlertTriangle className="text-warning size-5" />,
        error: <AlertCircle className="text-error size-5" />,
      }}
      duration={2000}
      position="top-right"
      {...props}
    />
  );
};

export { Toaster };
