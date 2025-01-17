import { GetMeQueryResponse } from "@ap2p/auth"
import { Box, Typography } from "@ap2p/ui"
import { cn } from "@ap2p/utils"
import { useEditable } from "features/app/settings/feature-profile/shared/editable-context-controller"

type ReadonlyDataProps = {
  data: GetMeQueryResponse | undefined
}

const fields = [
  {
    label: "First name",
    value: "first_name"
  },
  {
    label: "Last name",
    value: "last_name"
  },
  {
    label: "Email",
    value: "email"
  },
  {
    label: "Phone",
    value: "phone"
  }
]

const ReadonlyData = ({ data }: ReadonlyDataProps) => {
  const { isEditing } = useEditable()

  if (isEditing) return null
  return (
    <Box className='grid grid-cols-2 gap-4'>
      {fields.map((item) => (
        <Box key={item.label} className='col-span-1 space-y-1'>
          <Typography as='p' variant='body-2' className='text-gray-500'>
            {item.label}
          </Typography>

          <Typography
            as='p'
            variant='subtitle-1'
            className={cn("text-[#4D5154]", {
              "h-6": !data?.[item.value as keyof GetMeQueryResponse]
            })}
          >
            {data?.[item.value as keyof GetMeQueryResponse] ?? ""}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export { ReadonlyData }
