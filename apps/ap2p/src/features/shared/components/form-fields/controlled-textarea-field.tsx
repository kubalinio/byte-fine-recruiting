// "use client"

// import React from "react"

// import type { FieldValues, Path } from "react-hook-form"

// import { useFormContext } from "react-hook-form"

// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   TextareaAutosize
// } from "@mqs/ui"
// import { cn } from "@mqs/utils"

// type NTextareaFieldProps = {
//   className?: string
//   classNameInput?: string
//   label?: string
//   placeholder?: string
//   description?: string
//   showError?: boolean
//   showUpdated?: boolean
// } & React.TextareaHTMLAttributes<HTMLTextAreaElement>

// type TextareaControllerType<T extends FieldValues> = {
//   name: Path<T>
// }

// interface ControlledInputProps<T extends FieldValues>
//   extends Omit<NTextareaFieldProps, "name">,
//     TextareaControllerType<T> {}

// const ControlledTextareaAutosizeField = <T extends FieldValues>({
//   name,
//   label,
//   placeholder,
//   description,
//   className,
//   classNameInput,
//   showError = true,
//   ...props
// }: ControlledInputProps<T>) => {
//   const { control } = useFormContext()

//   return (
//     <FormField
//       name={name}
//       control={control}
//       render={({ field }) => (
//         <FormItem className={cn("flex w-full flex-col", className)}>
//           {label && <FormLabel>{label}</FormLabel>}

//           <FormControl>
//             <TextareaAutosize
//               className={cn("", classNameInput)}
//               placeholder={placeholder}
//               {...props}
//               {...field}
//             />
//           </FormControl>

//           {description && <FormDescription>{description}</FormDescription>}

//           {showError && <FormMessage />}
//         </FormItem>
//       )}
//     />
//   )
// }

// export { ControlledTextareaAutosizeField }
