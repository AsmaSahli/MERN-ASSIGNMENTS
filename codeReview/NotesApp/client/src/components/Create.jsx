import React, { useState } from 'react'
import Header from './Header'
import { Container, Card, CardContent, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const Create = () => {
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [important,setImportant]=useState(false)
    const [errors, setErrors] = useState([]); 
    const nav =useNavigate()
      
  const noteHandler=(event)=>{
    event.preventDefault()
    const newnote={
        title,
        content,
        important

    }
    axios.post("http://127.0.0.1:8000/api/Notes/",newnote)
        .then(
            res=>{
                console.log("Note Added successfully",res.data)
                nav(`/notes/${res.data._id}`)
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
                <CardContent>
                {errors.map((err, index) => (
                    <p key="{index}" style={{color:'red', fontSize:'small'}} >{err}</p>
                ))}
                    <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)}margin="normal"/>
                    <TextField label="Content" multiline rows={4} fullWidth value={content} onChange={(e) => setContent(e.target.value)}  margin="normal"/>
                    <FormControlLabel control={<Checkbox checked={important} onChange={(e) => {  setImportant(e.target.checked); }} />}label="Important"/>

                </CardContent>
                <Button variant="contained" color="primary" onClick={noteHandler} >
                    Create
                </Button>
            </Card>
        </Container>

    </>
)
}

export default Create