import { CanvasSelector, useCanvasStore } from "context/canva-store"
import download from "downloadjs"
import * as htmlToImage from "html-to-image"
import { useShallow } from "zustand/react/shallow"

const useModuleEditor = () => {
  const { setSelectedElement, resetWorkspace, elements } = useCanvasStore(
    useShallow(CanvasSelector)
  )

  const isEmpty = elements.filter((el) => el?.type !== "frame").length > 0

  const handleImageDownload = async () => {
    setSelectedElement(null)

    const node = document.getElementById("canvas")
    if (!node) return

    const currentRect = node.getBoundingClientRect()
    const targetWidth = 1080
    const targetHeight = 1350

    const scaleFactor = targetWidth / currentRect.width

    try {
      const dataUrl = await htmlToImage.toPng(node, {
        width: targetWidth,
        height: targetHeight,
        pixelRatio: 1,
        skipAutoScale: true,
        style: {
          transform: `scale(${scaleFactor})`,
          transformOrigin: "top left",
          width: `${currentRect.width}px`,
          height: `${currentRect.height}px`
        },
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

  return {
    isEmpty,
    handleImageDownload,
    handleResetWorkspace
  }
}

export { useModuleEditor }
