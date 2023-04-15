import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box
    mt="80px"
    bgcolor="#FFF3F4"
    sx={{
      textAlign: 'center',
      paddingTop: '41px',
      paddingBottom: '40px',
      '& h5': {
        fontSize: { lg: '28px', xs: '20px' }
      }
    }}
  >
    <Typography variant="h5">Ramal Yusifov</Typography>
  </Box>
  )
}

export default Footer