import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const AvailableAppoinment = ({date}) => {
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
    return (
        <Container>
            <h1>Available date {date.toDateString()}</h1>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;