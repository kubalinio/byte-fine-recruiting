// 'use client'

// import React from 'react'
// import type { FieldValues, Path } from 'react-hook-form'
// import { useFormContext } from 'react-hook-form'

// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
//   RadioGroup,
//   RadioGroupItemDefault,
// } from "@mqs/ui"
// import { cn } from "@mqs/utils"

// type RadioOption = {
//   value: string
//   label: string
// }

// type RadioGroupFieldProps = {
//   className?: string
//   label?: string
//   description?: string
//   options: RadioOption[]
//   showError?: boolean
// }

// type RadioGroupControllerType<T extends FieldValues> = {
//   name: Path<T>
//   requiredStar?: boolean
// }

// interface ControlledRadioGroupProps<T extends FieldValues>
//   extends Omit<RadioGroupFieldProps, 'name'>,
//     RadioGroupControllerType<T> {}

// const ControlledRadioGroupField = <T extends FieldValues>({
//   name,
//   label,
//   description,
//   options,
//   className,
//   showError = true,
// }: ControlledRadioGroupProps<T>) => {
//   const { control } = useFormContext()

//   return (
//     <FormField
//       name={name}
//       control={control}
//       // defaultValue={options[0].value as Path<T>}
//       render={({ field, fieldState }) => (
//         <FormItem className={cn('w-full space-y-4', className)}>
//           {label && (
//             <FormLabel
//               className={cn(
//                 'font-semibold text-gray-900',
//                 fieldState.error && 'text-error-500',
//               )}>
//               {label}
//             </FormLabel>
//           )}

//           <FormControl>
//             <RadioGroup
//               onValueChange={field.onChange}
//               // defaultValue={field.value}
//               className="gap-y-4">
//               {options.map(option => (
//                 <FormItem
//                   key={option.value}
//                   className="flex w-full items-start gap-x-2">
//                   <FormControl>
//                     <RadioGroupItemDefault
//                       className="m-0 mt-[2px]"
//                       value={option.value}
//                     />
//                   </FormControl>

//                   <FormLabel className="mb-0 font-normal !text-gray-700">
//                     {option.label}
//                   </FormLabel>
//                 </FormItem>
//               ))}
//             </RadioGroup>
//           </FormControl>

//           {description && <FormDescription>{description}</FormDescription>}

//           {showError && <FormMessage />}
//         </FormItem>
//       )}
//     />
//   )
// }

// export { ControlledRadioGroupField }
