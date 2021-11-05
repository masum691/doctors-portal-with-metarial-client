import { Container, Grid } from '@mui/material';
import React from 'react';
import loginImg from '../../../../images/login.png'

const Login = () => {
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '200px'}} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;