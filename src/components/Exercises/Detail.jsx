import React from 'react';
import { Typography, Stack, Button, Box, Container, Grid } from '@mui/material';

import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';
import Loading from '../Loading';

const Detail = ({ exerciseDetail, isLoading }) => {

  if (isLoading) {
    return <Loading />
  }

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Box
      component="section"
      sx={{ padding: { xs: "24px 0 24px", lg: "48px 0 48px" } }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} lg={5} >
            <Box sx={{ md: { height: "400px" }, lg: { height: "400px" } }}>
              <img src={gifUrl} alt={name} loading="lazy" width="100%" height="100%" className='obj-cover' />
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <Typography sx={{ fontSize: { lg: '36px', xs: '24px', md: "30px" }, padding: "16px 0" }} fontWeight={700} textTransform="capitalize">
              {name}
            </Typography>
            <Typography sx={{ fontSize: { xs: '16px', md: "18px", xl: "22px" }, padding: "0 0 24px " }} color="#4F4C4C">
              Exercises keep you strong.{' '}
              <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
              of the best <br /> exercises to target your {target}. It will help you improve your{' '}
              <br /> mood and gain energy.
            </Typography>
            {extraDetail?.map((item) => (
              <Stack key={item.name} direction="row" gap="16px" alignItems="center" sx={{ paddingBottom: "16px" }}>
                <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '64px', height: '64px' }}>
                  <img src={item.icon} alt={bodyPart} style={{ width: '32px', height: '32px' }} />
                </Button>
                <Typography textTransform="capitalize" sx={{ fontSize: { lg: '20px', xs: '16px' } }}>
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Detail;