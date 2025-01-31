import { CanvasSelector, useCanvasStore } from "context/canva-store"
import download from "downloadjs"
import { AddImage } from "features/app/module-editor/components/add-image"
import { AddText } from "features/app/module-editor/components/add-text"
import * as htmlToImage from "html-to-image"
import { Box, Button, Separator, Typography } from "ui"
import { useShallow } from "zustand/react/shallow"

import { AddBackground } from "./components/add-background"
import { Header } from "./ui/header"

const ModuleEditor = () => {
  const { selectedElement, setSelectedElement } = useCanvasStore(
    useShallow(CanvasSelector)
  )

  const handleImageDownload = () => {
    setSelectedElement(null)

    const node = document.getElementById("canvas")
    if (!node) return

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        const img = new Image()
        img.src = dataUrl
        download(dataUrl, "my-node.png")
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error)
      })
  }

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

      <Button className='mt-auto self-end' onClick={handleImageDownload}>
        Export to PNG
      </Button>
    </div>
  )
}

export default ModuleEditor
