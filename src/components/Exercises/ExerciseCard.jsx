import { Box, Button, Stack, Typography } from '@mui/material';
import { CardWrapper } from './CardWrapper';

function ExerciseCard({ id, name, gifUrl, target, bodyPart }) {
    return (
        <CardWrapper to={`/exercise/${id}`}>
            <Box className='card-img' sx={{ height: { xs: "250px", sm: "220px", md: "280px", lg: "300px" } }}>
                <img src={gifUrl} alt={name} loading="lazy" width="100%" height="100%" />
            </Box>
            <Stack direction="row" mt="20px">
                <Button sx={{ ml: '20px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {bodyPart}
                </Button>
                <Button sx={{ ml: '20px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {target}
                </Button>
            </Stack>
            <Typography ml="20px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '20px', xs: '16px' } }} mt="10px" pb="10px" textTransform="capitalize">
                {name}
            </Typography>
        </CardWrapper>
    )
}

export default ExerciseCard