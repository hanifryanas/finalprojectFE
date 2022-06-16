import React, { useState } from 'react';
import axios from 'axios';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Melelang
      </Link>{'/'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SignUpForm = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3500/user/signup', {
      username : name,
      password : password,
      email : email,
      phone : phone,
      address : address,
    })
    .then((response) => {
      alert("Register success, you may now login first!")
      navigate('/signin');
    }
    )
    .catch((error) => {
      alert(error.response.data)
      console.log(error);
    }
    );
  }


  return (
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
        <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="given-name"
                name="Name"
                required
                fullWidth
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label=" Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                label="Phone"
                type="Phone"
                id="Phone" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="Address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                label="Address"
                type="Address"
                id="Address" />
            </Grid>
            <Grid item xs={12}>
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
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );

}

export default SignUpForm