import {
  createTheme, Container, CssBaseline, Box, Avatar,
  Typography, Grid, TextField, FormControlLabel, Checkbox, Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { v4 as uid } from 'uuid';
import { IUser } from '../../redux/Users/UsersInterfaces';
import { createUserStart } from '../../redux/Users/UsersActions';

const theme = createTheme();

const Registration = () => {
  const [userCredantials, setUserCredantials] = useState<IUser>({
    email: '',
    password: '',
    name: '',
    username: '',
    surname: '',
    id: uid(),
  });
  const location = useNavigate();
  console.log(location);
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const { value, name } = event.target;

    setUserCredantials({ ...userCredantials, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(createUserStart(userCredantials));
    location('/im', { replace: true });
    setUserCredantials({
      email: '',
      password: '',
      name: '',
      username: '',
      surname: '',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={userCredantials.name}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="surname"
                  value={userCredantials.surname}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={userCredantials.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="username"
                  label="Username"
                  type="text"
                  id="userName"
                  value={userCredantials.username}
                  autoComplete="username"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={userCredantials.password}
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registration;
