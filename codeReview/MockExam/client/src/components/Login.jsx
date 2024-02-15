import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const [errors, setErrors] = useState([]);

  const userHandler = (event) => {
    event.preventDefault();
    const newuser = {
    email,
    password,
    };
    axios.post('http://127.0.0.1:8000/api/login/', newuser,{withCredentials: true})
    .then((res) => {
        console.log("success", res.data);
        nav('/OrdersList');
    })
    .catch(err => {console.log(err)});
};

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>
          <form onSubmit={userHandler}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
          <Typography variant="body2" color="textSecondary" mt={2}>
            Don't have an account?{' '}
            <Link href="/register" color="primary">
              Register here
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
