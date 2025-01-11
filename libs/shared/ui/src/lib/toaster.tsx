"use client"

import { cva } from "@ap2p/utils"
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

// import { AlertCircle, AlertTriangle, CheckCircle, InfoCircle } from "../icons"

type ToasterProps = React.ComponentProps<typeof Sonner>

const toastClass = cva(
  "toast group flex h-[50px] w-full items-center gap-3 bg-white rounded-md border px-4 py-3 text-sm [&>div>div]:font-normal",
  {
    variants: {
      type: {
        info: "border-info-light bg-info-lighter text-info-darker",
        warning: "border-warning-light bg-warning-lighter text-warning-darker",
        success: "border-success-light bg-success-lighter text-success-darker",
        error: "border-error-light bg-error-lighter text-error-darker"
      }
    }
  }
)

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme() as {
    theme: "system" | "light" | "dark"
  }

  return (
    <Sonner
      theme={theme}
      className='toaster group'
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: toastClass(),
          info: toastClass({ type: "info" }),
          warning: toastClass({ type: "warning" }),
          success: toastClass({ type: "success" }),
          error: toastClass({ type: "error" }),
          actionButton:
            "border font-bold rounded-md px-[10px] py-1 border-solid h-[30px] text-xs group-data-[type=info]:text-info-darker group-data-[type=info]:border-info-darker group-data-[type=warning]:text-warning-darker group-data-[type=warning]:border-warning-darker group-data-[type=success]:text-success-darker group-data-[type=success]:border-success-darker group-data-[type=error]:text-error-darker group-data-[type=error]:border-error-darker",
          cancelButton:
            "group-data-[type=info]:text-info-darker group-data-[type=warning]:text-warning-darker group-data-[type=success]:text-success-darker group-data-[type=error]:text-error-darker"
        }
      }}
      icons={{
        success: <CheckCircle className='size-5 text-success' />,
        info: <Info className='size-5 text-info' />,
        warning: <AlertTriangle className='size-5 text-warning' />,
        error: <AlertCircle className='size-5 text-error' />
      }}
      duration={2000}
      position='top-right'
      {...props}
    />
  )
}

export { Toaster }
