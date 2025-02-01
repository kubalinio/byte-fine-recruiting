import { EditorImg } from "assets/icons"

import { useAddImage } from "../hooks/use-add-image"
import { ActionButtonUpload } from "./action-button"

const AddImage = () => {
  const { handleUploadAndChangeBackground } = useAddImage()

  return (
    <ActionButtonUpload
      accept='image/png, image/jpeg, image/jpg, image/webp'
      onUpload={handleUploadAndChangeBackground}
    >
      <EditorImg />

      <span>Image</span>
    </ActionButtonUpload>
  )
}

export { AddImage }
