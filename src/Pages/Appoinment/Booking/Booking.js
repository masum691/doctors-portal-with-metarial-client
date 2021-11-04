import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

const Booking = ({booking}) => {
    const {name, time, space} = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{p: 2 , textAlign: 'center'}}>
                <Typography sx={{color: 'info.main'}} component="div" gutterBottom variant="h5">
                    {name}
                </Typography>
                <Typography component="div" gutterBottom variant="h6">
                    {time}
                </Typography>
                <Typography component="div" gutterBottom variant="p">
                    {space} spaces available
                </Typography>
                <Button sx={{mt:2}} variant="contained">Book Appoinment</Button>
            </Paper>
        </Grid>
    );
};

export default Booking;