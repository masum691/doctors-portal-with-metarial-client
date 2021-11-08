import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography sx={{ color: 'info.main' }} component="div" gutterBottom variant="h5">
                        {name}
                    </Typography>
                    <Typography component="div" gutterBottom variant="h6">
                        {time}
                    </Typography>
                    <Typography component="div" gutterBottom variant="p">
                        {space} spaces available
                    </Typography>
                    <Button onClick={handleOpen} sx={{ mt: 2 }} variant="contained">Book Appoinment</Button>
                </Paper>
            </Grid>
            <BookingModal
             date={date}
             booking={booking}
             open={open}
             handleClose={handleClose}
             setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;