import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const {user} = useAuth();
    const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const appoinment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toDateString()
        }
        
        // send to the server
        fetch('http://localhost:5000/appoinments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setBookingSuccess(true);
                handleClose();
            }
        })
        handleClose()
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                        disabled
                        sx={{width: '100%', m:1}}
                        label="time"
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                        />
                        <TextField
                        sx={{width: '100%', m:1}}
                        label="Your name"
                        onBlur={handleOnBlur}
                        name="patientName"
                        id="outlined-size-small"
                        size="small"
                        />
                        <TextField
                        sx={{width: '100%', m:1}}
                        label="Your email"
                        name="email"
                        onBlur={handleOnBlur}
                        id="outlined-size-small"
                        size="small"
                        />
                        <TextField
                        sx={{width: '100%', m:1}}
                        label="Phone number"
                        name="phone"
                        onBlur={handleOnBlur}
                        id="outlined-size-small"
                        size="small"
                        />
                        <TextField
                        disabled
                        sx={{width: '100%', m:1}}
                        label="date"
                        defaultValue={date.toDateString()}
                        id="outlined-size-small"
                        size="small"
                        />
                        <Button sx={{width: '50%', mt: 1, ml: 1}} variant="contained" type="submit">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;