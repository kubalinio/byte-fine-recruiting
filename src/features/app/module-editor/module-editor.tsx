import { AddImage } from "features/app/module-editor/components/add-image"
import { AddText } from "features/app/module-editor/components/add-text"
import { Box, Button, Separator, Typography } from "ui"

import { AddBackground } from "./components/add-background"
import { Header } from "./ui/header"

const ModuleEditor = () => {
  return (
    <div className='flex h-full flex-col gap-y-8'>
      <Header />

      <Separator />

      <Typography
        as='p'
        variant='body-1'
        className='text-black-100 bg-white-50 w-full rounded-[0.625rem] px-2.5 py-4 text-lg font-bold'
      >
        Background
      </Typography>

      <Box className='grid grid-cols-2 gap-8'>
        <AddText />

        <AddImage />

        <AddBackground />
      </Box>

      <Button className='mt-auto self-end'>Export to PNG</Button>
    </div>
  )
}

export default ModuleEditor
