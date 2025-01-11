import { cn } from "@ap2p/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string
}

const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <hr
      className={cn(
        'border-gray-[#cfcfcf]" w-full border-t border-solid',
        className
      )}
      {...props}
    />
  )
}

export { Divider }
