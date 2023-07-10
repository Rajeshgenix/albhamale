import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import sideimage from './../img/alphaale.jpg'
// import headerimage from './../img/Alphamale_heading.png'

import GoogleLogin from "./Googlelogin";
import Facebooklogin from "./Facebooklogin"

import Applelogin from "./Maclogin"

import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';


const defaultTheme = createTheme();


const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={6}
                    sx={{
                        // backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        // backgroundImage: `url(${sideimage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
            

                        {/* <img src={headerimage}
                            style={{ width: '185px' }} alt="logo" /> */}


                        <Typography component="h1" variant="h5">
                            Welcome Back
                        </Typography>


                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                          
                            <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ mt: 2 }} >

                                <Root>
                                    <Divider>
                                        OR
                                    </Divider>
                                </Root>

                                <Grid item xs={1.5} sx={{ mt: 2 }}>
                                    <GoogleLogin />
                                </Grid>
                                <Grid item xs={1.5} sx={{ mt: 2 }}>
                                    <Facebooklogin />
                                </Grid>
                                <Grid item xs={1.5} sx={{ mt: 2 }}>
                                    <Applelogin />
                                </Grid>

                            </Grid>

                            {/* <Grid container spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 2 }} >
                                <Grid item xs={1}>
                                    <GoogleLogin />
                                </Grid>
                                <Grid item xs={1}>
                                    <Facebooklogin />
                                </Grid>
                                <Grid item xs={1}>
                                    <Applelogin />
                                </Grid>
                            </Grid> */}


                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}