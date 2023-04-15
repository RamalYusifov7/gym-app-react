import React from 'react'
import Loading from '../Loading'
import { Box, Container, Stack, Typography } from '@mui/material'
import Slider from '../Slider/Slider'

function SimiliarExercises({ targets, isTrgLoading, trgError }) {
  if (isTrgLoading) {
    return <Loading />
  }
  if (trgError) {
    return <div className='error'>404 Error</div>
  }
  else {
    return (
      <Box component="section">
        <Container>
          <Typography variant='h2' sx={{ fontSize: { lg: '44px', xs: '24px' },mb:{xs:"22px",lg:"32px"} }} fontWeight={700} color="#000" >
            Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
          </Typography>
          <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            <Slider data={targets} />
          </Stack>
        </Container>
      </Box>
    )
  }
}

export default SimiliarExercises