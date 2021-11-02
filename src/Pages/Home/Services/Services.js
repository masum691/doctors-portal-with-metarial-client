import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import flouride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';



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
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Monospace', marginTop: '50px', color: 'info.main', mt: 4 }} variant="h4" component="div">
                    Our Service
                </Typography>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', mt: 2, mb: 5 }} variant="h4" component="div">
                   Service we provide
                </Typography>
                <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;