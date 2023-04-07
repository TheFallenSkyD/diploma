import { GridProps, Grid } from '@mui/material'
import React from 'react'

const Container = ({ sx = {}, children, ...props }: GridProps) => {
  return (
    <Grid
      container
      {...props}
      sx={{
        maxWidth: '1640px',
        mt: '10vh',
        mx: 'auto',
        ...sx,
      }}
    >
      {children}
    </Grid>
  )
}

export default Container
