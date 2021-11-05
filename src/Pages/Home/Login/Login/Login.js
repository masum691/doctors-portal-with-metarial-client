import { Container, Grid, Button } from '@mui/material';
import React, {useState} from 'react';
import loginImg from '../../../../images/login.png'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        alert('hello')
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom component="div">
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField id="standard-basic"
                            sx={{ width: '50%', m: 1 }}
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField id="standard-basic"
                            sx={{ width: '50%', m: 1 }}
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button variant="contained" type="submit" sx={{ width: '50%', m: 1 }}>Login</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;