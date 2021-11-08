import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Lorem Ipsum',
        time: '07.00 PM - 08.00 PM',
        space: 12
    },
    {
        id: 2,
        name: 'Lorem Ipsum',
        time: '05.00 PM - 08.00 PM',
        space: 10
    },
    {
        id: 3,
        name: 'Lorem Ipsum',
        time: '03.00 PM - 06.00 PM',
        space: 15
    },
    {
        id: 4,
        name: 'Lorem Ipsum',
        time: '11.00 PM - 12.00 AM',
        space: 22
    },
    {
        id: 5,
        name: 'Lorem Ipsum',
        time: '06.00 PM - 08.00 PM',
        space: 20
    },
    {
        id: 6,
        name: 'Lorem Ipsum',
        time: '07.00 PM - 08.00 PM',
        space: 16
    }
]

const AvailableAppoinment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    
    return (
        <Container>
            <Typography variant="h3" sx={{ my: 4, textAlign: 'center', color: 'purple' }}>
                Available date {date.toDateString()}
            </Typography>
            {
                bookingSuccess && <Alert severity="success">Appoinment booked successfully successfully</Alert>

            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;