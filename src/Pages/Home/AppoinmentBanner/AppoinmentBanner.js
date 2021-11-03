import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png'
import appoinment from '../../../images/appointment-bg.png'

const appoinmentBg = {
    background: `url(${appoinment})`
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img 
           style={{height: '600px'}}
           src={doctor} alt="" />
        </Grid>
        <Grid item xs={6}>
            <Typography variant="h3">
                Lorem ipsum dolor sit.
            </Typography>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppoinmentBanner;