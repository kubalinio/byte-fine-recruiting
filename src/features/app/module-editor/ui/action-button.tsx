import * as React from "react"

import type { ButtonProps } from "ui"

import { Box, Button } from "ui"

type ActionButtonProps = ButtonProps & {
  children: React.ReactNode
}

const ActionButton = ({ children, ...props }: ActionButtonProps) => {
  return (
    <Button variant='action' {...props}>
      {children}
    </Button>
  )
}

type InputProps = Pick<React.InputHTMLAttributes<HTMLInputElement>, "accept">

interface ActionButtonUploadProps extends InputProps {
  children: React.ReactNode
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  "aria-label"?: string
}

const ActionButtonUpload = ({
  children,
  accept,
  ...props
}: ActionButtonUploadProps) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onUpload(e)
  }

  const handleThumbnailClick = React.useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  return (
    <Box className='relative'>
      <input
        type='file'
        ref={fileInputRef}
        className='hidden'
        id='file-upload'
        accept={accept}
        onChange={handleChange}
      />

      <Button
        variant='action'
        className='peer-disabled:cursor-not-allowed peer-disabled:opacity-25'
        tabIndex={0}
        onClick={handleThumbnailClick}
        aria-label={props["aria-label"] ?? "Upload file"}
      >
        {children}
      </Button>
    </Box>
  )
}

export { ActionButton, ActionButtonUpload }
