import { Box, Container, Grid, Typography } from '@mui/material';
import HeroBannerImage from '../../assets/images/banner.png';
import { useTheme } from '@emotion/react';
import { Button } from '../Mui/Button';
function Banner() {
    const { palette } = useTheme()
    return (
        <Box component="section" sx={{ padding: { xs: "24px 0 24px", md: "40px 0 40px " }, lg: "60px 0 60px" }}>
            <Container>
                <Grid container alignItems="flex-start" position="relative">
                    <Grid item xs={12} lg={6}>
                        <Typography
                            variant='h3'
                            fontWeight="600"
                            fontSize="26px"
                            color={palette.primary.main}
                            paddingTop="24px"

                        >
                            Fitness Club
                        </Typography>
                        <Typography
                            variant='h2'
                            fontWeight={700}
                            lineHeight="56px"
                            sx={{ fontSize: { lg: '44px', xs: '40px' }, my: { xs: "16px", lg: "24px" } }}>
                            Sweat, Smile <br />
                            And Repeat
                        </Typography>
                        <Typography
                            variant='h4'
                            fontSize="22px"
                            lineHeight="35px"
                            sx={{ mb: "32px" }}
                        >
                            Check out the most effective exercises personalized to you
                        </Typography>
                        <Button >Explore Exercises</Button>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Box width="400px" height="500px" sx={{ display: { xs: "none", lg: "block" } }}>
                            <img src={HeroBannerImage} alt="banner" width="100%" height="100%" style={{ objecFit: "cover" }} />
                        </Box>
                    </Grid>
                    <Typography fontWeight={600} color="#FF2625"
                        sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '160px', position: "absolute", bottom: "-60px", zIndex: "-1" }}>
                        Exercise
                    </Typography>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner