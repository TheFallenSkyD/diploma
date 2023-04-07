import React from 'react'
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'

const GenerateButton = ({ sx = {}, ...props }: LoadingButtonProps) => {
  return (
    <LoadingButton
      fullWidth
      {...props}
      sx={{
        p: 4,
        fontWeight: 400,
        color: 'white',
        border: 'none',
        background:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(157,31,48,1) 50%, rgba(252,176,69,1) 100%)',
        ...sx,
      }}
    >
      Generate
    </LoadingButton>
  )
}

export default GenerateButton
