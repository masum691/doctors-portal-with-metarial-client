import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

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

const BookingModal = ({ open, handleClose, booking, date }) => {
    const { name, time } = booking;
    const handleSubmit = e => {
        alert('Submit successfully')
        handleClose()
        e.preventDefault()
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
                        id="outlined-size-small"
                        size="small"
                        />
                        <TextField
                        sx={{width: '100%', m:1}}
                        label="Your email"
                        id="outlined-size-small"
                        size="small"
                        />
                        <TextField
                        sx={{width: '100%', m:1}}
                        label="Phone number"
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