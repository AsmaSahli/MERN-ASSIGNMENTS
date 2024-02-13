import React, { useState } from 'react'
import Header from './Header'
import { Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddPlayer = () => {
  const [positionOptions]=useState([ "Forword","MidFielder","GoalKeeper"]);
  const [name,setName]=useState("")
  const [position ,setPosition]=useState("")
  const nav =useNavigate()
  const [errors, setErrors] = useState([]); 

  const playerHandler=(event)=>{
    event.preventDefault()
    const newplayer={
        name,
        position,

        
    }
    axios.post("http://127.0.0.1:8000/api/Player/",newplayer)
        .then(
            res=>{
                console.log("player Added successfully",res.data)
                nav('/')
            }
        )
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        }) 
}
  return (
    <>
        <Header/>
        <Container maxWidth="sm">
          <Card>
          <CardHeader title="Add Player" />
              <CardContent>
              {errors.map((err, index) => (
                    <p key="{index}" style={{color:'red', fontSize:'small'}} >{err}</p>
                ))}
              <TextField label="Player Name" fullWidth onChange={(e) => setName(e.target.value)} margin="normal"/>
              <FormControl fullWidth>
            <InputLabel>Preferred Position</InputLabel>
            <Select
            label="Preferred Position"
            onChange={(e) => setPosition(e.target.value)}
            >
            {positionOptions.map((position) => (
                <MenuItem key={position} value={position}>
                {position}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
              </CardContent>
              <CardActions >
                  <Button variant='contained' size='small' color='success' onClick={playerHandler} > Add</Button>
              </CardActions>

          </Card>

        </Container>
    </>
  )
}

export default AddPlayer