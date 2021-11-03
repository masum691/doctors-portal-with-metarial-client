import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png'
import appoinment from '../../../images/appointment-bg.png'
import Button from '@mui/material/Button';

const appoinmentBg = {
    background: `url(${appoinment})`,
    marginTop: '120px',
    backgroundColor: 'rgba(2, 11, 20, 0.663)',
    backgroundBlendMode: 'darken'
}

const AppoinmentBanner = () => {
    return (

        <Box style={appoinmentBg} sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <img
                        style={{ height: '600px', marginTop: '-150px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h5" style={{ color: '#0590C4' }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4" sx={{my: 2}}>
                            Make an Appoinment today
                        </Typography>
                        <Typography variant="p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quo id debitis molestias recusandae blanditiis quae doloribus eligendi, aspernatur molestiae, ullam dolore.
                        </Typography>
                        <Button variant="contained" disableElevation sx={{mt:2}}>See More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppoinmentBanner;