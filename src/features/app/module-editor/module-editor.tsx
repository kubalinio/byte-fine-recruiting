import { CanvasSelector, useCanvasStore } from "context/canva-store"
import download from "downloadjs"
import { AddImage } from "features/app/module-editor/components/add-image"
import { AddText } from "features/app/module-editor/components/add-text"
import * as htmlToImage from "html-to-image"
import { Box, Button, Separator, Typography } from "ui"
import { useShallow } from "zustand/react/shallow"

import { AddBackground } from "./components/add-background"
import { Header } from "./components/header"

const ModuleEditor = () => {
  const { setSelectedElement, resetWorkspace, elements } = useCanvasStore(
    useShallow(CanvasSelector)
  )

  const isEmpty = elements.filter((el) => el?.type !== "frame").length > 0

  const handleImageDownload = async () => {
    setSelectedElement(null)

    const node = document.getElementById("canvas")
    if (!node) return

    try {
      const dataUrl = await htmlToImage.toPng(node, {
        // width: 1080,
        // height: 1350,
        pixelRatio: 1,
        skipAutoScale: false,
        filter: (node) => {
          if (node.tagName === "LINK") return false
          if (node.tagName === "IMG") {
            const src = node.getAttribute("src") ?? ""
            return !src.startsWith("http")
          }
          return true
        },
        fontEmbedCSS: ""
      })

      download(dataUrl, "poster-1.png")
    } catch (error) {
      console.error("Failed to generate image:", error)
    }
  }

  const handleResetWorkspace = () => {
    resetWorkspace()
  }

  return (
    <div className='flex h-full max-h-[60rem] flex-col gap-y-8'>
      <Header isEmpty={!isEmpty} resetWorkspace={handleResetWorkspace} />

      <Separator />

      <Typography
        as='p'
        variant='body-1'
        className='bg-white-50 text-black-100 w-full rounded-[0.625rem] px-2.5 py-4 text-lg font-bold'
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
    </div>
  )
}

export default ModuleEditor
