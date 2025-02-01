import { AddImage } from "features/app/module-editor/components/add-image"
import { AddText } from "features/app/module-editor/components/add-text"
import { Box, Button, Separator, Typography } from "ui"

import { AddBackground } from "./components/add-background"
import { Header } from "./components/header"
import { useModuleEditor } from "./hooks/use-module-editor"

const ModuleEditor = () => {
  const { isEmpty, handleImageDownload, handleResetWorkspace } =
    useModuleEditor()

  return (
    <Box className='flex h-full max-h-[60rem] flex-col gap-y-8'>
      <Header isEmpty={!isEmpty} resetWorkspace={handleResetWorkspace} />

      <Separator />

      <Typography
        as='p'
        variant='body-1'
        className='w-full rounded-[0.625rem] bg-white-50 px-2.5 py-4 text-lg font-bold text-black-100'
      >
        Add content
      </Typography>

      <Box className='grid grid-cols-2 gap-8'>
        <AddText />

        <AddImage />

        <AddBackground />
      </Box>

      <Button
        className='mt-auto self-end'
        disabled={!isEmpty}
        onClick={handleImageDownload}
      >
        Export to PNG
      </Button>
    </Box>
  )
}

export default ModuleEditor
