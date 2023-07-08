

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import GoogleLogin from "./Googlelogin";
import Facebooklogin from "./Facebooklogin"

import Applelogin from "./Maclogin"
import { useNavigate } from 'react-router-dom';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Login() {
    const navigate = useNavigate();
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        navigate('/Home');
    };

    return (

        <Box
            border={5}
            boxShadow={30}
            bgcolor="lightgrey"
            color="white"
        >

            <ThemeProvider theme={defaultTheme}>
                <Box
                    border={1}
                    borderColor="red"
                    marginLeft={5}
                    marginRight={5}
                    marginTop={5}
                    marginBottom={5}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="grey"
                    color="white"



                >
                    <Grid container component="main" >
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <Box
                                sx={{
                                    my: 0,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',

                                }}
                            >

                                <div class="text-center">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ width: "185px" }} alt="logo" />
                                    <h4 class="mt-1 mb-5 pb-1">Alpha Male Project</h4>
                                </div>
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Login in
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


                                    <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ mt: 1 }} >
                                        <Typography variant="body2" color="text.secondary" align="center">
                                            Or sign up with:
                                        </Typography>
                                    </Grid>

                                    <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ mt: 1 }} >
                                        <Grid item xs={1.5}>
                                            <GoogleLogin />
                                        </Grid>
                                        <Grid item xs={1.5}>
                                            <Facebooklogin />
                                        </Grid>
                                        <Grid item xs={1.5}>
                                            <Applelogin />
                                        </Grid>
                                    </Grid>

                                    <Copyright sx={{ mt: 5 }} />
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                </Box>
            </ThemeProvider>
        </Box>
    );
}