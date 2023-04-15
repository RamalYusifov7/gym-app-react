
import { Typography, Box, Container, Grid } from '@mui/material';
import Loading from '../Loading';

const ExerciseVideos = ({ isVdLoading, exerciseVideos, name, vdError }) => {
  if (isVdLoading) return <Loading />;
  if (vdError) return <div className='error'>Error</div>
  return (
    <Box
      component="section"
      sx={{ padding: { lg: '80px 0 80px', xs: '32px 0 32px' } }}
    >
      <Container>
        <Typography sx={{ fontSize: { lg: '36px', xs: '22px' } }} fontWeight={700} color="#000" mb="33px">
          Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
        </Typography>
        <Grid container spacing={2}>
          {exerciseVideos?.contents?.slice(0, 3)?.map((item, index) => {
            return (
              <Grid item sm={6} lg={4}>
                <a
                  key={index}
                  className="exercise-video"
                  href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Box>
                    <img style={{ borderTopLeftRadius: '20px' }} src={item.video?.thumbnails[0].url} alt={item.video?.title} />
                  </Box>
                  <Box>
                    <Typography variant='h4' className='text-2' sx={{ fontSize: { lg: '20px', xs: '16px' }, padding: "12px 0 16px" }} fontWeight={600} color="#000">
                      {item.video?.title}
                    </Typography>
                    <Typography fontSize="14px" color="#000">
                      {item.video?.channelName}
                    </Typography>
                  </Box>
                </a>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExerciseVideos;