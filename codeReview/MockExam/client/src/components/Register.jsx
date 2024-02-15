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

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const nav = useNavigate();
    const [errors, setErrors] = useState([]);

    const userHandler = (event) => {
        event.preventDefault();
        const newuser = {
            username,
            email,
            password,
            confirmPassword,
        };

        axios.post('http://127.0.0.1:8000/api/register/', newuser, { withCredentials: true })
            .then((res) => {
                console.log("success", res.data);
                nav('/OrdersList');
            })
            .catch(err =>{console.log(err)});
    };

    return (
        <Container maxWidth='sm'>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Register
                    </Typography>
                    {/* {errors.map((err, i) => (
                        <p key={i} style={{ color: 'red', fontSize: 'small' }}>{err}</p>
                    ))} */}
 <form  onSubmit={userHandler}>
        <TextField
        label="Username"
        type="username"
        value={username}
        fullWidth
        margin="normal"
        onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
        label="Email"
        type="email"
        value={email}
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
        label="Password"
        type="password"
        value={password}
        fullWidth
        margin="normal"
        onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        fullWidth
        onChange={(e) => setConfirmPassword(e.target.value)}
        margin="normal"
        />
        <Button type="submit" variant="contained" color="secondary" fullWidth>
        Register
        </Button>
    </form>
                    <Typography variant="body2" color="textSecondary" mt={2}>
                        Already have an account?{' '}
                        <Link href="/" color="secondary">
                            Login here
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Register;
