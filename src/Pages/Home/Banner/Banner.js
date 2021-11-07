import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    banner: `url(${bg})`,
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {

    return (
        <Container style={bannerBg} sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <Box>
                    <Typography variant="h3" sx={{mb: 2}}>
                        Your new smile start here
                    </Typography>
                    <Typography variant="p" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit officia culpa nulla harum a, ut ipsam nam, error animi eveniet ratione.
                    </Typography>
                    <br />
                    <Button sx={{mt: 2}} variant="outlined">Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;