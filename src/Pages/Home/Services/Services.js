import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import flouride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const services = [
    {
        name: 'Floride Treatment',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id, molestias dolorem expedita, cumque omnis, consequatur pariatur quia non qui ratione voluptatem!',
        img: flouride
    },
    {
        name: 'Cavity Treatment',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id, molestias dolorem expedita, cumque omnis, consequatur pariatur quia non qui ratione voluptatem!',
        img: cavity
    },
    {
        name: 'Whitening Treatment',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit id, molestias dolorem expedita, cumque omnis, consequatur pariatur quia non qui ratione voluptatem!',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((_, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                        <Service>xs=2</Service>
                    </Grid>
                ))}
            </Grid>
            </Container>
        </Box>
    );
};

export default Services;