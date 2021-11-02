import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = ({ service }) => {
    const { name, desc, img } = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, textAlign: 'center', fontWeight: 'bold', fontFamily: 'Monospace' }}>
                <CardMedia
                    component="img"
                    style={{width: '64px', height: '64px', margin: '0px auto'}}
                    image={img}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {desc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;