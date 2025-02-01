import { EditorBg } from "assets/icons"

import { useAddBackground } from "../hooks/use-add-background"
import { ActionButtonUpload } from "./action-button"

const AddBackground = () => {
  const { handleUploadAndChangeBackground } = useAddBackground()

  return (
    <ActionButtonUpload
      aria-label='Upload background image'
      accept='image/png, image/jpeg, image/jpg, image/webp'
      onUpload={handleUploadAndChangeBackground}
    >
      <EditorBg />

      <span>Background</span>
    </ActionButtonUpload>
  )
}

export { AddBackground }
