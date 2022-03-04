import {
  createTheme, Container, CssBaseline, Box, Avatar,
  Typography, Grid, FormControlLabel, Checkbox, Button,
} from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { IUser } from '../../redux/Users/UsersInterfaces';
import { createUserStart } from '../../redux/Users/UsersActions';

const theme = createTheme();

const Registration = () => {
  const [userCredentials, setUserCredentials] = useState<IUser>({
    email: '',
    password: '',
    firstName: '',
    secondName: '',
    username: '',
    phone: '',
    posts: [],
  });
  const location = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    dispatch(createUserStart(userCredentials));
    location('/im', { replace: true });
    setUserCredentials({
      email: '',
      password: '',
      firstName: '',
      secondName: '',
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
          <Box sx={{ mt: 3 }}>
            <ValidatorForm
              onSubmit={handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={userCredentials.firstName}
                    onChange={handleChange}
                    autoFocus
                    validators={['required']}
                    errorMessages={['this field is required']}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="secondName"
                    value={userCredentials.secondName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={userCredentials.email}
                    onChange={handleChange}
                    validators={['required', 'isEmail']}
                    errorMessages="Input valid email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    required
                    fullWidth
                    id="number"
                    label="Phone number"
                    name="phone"
                    autoComplete="phone"
                    value={userCredentials.phone}
                    validators={['required']}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    fullWidth
                    name="username"
                    label="Username"
                    type="text"
                    id="userName"
                    value={userCredentials.username}
                    autoComplete="username"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="standard-required-passwordConfirm"
                    value={userCredentials.password}
                    autoComplete="new-password"
                    validators={['required']}
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
            </ValidatorForm>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registration;
