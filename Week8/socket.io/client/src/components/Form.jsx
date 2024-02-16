import React from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const Form = ({username,setUsername ,socket}) => {
    const navigate =useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        socket.emit('joined-server',username)
        navigate('/chat')

    }

return (
    <Container maxWidth='sm'>
    <form onSubmit={handleSubmit}>
    <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
    />
    <br /> <br />
    <Button     type="submit" variant="contained" color="secondary">
        Join
    </Button>
    </form>
    </Container>
)
}

export default Form