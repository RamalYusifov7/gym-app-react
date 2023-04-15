import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Input } from '../Mui/Input'
import { Button } from '../Mui/Button'
import { useGlobalContext } from '../../context/GlobalContext'


function SearchEx() {
  const [search, setSearch] = useState("")
  const { exercises, setSearchedExs } = useGlobalContext();

  const searchExercises = () => {
    if (search) {
      const result = exercises.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
      )
      setSearchedExs(result)
    }
    window.scrollTo({top:800,behavior:"smooth"})
  }
  
  return (
    <Box component="section" sx={{ padding: { xs: "32px 0 38px", lg: "80px 0 30px " } }}>
      <Container>
        <Typography variant='h2' fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '28px' } }} mb="48px" textAlign="center">
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box sx={{ maxWidth: "900px", position: "relative" }}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text" />
          <Button onClick={searchExercises} className='search-btn'>Search</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default SearchEx